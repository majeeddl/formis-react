import { createContext, FunctionComponent, ReactElement, useState } from "react";


export const ThemeContext = createContext({
    dir : 'ltr',
    SetThemeDir : (_dir:string)=> {}
});

type ThemeProviderType = {
    children : ReactElement
}

export const ThemeProvider : FunctionComponent<ThemeProviderType> = ({ children}) =>{

    const [ dir , setDir ] = useState('rtl')

    const SetThemeDir = (_dir:string)=>{
        setDir(_dir)
    }
    
    return (
        <ThemeContext.Provider value={{
            dir,
            SetThemeDir
        }} >
            {children}
        </ThemeContext.Provider>
    )
}