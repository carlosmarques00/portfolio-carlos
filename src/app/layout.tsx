import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    title: "Carlos Marques - Portfólio",
    description:
        "Portfólio de Carlos Marques, Desenvolvedor Full Stack especializado em React, Node.js, Java, Spring, PHP e Laravel.",
    keywords: [
        "Carlos Marques",
        "Full Stack Developer",
        "React",
        "Node.js",
        "Java",
        "Spring",
        "PHP",
        "Laravel",
        "Portfólio",
    ],
    authors: [{ name: "Carlos Marques" }],
    openGraph: {
        title: "Carlos Marques - Portfólio",
        description:
            "Portfólio de Carlos Marques, Desenvolvedor Full Stack especializado em React, Node.js, Java, Spring, PHP e Laravel.",
        url: "https://seu-dominio-ou-vercel-link.vercel.app",
        siteName: "Carlos Marques - Portfólio",
        images: [
            {
                url: "/perfil.jpg.jpg", // se quiser sua foto no preview
                width: 800,
                height: 600,
                alt: "Foto de Carlos Marques",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
