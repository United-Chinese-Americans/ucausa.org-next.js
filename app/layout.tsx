import type { Metadata } from "next";
import { Archivo_Black, Great_Vibes } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "United Chinese Americans",
  description:
    "United Chinese Americans (UCA) is a nationwide nonprofit and nonpartisan federation and civic movement dedicated to enriching and empowering Chinese American communities.",
  icons: {
    icon: "https://storage.googleapis.com/objects.ucausa.org/logo/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${greatVibes.variable}`}
    >
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
