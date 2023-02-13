function NavBar({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default NavBar;
