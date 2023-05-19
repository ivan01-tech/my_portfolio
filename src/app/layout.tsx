"use cleint";

import "./globals.css";
import Header from "./components/Header";
import Banner from "@/app/components/Banner";
import NavBarMobile from "./components/NavBarMobile";
import { MobileMenuPovider } from "./Context/MobileMenu";

export const metadata = {
  title: "Ivan01-tech | Portfolio",
  description: "Created by Ivan Silatsa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MobileMenuPovider>
          <Header />
          <NavBarMobile />
          <Banner />
          {children}
        </MobileMenuPovider>
      </body>
    </html>
  );
}
