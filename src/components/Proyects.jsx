import style from "@/styles/Proyects.module.scss";
import Card from "./Card";
import data from "./proyects.json";

function Proyects() {
  return (
    <div className={style.proyects} id="proyects">
      <div className={style.st}>
        <h4>Proyectos</h4>
      </div>
      <section className={style.p}>
        {data.map((e) => (
          <Card key={e.title} data={e} />
        ))}
      </section>
    </div>
  );
}

export default Proyects;
