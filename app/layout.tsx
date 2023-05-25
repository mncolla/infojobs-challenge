import { Logo } from "./assets/logo";
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
      <body
        className={`${inter.className} w-screen h-screen overflow-hidden bg-[#f2f2f2] font-sans`}
      >
        <header className="bg-[#2088c2]">
          <nav className="max-w-7xl mx-auto p-3 flex justify-center md:block">
            <Logo color="white" width="100px" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
