import { useTheme } from 'next-themes';
import { createContext, useCallback, useEffect, useState } from 'react';

const initialState = {
  isDark: true,
  toggleTheme: () => {},
  setIsDarkMode: (_: boolean) => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    if (typeof theme.setTheme === 'function') {
      theme.setTheme(theme.resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  }, []);
  
  const setIsDarkMode = useCallback((isDark: boolean) => {
    setIsDark(isDark);
    if (typeof theme.setTheme === 'function') {
      theme.setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });
  }, [setIsDarkMode]);

  useEffect(() => {
    theme.setTheme(isDark ? 'dark' : 'light');
    setIsDarkMode(isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark === undefined ? false : isDark,
        toggleTheme,
        setIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext as default, ThemeProvider };
