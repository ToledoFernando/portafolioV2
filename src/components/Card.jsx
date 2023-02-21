import Image from "next/image";
import style from "@/styles/Proyects.module.scss";

function Card({ data }) {
  const open = () => {
    window.open(data.repo);
  };

  return (
    <article className={style.proyecto}>
      <Image src={data.img} alt={data.title} width={300} height={170} />
      <div className={style.info}>
        <h2 className={style.title}>{data.title}</h2>
        <h3 className={style.sub_title}>{data.subtitle}</h3>
        <p>{data.info}</p>
        <ul>
          <li>{data.tech}</li>
        </ul>
        <Image
          onClick={open}
          className={style.img}
          title={`Abrir - ${data.title}`}
          src="/code.svg"
          alt="Code Icon"
          width={200}
          height={30}
        />
      </div>
    </article>
  );
}

export default Card;
