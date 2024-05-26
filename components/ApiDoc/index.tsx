"use client"

import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const ApiDocumentation = () => {
  return (
    <div className='min-h-96'>
    <SwaggerUI url="https://setu-backend.dashtics.com/openapi.json" />
    </div>
)}

export default ApiDocumentation;
