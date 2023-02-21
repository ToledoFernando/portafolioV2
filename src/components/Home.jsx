import style from "@/styles/Home.module.scss";
import Image from "next/image";

function Hm() {
  return (
    <div className={style.hm}>
      <div className={style.hmb}>
        <div className={style.container}>
          <div className={style.p}>
            <p className={style.bv}>Bienvenido a mi portafolio web</p>
            <h1 className={style.sy}>Soy Toledo Fernando</h1>
            <h2 className={style.ds}>y soy desarrollador Full Stack</h2>
            <button className={style.bt}>
              <a href="#about">Sobre mi</a>
            </button>
          </div>
          <div className={style.ev}>
            <Image src="/phone.png" alt="logo movil" width={350} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hm;
