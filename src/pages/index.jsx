import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar.jsx";
import Hm from "../components/Home";
import About from "@/components/About";
import TechSkill from "@/components/TechSkill";
import Proyects from "@/components/Proyects";
import Contacts from "@/components/Contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Toledo Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <main>
          <Hm />
          <About />
          <TechSkill />
          <Proyects />
          <Contacts />
        </main>
      </NavBar>
    </>
  );
}
