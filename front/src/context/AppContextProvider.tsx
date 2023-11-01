import React, { useState } from "react";

import AppContext from "./AppContext";

export const AppContextProvider = ({ children }: any) => {
  const [logged, setLogged] = useState(false);

  return (
    <AppContext.Provider value={{ logged, setLogged }}>
      {children}
    </AppContext.Provider>
  );
};
