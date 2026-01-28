import { Geist, Geist_Mono, Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar/Navbar";
import Footer from "@/components/home/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Desa Lemahsugih",
  description: `“Lemah” artinya  tanah dan “Sugih” artinya kaya. 
          Jadinya, Desa Lemahsugih secara harfiah artinya "Tanah Kaya"`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
