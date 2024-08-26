import React, { createContext, useEffect, useState } from "react";
export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  // const [baseUrl] = useState("https://json-server-db-gamma.vercel.app/");
  const [baseUrl] = useState("http://localhost:4000/");
  const [user, setUser] = useState(null);

  // Get endpoint url
  const getUrl = (endpoint) => {
    return `${baseUrl}${endpoint}`;
  };

  // Check if user is logged in or not
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login
  const userLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout
  const userLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ApiContext.Provider
      value={{ baseUrl, getUrl, user, userLogin, userLogout }}
    >
      {children}
    </ApiContext.Provider>
  );
}
