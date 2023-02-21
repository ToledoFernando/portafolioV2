import style from "@/styles/About.module.scss";
import Image from "next/image";
import { openCV, openLK, openGH } from "./openLink";

function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.ac}>
        <div className={style.img}>
          <Image
            src="/perfil.jpg"
            alt="Toledo Fernando"
            width={350}
            height={350}
          />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=toledof764@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email de contacto
          </a>
        </div>
        <div className={style.info}>
          <h3>Sobre Mi</h3>
          <p>
            Me llamo Toledo Fernando, tengo 20 años, inicie en la programacion
            cuando tenia 18 años, comenze de forma autodidacta, a lo largo de 4
            meses aprendi las bases de la programacion, comenze haciendo una
            pagina de peliculas usando tecnologias como HTML5, CSS3, Javascript,
            AJAX, PHP, MySQL. Termine el bootcamp de SoyHenry de manera exitosa,
            en el mismo adquirí y reforce mis conocimientos en tecnologias de
            desarrollo web con Javascript, NodeJS, Express, PostgreSQL y
            Sequelize. Tambien aprendi a usar Typescript, MongoDB y Mongoose de
            manera autodidacta. Me gusta la programacion y siempre estoy
            buscando aprender mas...
          </p>
          <div>
            <button onClick={openCV}>Descargar CV</button>
            <Image
              onClick={openLK}
              src="/linkedin.svg"
              alt="LinkedIn Toledo"
              width={300}
              height={50}
            />
            <Image
              onClick={openGH}
              src="/github.svg"
              alt="GitHub Toledo"
              width={300}
              height={50}
            />
          </div>
        </div>
      </div>
      <span className={style.sp}></span>
    </div>
  );
}

export default About;
