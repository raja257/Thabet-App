import localFont from "next/font/local";
import "./globals.css";
// import Providers from "./Components/Providers/Providers";
import Layout from "./MobileComponents/Layout/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Thabet App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
   
    </html>
    </>
  
  );
}
