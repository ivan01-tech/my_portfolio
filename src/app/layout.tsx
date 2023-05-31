import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ModalProvider } from "./Context/ModalContext";
import { MobileMenuPovider } from "./Context/MobileMenu";
import GoTop from "./components/GoTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LazyMobileMenu = dynamic(() => import("./components/NavBarMobile"));
const LazyModal = dynamic(() => import("./components/ShowSkillsModal"));

export const metadata: Metadata= {
  description:
    "I'm a fullstack web developer. I like to develop , test, and deploy web apps using javascript technologies",
  title: "Portfolio - Ivan01-tech",
  robots: "index, follow",
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
            <GoTop />
            <Header />
            <LazyMobileMenu />
            <LazyModal />
            <main>{children}</main>
          </MobileMenuPovider>
        </ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
