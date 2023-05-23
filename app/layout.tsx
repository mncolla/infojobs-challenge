import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TextCV Generator | InfoJobs",
  description: "App for auto-generate smart resume with IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
