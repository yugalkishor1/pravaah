import {DM_Sans} from "next/font/google"
import "./globals.css";
import { Metadata } from "next";

const dmsaans = DM_Sans({subsets:["latin"],weight:"400"})

export const metadata:Metadata = {
  title:"automationhub",
  description:"workflow automation",
  keywords:"automation"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsaans.className} antialiased bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}






