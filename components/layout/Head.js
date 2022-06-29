import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title} {title ? " - " : ""}PHONEX
      </title>
      <link rel="icon" href="/favicon.svg" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/favicon.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto:wght@400;700;900&&family=Raleway:ital,wght@0,400;1,500&display=swap"
        rel="stylesheet"
      ></link>
    </NextHead>
  );
}
