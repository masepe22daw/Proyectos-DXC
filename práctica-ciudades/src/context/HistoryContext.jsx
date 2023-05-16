import React, { useState } from "react";

const Context = React.createContext({});

export const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  return (
    <Context.Provider value={{ history, setHistory }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
