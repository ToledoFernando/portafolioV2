import { useEffect, useRef, useState } from "react";
import style from "@/styles/Navbar.module.scss";

function NavBar({ children }) {
  const bg = useRef();
  const [op, setOp] = useState(0);

  const nv = (e) => {
    // console.log(Math.round(e.target.scrollingElement.scrollTop));
    if (Math.round(e.target.scrollingElement.scrollTop) > 60) {
      bg.current.setAttribute(
        "style",
        "background-color: #000000c4; backdrop-filter: blur(5px)"
      );
    }
    if (Math.round(e.target.scrollingElement.scrollTop) < 60) {
      bg.current.setAttribute(
        "style",
        "background-color: #00000000; backdrop-filter: blur(0px)"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", nv);
  }, []);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.div2}>
          <span className={style.bg} ref={bg}></span>
          <div className={style.logo}>
            <img src="/logo.png" alt="Toledo Dev Logo" />
            <div>
              <h1 className={style.title}>ToledoFernando</h1>
              <h2>Developer - Full Stack</h2>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}

export default NavBar;
