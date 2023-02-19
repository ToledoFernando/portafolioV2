import style from "@/styles/TechSkill.module.scss";

function TechSkill() {
  return (
    <div className={style.tech}>
      <div>
        <img src="/front.svg" alt="" />
        <h2>Front End</h2>
        <p>Conocimientos en tecnologías de desarrollo Front end.</p>
        <ul>
          <li title="HTML5">HTML5</li>
          <li title="CSS3">CSS3</li>
          <li title="SASS">SASS</li>
          <li title="Javascript">Javascript</li>
          <li title="Typescript">Typescript</li>
          <li title="ReactJS">ReactJS</li>
          <li title="Redux">Redux</li>
        </ul>
        <span className={style.dv}></span>
      </div>
      <div>
        <img src="/back.svg" alt="" />
        <h2>Back End</h2>
        <p>Conocimientos en tecnologias del lado del servidor</p>
        <ul>
          <li title="NodeJS">NodeJS</li>
          <li title="Express">Express</li>
          <li title="Typescript">Typescript</li>
          <li title="PostgreSQL">PostgreSQL</li>
          <li title="Sequelize">Sequelize</li>
          <li title="MongoDB">MongoDB</li>
          <li title="Mongoose">Mongoose</li>
        </ul>
        <span className={style.dv}></span>
      </div>
      <div>
        <img src="/h.svg" alt="" />
        <h2>otras Herramientas</h2>
        <p>Herramientas que suelo utilizar al desarrollar</p>
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
