import React, {createContext, useContext, useReducer, useEffect} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const initialState= {
    liquors: [],
    liqueurs: [],
    mixers: [],
    totalTags: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'addLiquorInput':
            return {
                ...state,
                liquors: [...state.liquors, action.payload],
                
            };
        case 'addLiqueurInput':
            return {
                ...state,
                liqueurs: [...state.liqueurs, action.payload]
            };
        case 'addMixerInput':
            return {
                ...state,
                mixers: [...state.mixers, action.payload]
            };
        case  'totalTagsAdd':
            return {
                ...state,
                totalTags: [...state.totalTags, action.payload],
                
            }          
        case 'removeLiquorInput':
            return {
                ...state,
                liquors: state.liquors.filter((s) => s !== action.payload) 
            };
        case 'removeLiqueurInput':
            return {
                ...state,
                liqueurs: state.liquors.filter((s) => s !== action.payload) 
            };
        case 'removeMixerInput':
            return {
                ...state,
                mixers: state.liquors.filter((s) => s !== action.payload) 
            };
        default:
            return state;    

    }
};


const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);




    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
};
  
export default GlobalContextProvider;