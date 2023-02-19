import style from "@/styles/Proyects.module.scss";
import Card from "./Card";
import data from "./proyects.json";

function Proyects() {
  return (
    <div className={style.proyects} id="proyects">
      <div className={style.st}>
        <p>Proyectos</p>
      </div>
      <div className={style.p}>
        {data.map((e) => (
          <Card key={e.title} data={e} />
        ))}
      </div>
    </div>
  );
}

export default Proyects;
