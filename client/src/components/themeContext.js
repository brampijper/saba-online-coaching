import React, { createContext, useState } from 'react';
import { setAlpha } from './colorUtils';

const BASE_RGBA = `rgba(105,105,105,1)`

const defaultColors = {
    baseColor: BASE_RGBA,
    primaryColor: setAlpha(BASE_RGBA, 0.1),
    secondaryColor: setAlpha(BASE_RGBA, 0.06),
    accentColor: setAlpha(BASE_RGBA, 0.03),
    logoColor: `rgb(47,79,79)`
}

const ThemeContext = createContext(defaultColors)

const ThemeContextProvider = ({children, value}) => {
    const [styles, setStyles] = useState(value ? value : defaultColors)

    return (
        <ThemeContext.Provider value={styles}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }
