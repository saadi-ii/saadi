import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://saadii-eta.vercel.app";
const SITE_NAME = "Saad Hameed";
const SITE_TITLE = "Saad Hameed — Full Stack Web Developer";
const SITE_DESCRIPTION =
  "Portfolio of Saad Hameed, a full stack web developer building modern, high-performance web applications with Next.js, React, Node.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Saad Hameed",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Web Developer Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Saad Hameed", url: SITE_URL }],
  creator: "Saad Hameed",
  publisher: "Saad Hameed",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16130b",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saad Hameed",
  url: SITE_URL,
  jobTitle: "Full Stack Web Developer",
  description: SITE_DESCRIPTION,
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/saadi-ii",
    "https://www.linkedin.com/in/saad-hameed-developer",
    "https://www.instagram.com/saadi__iiii",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light')}}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-background text-on-surface">
        <Navbar />
        <main className="flex-1 w-full" style={{ paddingTop: 'var(--size-nav-h)' }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
