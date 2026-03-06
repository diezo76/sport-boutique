import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CartDrawer from "@/components/shop/CartDrawer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FollowMee Officiel — Streetwear Sport",
  description:
    "Streetwear sportif pour les audacieux. Drops exclusifs, designs bold et qualité premium.",
  keywords: "streetwear, sport, vêtements, fitness, performance, followmee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} bg-v-bg text-v-white antialiased`}
      >
        {children}
        <CartDrawer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#141414",
              color: "#ffffff",
              border: "1px solid #1f1f1f",
            },
          }}
        />
      </body>
    </html>
  );
}
