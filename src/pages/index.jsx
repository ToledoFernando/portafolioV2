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
        <title>Toledo Dev | Portfolio Web y Proyectos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="google-site-verification" content="G3FbbvV7YLFgs5JyKhB3rLUnYSNjr7YUYZ8sp7UxVN0" />
        <meta
          name="description"
          content="Explore el portafolio web y los proyectos de Toledo Dev, un desarrollador web fullstack experto con conocimientos en la creación de sitios y aplicaciones web"
        />

        <meta
          name="keywords"
          content="developer, fullstack, full stack, PERN, MERN, frontend, backend, toledo, toledo dev, mongodb, postgresql, sequelize, mongoose"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="next-head-count" content="14" />
      </Head>
      <NavBar>
        <main>
          <article>
            <section>
              <Hm />
            </section>
            <section>
              <About />
            </section>
            <section>
              <TechSkill />
            </section>
            <section>
              <Proyects />
            </section>
          </article>
        </main>
        <footer>
          <Contacts />
        </footer>
      </NavBar>
    </>
  );
}
