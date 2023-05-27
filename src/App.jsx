import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>

      <h2>Olá</h2>
      <Outlet/>
    </>
  );
}

export default App;
