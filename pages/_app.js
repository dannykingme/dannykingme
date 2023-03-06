import '../styles/app.css';
import Head from 'next/head';
import Script from 'next/script';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title key="title">Danny King &mdash; Product Designer</title>
        <meta
          name="viewport"
          content="initial-scale=1,maximum-scale=1"
          key="viewport"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Poppins:wght@400;600&family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KJE0KVYZ01"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KJE0KVYZ01');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
