import React, {useState} from 'react'

export const useLightMode = () => {
    const [handleDarkMode, sethandleDarkMode] = useState(false)

    const switchToLight = () => {
        sethandleDarkMode()
        console.log('Light mode')
    }
    const switchToDark = () => {
        sethandleDarkMode(true)
        console.log('Dark mode')
    }

    return {
        handleDarkMode,
        switchToDark,
        switchToLight
    }
}
