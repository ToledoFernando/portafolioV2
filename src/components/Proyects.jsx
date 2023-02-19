import style from "@/styles/Proyects.module.scss";
import data from "./proyects.json";

function Proyects() {
  console.log(data);
  return (
    <div className={style.proyects}>
      <h1>Hello world proyects</h1>
    </div>
  );
}

export default Proyects;
