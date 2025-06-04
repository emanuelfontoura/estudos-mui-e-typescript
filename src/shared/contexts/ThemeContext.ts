import React from "react"

interface IThemeContextData {
    themeName : 'light' | 'dark'
}

export const ThemeContext = React.createContext({} as IThemeContextData)