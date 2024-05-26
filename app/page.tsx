"use client"

import AASelect from "@/components/AASelect";
import ApiDocumentation from "@/components/ApiDoc";
import AppBar from "@/components/AppBar";

export default function Home() {
  return (
    <main className="flex flex-col w-[100vw] bg-white items-center justify-center">
      <div className="bg-white max-w-[1920px] w-full px-20">
        <AppBar />
        <AASelect />
        <ApiDocumentation/>
      </div>
    </main>
  );
}
