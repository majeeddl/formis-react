import { createContext, useReducer } from "react";


const FormisConfigContext = createContext<{
    initializeValues : {},
    validate : {}
}>({
    initializeValues : {},
    validate : {}
})

const formisConfigReducer = (state : any, action : any) => {
    switch (action.type) {
        case "setInitializeValues" : {
            return {
                ...state,
                initializeValues : action.payload
            }
        }
        case "setValidate" : {
            return {
                ...state,
                validate : action.payload
            }
        }
        default : {
            return state
        }
    }
}

export const FormisConfigContextProvider = ({children } : any) => {

    const [formisConfig, dispatch] = useReducer(formisConfigReducer, { initializeValues : {} })
    
    return (
        <FormisConfigContext.Provider value={formisConfig}>
            {children}
        </FormisConfigContext.Provider>
    )
}

