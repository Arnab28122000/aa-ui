"use client"

import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const ApiDocumentation = () => {
  return (
    <SwaggerUI url="https://aa-backend-service-production.up.railway.app/openapi.json" />
)}

export default ApiDocumentation;
