import "./globals.css";
import { MobileMenuPovider } from "@/Context/MobileMenu";
import { ModalProvider } from "@/Context/ModalContext";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import NavBarMobile from "@/components/NavBarMobile";
import Skills from "@/components/Skills";
import type { Metadata } from "next";
import ShowSkillsModal from "../components/ShowSkillsModal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "@/components/Projects";

// TODO react-ts-hooks : don't forget to remove it ;
// TODO treshol
/** //TODO
 * LAZY LOADING COMP
 * import LazyLoad from 'react-lazyload';
 * <LazyLoad offset={100}> <Footer /></LazyLoad>

 * // TODO DOWNLOAD REQUIRED SVG ICONS 
 * 
 *  download google fonts
 * 
 * npm install –save-dev @next/bundle-analyzer cross-env
"scripts": {
    "analyze": "cross-env ANALYZE=true next build",
    "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
    "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
  },

  set the prefetch link to false
 * 
 * 
 */

// TODO refactor css title
// how to add description for my portfolio
export const metadata: Metadata = {
  applicationName: "Ivan01-tech Portfolio",
  title: "Ivan01-tech | Portfolio",
  description: "Created by Ivan Silatsa",
  authors: [{ name: "Silatsa Ivan", url: "" }],
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
              <Projects />
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
