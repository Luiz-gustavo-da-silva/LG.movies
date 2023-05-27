import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

import "../components/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit= (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <>
      <nav id="navbar">
        <h2>
          <Link to="/">LG.movies</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque por filmes"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <SearchOutlined />
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
