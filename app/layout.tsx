import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import favicon from "../components/favicon.ico";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studymate-20.vercel.app/"),
  title: {
    default: "StudyMate Agent",
    template: "%s | StudyMate Agent",
  },
  description:
    "StudyMate Agent is an AI-powered study assistant that creates plans, explains concepts, generates quizzes, and evaluates progress.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StudyMate Agent",
    description:
      "Plan, learn, quiz, and evaluate your study progress with an AI multi-agent study assistant.",
    url: "/",
    siteName: "StudyMate Agent",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyMate Agent",
    description:
      "Plan, learn, quiz, and evaluate your study progress with an AI multi-agent study assistant.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
