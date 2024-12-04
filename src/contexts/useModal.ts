import { useContext } from "react";
import { ModalContext, DataContextProps } from "./ModalContext";

export const useDataContext = (): DataContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};