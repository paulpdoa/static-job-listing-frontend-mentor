import { createContext,useReducer,useState } from 'react';

export const JobContext = createContext();

export const jobReducer = (state,action) => {
    switch(action.type) {
        case 'SET_JOBS':
            return {
                jobs: action.payload
            }
        default:
            return state;
    }
}
 
export const JobContextProvider = ({children}) => {

    const [selected,setSelected] = useState([]);
    
    const [state,dispatch] = useReducer(jobReducer, {
        jobs: null,
        filteredJobs: null
    });

    return (
        <JobContext.Provider value={{ ...state,dispatch,selected, setSelected }}>
            {children}
        </JobContext.Provider>
    )
}