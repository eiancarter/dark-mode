import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue, cb) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark','light');
    useEffect(() => {
        if (key === true) {
           return document.style.body = '.dark-mode';
        } else {
            return false
        }
    })
} 