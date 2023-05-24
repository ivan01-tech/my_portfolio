import "./globals.css";
import { MobileMenuPovider } from "@/Context/MobileMenu";
import { ModalProvider } from "@/Context/ModalContext";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import NavBarMobile from "@/components/NavBarMobile";
import Skills from "@/components/Skills";
import { Metadata } from "next";
import ShowSkillsModal from "../components/ShowSkillsModal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata: Metadata = {
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
        <ModalProvider>
          <MobileMenuPovider>
            <Header />
            <NavBarMobile />
            <ShowSkillsModal />
            <main>
              <Banner />
              <Skills />
              <Contact />
              {children}
            </main>
          </MobileMenuPovider>
        </ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
