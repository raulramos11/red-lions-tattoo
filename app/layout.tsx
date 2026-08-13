import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const title = "Red Lions Tattoo | Estúdio de tatuagem na Tijuca";
const description = "Tatuagem autoral na Tijuca, Rio de Janeiro. Conheça a Red Lions Tattoo e converse com os artistas pelo WhatsApp.";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://red-lions-tattoo-tijuca.magaohehe.chatgpt.site";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title,
  description,
  icons: { icon: `${publicBasePath}/favicon.svg` },
  openGraph: { title, description, type: "website", locale: "pt_BR", images: [{ url: `${publicBasePath}/og.png`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: [`${publicBasePath}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
