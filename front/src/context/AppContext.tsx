import { createContext } from "react";

export interface appContext {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<appContext>({} as appContext);

export default AppContext;
