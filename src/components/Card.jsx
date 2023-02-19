import Image from "next/image";
import style from "@/styles/Proyects.module.scss";

function Card({ data }) {
  const open = () => {
    window.open(data.repo);
  };

  return (
    <div className={style.proyecto}>
      <Image src={data.img} alt={data.title} width={300} height={170} />
      <div className={style.info}>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.info}</p>
        <ul>
          <li>{data.tech}</li>
        </ul>
        <img
          onClick={open}
          className={style.img}
          title={`Abrir - ${data.title}`}
          src="/code.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
