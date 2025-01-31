import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { FC, ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Cedi Search",
  description: "Ghana's leading E Commerce search engine",
};

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        {children}
      </body>
      <Footer />

      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-RQ0XKFR86Y" />
      )}
    </html>
  );
};

export default RootLayout;
