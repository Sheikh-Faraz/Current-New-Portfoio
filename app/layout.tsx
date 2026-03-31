import type { Metadata } from "next";
import "./globals.css";


// Toast notification
import { Toaster } from "react-hot-toast";


// Blocks
import { Navbar } from "@/app/Blocks/Navbar";
import Footer from "@/app/Blocks/Footer";

// Fonts
import { Inter, Roboto_Mono, Caveat, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Inter Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// RoboMono Font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Caveat Font
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});


// Metadata
export const metadata: Metadata = {
  title: "Faraz's Portfolio",
  description: "Faraz's Web developer portfolio",
};


// Function / RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" className={cn("font-sans", geist.variable)}>

      {/* <body className={`${inter.variable} ${robotoMono.variable} ${caveat.variable} antialiased bg-[#F57426]`}> */}
      <body className={`${inter.variable} ${robotoMono.variable} ${caveat.variable} antialiased bg-[#2779A7]`}>
        
        {/* Navbar */}
        <Navbar />
        
        {/* All the content Childeren */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Toast notification */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />

      </body>

    </html>
    
  );
}
