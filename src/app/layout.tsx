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
import GoTop from "@/components/GoTop";

// TODO react-ts-hooks : don't forget to remove it ;
// HTML, avoiding @import and lazy loading CSS
// TODO treshol

/** //TODO
 * LAZY LOADING COMP
 * import LazyLoad from 'react-lazyload';
 * import GoTop from '../components/GoTop';
<LazyLoad offset={100}> <Footer /></LazyLoad>
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
 
  <Head>
<title>My Clothing Store</title>
<meta name="description" content="Come to my store for great apparel!" />
<meta property="og:title" content="My Clothing Store" />
<meta property="og:description" content="Come to my store for great apparel!" />
<meta property="og:url" content="https://myclothingstore.com/" />
<meta property="og:type" content="website" />
<link rel="icon" href="/favicon.ico" />
</Head>

<meta name="description" content="">
 */

// TODO refactor css title
// how to add description for my portfolio
export const metadata: Metadata = {
  description:
    "I'm a fullstack web developer. I like to develop , test, and deploy web apps using javascript technologies",
  title: "Portfolio | Ivan01-tech",
  // authors: [{ name: "Silatsa Ivan", url: "" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoTop />
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
