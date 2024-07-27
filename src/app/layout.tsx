import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "nMegle - Next.js + Omegle = ❤️",
  description: "nMegle is a Omegle (RIP) clone built with Next.js and deployed on the Cloudflare Network.",
  authors: [{ name: "Manuel Nicastro", url: "https://ndev.ar" }],
  keywords: "chat aleatorio, chat de video, chat anónimo, conocer gente, videollamadas, videochat, socializar en línea, chat seguro, chat privado, chat en vivo, Cloudflare, chat de texto, chat de voz, chat gratis, salas de chat, redes sociales, video en línea, comunicación anónima, encuentros en línea, hablar con desconocidos, random chat, video chat, anonymous chat, meet people, video calls, video chat, online socializing, secure chat, private chat, live chat, Cloudflare, text chat, voice chat, free chat, chat rooms, social networks, online video, anonymous communication, online meetings, talk to strangers",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://nmegle.ndev.ar"
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
