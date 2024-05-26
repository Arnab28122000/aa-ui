import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AAMetricsAPI = () => {
    return axios.create({
        baseURL: `https://setu-backend.dashtics.com/aa`,
    });

};

interface INovuAATrend {
    aaName: string;
    data: IAvailibityType[];
}

interface IAvailibityType {
    id: string;
    data: ICoordinate[];
}

interface ICoordinate {
    x: string;
    y: number;
}


const searchAccountAggregators = (name: string) => {
    try {
        return AAMetricsAPI().get(`/search/?aa_name=${name}`);
    } catch (e) {
        throw new Error('Error fetching AA search Data');
    }
};

const novuDataforAA = async (name: string): Promise<INovuAATrend> => {
    try {
        const response = await AAMetricsAPI().get(`/nivo_timeseries_graph/?aa_name=${name}`);
        return response.data;
    } catch (e) {
        throw new Error('Error fetching AA trend data');
    }
};

const SearchAccountAggregators = (name: string) =>
    useQuery({
        queryKey: ["search-account-aggregators", name],
        queryFn: () => searchAccountAggregators(name),
        select: (data: any) => {
            const resp = data.data;
            return resp as Array<string>;
        },
    });

const NovuDataforAA = (name: string) =>
    useQuery<INovuAATrend, Error>({
        queryKey: ["novu-data-AA", name],
        queryFn: () => novuDataforAA(name),
        select: (data: INovuAATrend) => data,
    });


export { SearchAccountAggregators, NovuDataforAA }
export type { INovuAATrend }

