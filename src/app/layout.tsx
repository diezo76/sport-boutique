import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CartDrawer from "@/components/shop/CartDrawer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
        className={`${inter.variable} ${bebas.variable} ${playfair.variable} bg-v-white text-v-black antialiased`}
      >
        {children}
        <CartDrawer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#ffffff",
              border: "1px solid #333",
            },
          }}
        />
      </body>
    </html>
  );
}
