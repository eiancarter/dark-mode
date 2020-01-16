import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
    
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
        const element = window.document.body;
        const className = 'dark-mode';
        if (!darkMode) {
            element.classList.add(className);
        } else  {
            element.classList.remove(className);
        }
    }, [darkMode])
    

    return [darkMode, setDarkMode];
} 