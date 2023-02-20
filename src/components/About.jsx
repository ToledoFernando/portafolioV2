import style from "@/styles/About.module.scss";
import Image from "next/image";
import { openCV, openLK, openGH } from "./openLink";

function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.ac}>
        <div className={style.img}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/perfil2.jpg?alt=media&token=da2387d9-496c-4db4-a19a-da6aa88d49e6"
            alt="Toledo Fernando"
            width={350}
            height={350}
          />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=toledof764@gmail.com">
            Email de contacto
          </a>
        </div>
        <div className={style.info}>
          <h5>Sobre Mi</h5>
          <p>
            Me llamo Fernando Toledo Tengo 20 años, me inicie en la programacion
            a los 18 años, comenze de forma autodidacta con tecnologias como
            HTML5, CSS3, PHP, Ajax y MySQL. Termine el bootcamp de SoyHenry de
            manera exitosa, en el mismo adquirí conocimientos en tecnologias de
            desarrollo web con Javascript, NodeJS, Express, PostgreSQL y
            Sequelize. Tambien aprendi a usar Typescript, MongoDB y Mongoose de
            manera autodidacta. Me gusta la programacion y siempre estoy
            buscando aprender mas...
          </p>
          <div>
            <button onClick={openCV}>Descargar CV</button>
            <img onClick={openLK} src="/linkedin.svg" alt="" />
            <img onClick={openGH} src="/github.svg" alt="" />
          </div>
        </div>
      </div>
      <span className={style.sp}></span>
    </div>
  );
}

export default About;
