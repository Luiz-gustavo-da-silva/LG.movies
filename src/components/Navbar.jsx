import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';

import "../components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <h2>
          <Link to="/">LG.movies</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque por filmes" />
            <button type="submit"><SearchOutlined /></button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
