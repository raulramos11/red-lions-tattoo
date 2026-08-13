import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const title = "Red Lions Tattoo | Estúdio de tatuagem na Tijuca";
const description = "Tatuagem autoral na Tijuca, Rio de Janeiro. Conheça a Red Lions Tattoo e converse com os artistas pelo WhatsApp.";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = new URL("/og.png", `${protocol}://${host}`).toString();

  return {
    title,
    description,
    openGraph: { title, description, type: "website", locale: "pt_BR", images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
