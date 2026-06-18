import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Burnless — SRE automation before alerts fire",
  description: "Stop burning your error budget. Stop burning out your team. One sre.yaml file. Define everything. Automate anything.",
  keywords: ["sre", "site reliability engineering", "slo", "error budget", "kubernetes", "devops", "golang"],
  openGraph: {
    title: "Burnless — SRE automation before alerts fire",
    description: "Stop burning your error budget. Stop burning out your team.",
    url: "https://burnless.dev",
    siteName: "Burnless",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnless — SRE automation before alerts fire",
    description: "Stop burning your error budget. Stop burning out your team.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
