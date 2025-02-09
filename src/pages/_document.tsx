import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* realfavicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* metatags */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="title" content="$KERMITNOBIZ" />
        <meta name="description" content="🐸 Welcome to $KERMITNOBIZ, the memecoin inspired by the iconic Kermit" />
      </Head>
      <title>$KERMITNOBIZ</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
