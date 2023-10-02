import Navbar from "./components/Navbar";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Speaker's Corner : twitter-type social network",
  description: "twitter-type social network",
  favicon: "/favicon.ico",
};

export const metadataFacebook = {
  ogType: "website",
  ogUrl: "https://speakers-corner.vercel.app/",
  ogTitle: "Speaker's Corner",
  ogDescription:
    "A Next.js-powered social media platform resembling Twitter, facilitating real-time communication among users",
  ogImage: "/public/meta-speaker.webp",
};

export const metadataTwitter = {
  twitterCard: "/public/meta-speaker.webp",
  twitterUrl: "https://speakers-corner.vercel.app/",
  twitterTitle: "Speaker's Corner",
  twitterDescription:
    "A Next.js-powered social media platform resembling Twitter, facilitating real-time communication among users",
  twitterImage: "/public/meta-speaker.webp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content={metadataFacebook.ogType} />
        <meta property="og:url" content={metadataFacebook.ogUrl} />
        <meta property="og:title" content={metadataFacebook.ogTitle} />
        <meta
          property="og:description"
          content={metadataFacebook.ogDescription}
        />
        <meta property="og:image" content={metadataFacebook.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content={metadataTwitter.twitterCard} />
        <meta property="twitter:url" content={metadataTwitter.twitterUrl} />
        <meta property="twitter:title" content={metadataTwitter.twitterTitle} />
        <meta
          property="twitter:description"
          content={metadataTwitter.twitterDescription}
        />
        <meta property="twitter:image" content={metadataTwitter.twitterImage} />
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
