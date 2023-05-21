import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Social from "@/components/Social";
import AboutLanguage from "@/components/AboutLanguage";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe"; 
import Footer from './../components/Footer';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Social />
      <AboutLanguage />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
