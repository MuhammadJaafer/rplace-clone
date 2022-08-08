import { useContext } from "react";
import { Context } from "../context/Context";

export const useAppContext = () => {
  const context = useContext(Context);
  return context;
};
