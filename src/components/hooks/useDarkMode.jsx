import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
        const element = window.document.body;
        const className = 'dark-mode';
        if (window.localStorage.getItem('dark')) {
           return element.classList.add(className);
        } else {
            return element.classList.remove(className);
        }
    }, [key])
    return [darkMode, setDarkMode];
} 
