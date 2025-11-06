import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "CPS GmbH | Creative Plastic Solutions",
  description: "Creative Plastic Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaSans.variable}>
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-fira">
        <Header />
        <main className="flex-1">
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#1D1D1B",
                color: "#fff",
                borderRadius: "8px",
                border: "1px solid #333",
              },
            }}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
