import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dirty Bucket",
  description: "This is a beat store for selling beats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-900 text-neutral-100`}
        >
          <Container>
            <header>
              <Header />
              <SignedOut>
                <div className="fixed top-0 right-0 z-50 pt-[14px] px-8">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <div className="fixed top-0 right-0 z-50 text-center pt-3 px-8">
                  <UserButton />
                </div>
              </SignedIn>
            </header>
            {children}
            <Toaster richColors={true} position="bottom-left" />
          </Container>
        </body>
      </html>
    </ClerkProvider>
  );
}
