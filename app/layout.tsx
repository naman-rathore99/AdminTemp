import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belive Admin",
  description: "app",
};

const nunito_Sans = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">

      <body className={`${nunito_Sans.className} flex min-h-screen`}>

        <main
          className="
              flex-grow 
              duration-300
            "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
