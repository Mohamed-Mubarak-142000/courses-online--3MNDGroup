import React, { createContext, useState } from "react";
export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  const [baseUrl] = useState("https://json-server-db-gamma.vercel.app/");

  /** Get endpoint url */
  const getUrl = (endpoint) => {
    return `${baseUrl}${endpoint}`;
  };

  return (
    <ApiContext.Provider value={{ baseUrl, getUrl }}>
      {children}
    </ApiContext.Provider>
  );
}
