import "./Navbar.styles.css";

function Navbar() {
  return (
    <nav>
      <ul className="contato">
        <li>
          <a href="#">
            <img src="../public/linkedin.svg" alt="logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../public/github.svg" alt="logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../public/whatsapp.svg" alt="logo" />
          </a>
        </li>
      </ul>
      <ul className="logo">
        <li>
          <a href="#">
            <img src="../public/logo.svg" alt="logo" className="logoIcon" />
          </a>
        </li>
      </ul>
      <ul className="sections">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Habilidades</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
