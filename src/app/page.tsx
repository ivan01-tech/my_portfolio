import dynamic from "next/dynamic";
import Banner from "./components/Banner";

const LazyProject = dynamic(() => import("./components/Projects"));
const LazyContact = dynamic(() => import("./components/Contact"));
const LazySkills = dynamic(() => import("./components/Skills"));

export default function Home() {
  return (
    <>
      <Banner />
      <LazySkills />
      <LazyProject />
      <LazyContact />
    </>
  );
}
