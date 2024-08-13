import { useTheme } from 'next-themes';
import { createContext, useCallback, useEffect, useState } from 'react';

const initialState = {
  isDark: true,
  toggleTheme: (theme: string) => {},
  setIsDarkMode: (_: boolean) => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { setTheme } = useTheme()
  
  const setIsDarkMode = useCallback((isDark: boolean) => {
    setIsDark(isDark);    
  }, [setIsDark]);

  const toggleTheme = (theme: string) => {
    if (typeof setTheme === 'function') {
      setTheme(theme);
      setIsDarkMode(theme === 'dark');
    }
  };
  
  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if(localStorage !== undefined) {
      if(localStorage.getItem('theme') === undefined) {
        localStorage.setItem('theme', 'dark');
      }
    }
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true);
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false);
      localStorage.theme = 'light';
    }
  }, [setIsDarkMode]);



  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark === undefined ? false : isDark,
        toggleTheme: (string) => {},
        setIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext as default, ThemeProvider };
