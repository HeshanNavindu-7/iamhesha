import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iamhesha | Heshan Navindu ", // Add keyword-rich title
  description:
    "Heshan Navindu portfolio: A leading web developer specializing in creating responsive and optimized websites for top search rankings. Contact now to transform your web presence.", // Add compelling and keyword-rich description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="iamhesha: A leading web developer specializing in creating responsive and optimized websites for top search rankings." />
        <meta name="keywords" content="Web Development, SEO, Responsive Websites, Frontend Development, Next.js" /> {/* Add relevant keywords */}
        <meta name="author" content="iamhesha" />

        {/* Open Graph Meta Tags (for social sharing) */}
        <meta property="og:title" content="iamhesha | Heshan Navindu" />
        <meta property="og:description" content="iamhesha: A web developer specializing in responsive and SEO-optimized websites." />
        {/* <meta property="og:image" content="/path-to-image.jpg" /> Add your image path for social media */}
        <meta property="og:url" content="https://iamhesha.vercel.app/" />
        <meta property="og:type" content="website" />

      
        {/* Canonical URL */}
        <link rel="canonical" href="https://iamhesha.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        <title>iamhesha | Heshan Navindu</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
