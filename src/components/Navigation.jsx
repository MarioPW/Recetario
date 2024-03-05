
import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom"
import { MdOutlineBakeryDining } from "react-icons/md";
import { LogIn } from './LogIn';

export const Navigation = () => {
  return (
    <Navbar fluid rounded className="sticky top-0 z-10">
      <Navbar.Brand href="#">
        <MdOutlineBakeryDining className="mr-3 h-6 sm:h-9 text-2xl" alt="Bread Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leo's Bakery</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <LogIn />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <hr />
        <Link to="/Recetario">Inicio</Link>
        <hr />
        <Link to="/Recetario/recipes">Recetas</Link>
        <hr />
        <Link to="/Recetario/register">Registrarme</Link>
        <Navbar.Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
