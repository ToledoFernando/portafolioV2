import style from "@/styles/Home.module.scss";

function Hm() {
  return (
    <div className={style.hm}>
      <div className={style.hmb}>
        <div className={style.container}>
          <div className={style.p}>
            <h2 className={style.bv}>Bienvenido a mi portafolio web</h2>
            <h1 className={style.sy}>Soy Toledo Fernando</h1>
            <h3 className={style.ds}>y soy desarrollador Full Stack</h3>
            <button className={style.bt}>
              <a href="#about">Sobre mi</a>
            </button>
          </div>
          <div className={style.ev}>
            {/* <img src="/pc.png" alt="logo pc" /> */}
            <img src="/phone.png" alt="logo movil" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hm;
