import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Github | InfoJobs",
  description: "App for integrate github's projects into InfoJobs",
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
