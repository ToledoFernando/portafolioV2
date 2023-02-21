import style from "@/styles/TechSkill.module.scss";
import Image from "next/image";

function TechSkill() {
  return (
    <div className={style.tech}>
      <div>
        <Image src="/front.svg" alt="Front-End" width={300} height={100} />
        <p className={style.title_Tech}>
          <strong> Front End</strong>
        </p>
        <p className={style.p_Tech}>
          Conocimientos en tecnologías de desarrollo Front end.
        </p>
        <ul>
          <li title="HTML5">HTML5</li>
          <li title="CSS3">CSS3</li>
          <li title="SASS">SASS</li>
          <li title="Javascript">Javascript</li>
          <li title="Typescript">Typescript</li>
          <li title="ReactJS">ReactJS</li>
          <li title="Redux">Redux</li>
        </ul>
      </div>
      <div>
        <Image src="/back.svg" alt="Back-End" width={300} height={100} />
        <p className={style.title_Tech}>
          <strong>Back End</strong>
        </p>
        <p className={style.p_Tech}>
          Conocimientos en tecnologias del lado del servidor
        </p>
        <ul>
          <li title="NodeJS">NodeJS</li>
          <li title="Express">Express</li>
          <li title="Typescript">Typescript</li>
          <li title="PostgreSQL">PostgreSQL</li>
          <li title="Sequelize">Sequelize</li>
          <li title="MongoDB">MongoDB</li>
          <li title="Mongoose">Mongoose</li>
        </ul>
      </div>
      <div>
        <Image src="/h.svg" alt="Extras" width={300} height={100} />
        <p className={style.title_Tech}>
          <strong>otras Herramientas</strong>
        </p>
        <p className={style.p_Tech}>
          Herramientas que suelo utilizar al desarrollar
        </p>
        <ul>
          <li title="GitHub">GitHub</li>
          <li title="Git">Git</li>
          <li title="Visual">Visual Studio Code</li>
          <li title="Canvas">Canvas</li>
        </ul>
      </div>
      <span className={style.span}></span>
    </div>
  );
}

export default TechSkill;
