import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FilterActions, filterReducer, initialFilter } from '@/reducers/filterReducer';
import { EventsFilter } from '@/types/EventsFilters';

type FilterContextType = {
    filter: EventsFilter;
    dispatch: React.Dispatch<FilterActions>;
    filterByStatus: (value: string) => void;
    filterByGrouping: (grouping: "default" | "grouped" | "ungrouped") => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type Props = { children: ReactNode }

export const FilterProvider = ({ children} : Props ) => {

    const [filter, dispatch] = useReducer(filterReducer, initialFilter);

    const filterByStatus = (value: string) => {
    
        const isValidStatus = (value: string): value is "all" | "active" | "inactive" => {
            return ["all", "active", "inactive"].includes(value)
        }   
    
        if (isValidStatus(value)) {
            dispatch({ type: "status", payload: value })
        }
        
    }

    const filterByGrouping = (grouping: "default" | "grouped" | "ungrouped") => {
        dispatch({ type: "grouping", payload: grouping })
    }

    return (

        <FilterContext.Provider value={{  filter, dispatch, filterByStatus, filterByGrouping  }}>
            {children}
        </FilterContext.Provider>

    );

};

export const useFilter = () : FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
