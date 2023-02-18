import style from "@/styles/Home.module.scss";

function Hm() {
  return (
    <div className={style.hm}>
      <div className={style.hmb}>
        <div className={style.container}>
          <div className={style.p}>
            <p className={style.bv}>Bienvenido a mi portafolio web</p>
            <p className={style.sy}>Soy Toledo Fernando</p>
            <p className={style.ds}>y soy desarrollador Full Stack</p>
            <button className={style.bt}>Sobre mi</button>
          </div>
          <div className={style.ev}>
            <h1>Hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hm;
