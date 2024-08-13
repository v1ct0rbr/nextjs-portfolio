/* eslint-disable @next/next/no-sync-scripts */

import type { Metadata } from "next";
import { Head, Html, Main, NextScript } from 'next/document';



  export const metadata: Metadata = {
    title: process.env.TITLE,
    description: process.env.SUBTITLE,
  };

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en"  >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <script src="/scripts/no-flash.js"></script>
      </Head>
      <body  className="
          min-h-screen bg-background font-sans antialiased bg-white dark:bg-slate-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}