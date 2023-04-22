import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Social from "@/components/Social";
import AboutLanguage from "@/components/AboutLanguage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Social />
      <AboutLanguage />
    </>
  );
}
