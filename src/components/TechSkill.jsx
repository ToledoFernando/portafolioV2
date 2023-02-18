import style from "@/styles/TechSkill.module.scss";

function TechSkill() {
  return (
    <div className={style.tech}>
      <div>
        <img src="/front.svg" alt="" />
        <h2>Front End</h2>
        <p>Conocimientos en tecnologías de desarrollo Front end.</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>ReactJS</li>
          <li>Redux</li>
        </ul>
      </div>
      <div>
        <img src="/back.svg" alt="" />
        <h2>Back End</h2>
        <p>Conocimientos en tecnologias del lado del servidor</p>
        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div>
        <img src="/h.svg" alt="" />
        <h2>otras Herramientas</h2>
        <p>Herramientas que suelo utilizar al desarrollar</p>
        <ul>
          <li>GitHub</li>
          <li>Git</li>
          <li>Visual Studio Code</li>
          <li>Canvas</li>
        </ul>
      </div>
    </div>
  );
}

export default TechSkill;
