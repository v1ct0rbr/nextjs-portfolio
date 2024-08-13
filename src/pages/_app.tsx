import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import RootLayout from './layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}