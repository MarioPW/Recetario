import { Link, useLocation } from "react-router-dom";

import { Navbar } from 'flowbite-react';
import { LogIn } from '../loginRegister/LogIn';
import { CustomCollapseLink } from '../../common/CustomCollapseLink';

import { MdOutlineBakeryDining } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineUserAdd } from "react-icons/hi";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar fluid rounded className="sticky top-0 z-10 shadow-md bg-white dark:bg-gray-800">
      <Navbar.Brand as={Link} to="/Recetario">
        <MdOutlineBakeryDining className="mr-3 h-8 sm:h-10 text-blue-600 dark:text-blue-400" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800 dark:text-white">
          Bienvenido
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-2">
        <LogIn />
        <Navbar.Toggle className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2" />
      </div>

      <Navbar.Collapse className="md:space-x-2">
        <CustomCollapseLink to="/Recetario" icon={AiOutlineHome}>Inicio</CustomCollapseLink>
        <CustomCollapseLink to="/Recetario/recipes" icon={IoFastFoodOutline}>Recetas</CustomCollapseLink>
        <CustomCollapseLink to="/Recetario/register" icon={HiOutlineUserAdd}>Registrarme</CustomCollapseLink>
      </Navbar.Collapse>
    </Navbar>
  );
}