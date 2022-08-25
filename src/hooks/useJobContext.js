import { JobContext } from "../context/JobContext";
import { useContext } from "react";

export const useJobContext = () => {
    const context = useContext(JobContext);

    if(!context) {
        throw Error('useJobContext must be used inside JobContextProvider');
    }
    
    return context;
}