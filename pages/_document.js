import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Muzammil Shah | Senior Full-Stack Developer & Product Engineer" />
        <meta name="description" content="Meet Muzammil Shah, a Senior Full-Stack Developer with 6+ years of experience and 20+ delivered products. Specializing in scalable, user-focused web applications using React, Next.js, Angular, Node.js, Express.js, Python, and MongoDB. Combining frontend creativity with backend reliability, Muzammil crafts seamless digital experiences with clean code, optimized performance, and robust architecture." />
        <meta name="theme-color" content="#07112f" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700;900&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}