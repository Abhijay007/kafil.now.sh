import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kafil Nasdami</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="py-6 bg-yellow-400 px-2 w-full">
        <h1>Welcome to my Blog</h1>
      </div>
    </div>
  );
}
