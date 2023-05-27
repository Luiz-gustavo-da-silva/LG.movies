import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <h2>
          <Link to="/">MoviesLib</Link>
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
