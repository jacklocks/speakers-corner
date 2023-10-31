import Navbar from "./components/Navbar";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Speaker's Corner : twitter-type social network",
  description: "twitter-type social network",
  favicon: "/favicon.ico",
  author: "Éric Castets",
  ogTitle: "Speaker's Corner : twitter-type social network",
  ogDescription:
    "A Next.js-powered social media platform resembling Twitter, facilitating real-time communication among users",
  ogType: "website",
  ogUrl: "https://speakers-corner.vercel.app/",
  ogLocale: "fr_FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta property="og:image" content="./opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="screen Speaker's Corner" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://speakers-corner.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Speaker's Corner : twitter-type social network"
        />
        <meta
          property="twitter:description"
          content="A Next.js-powered social media platform resembling Twitter, facilitating real-time communication among users"
        />
        <meta property="twitter:image" content="../opengraph-image.png" />
      </Head>
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
