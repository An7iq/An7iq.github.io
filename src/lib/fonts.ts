import { Noto_Sans_SC, Source_Sans_3, Source_Serif_4 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const fontClassName = `${sourceSans.variable} ${sourceSerif.variable} ${notoSansSC.variable} h-full antialiased`;
