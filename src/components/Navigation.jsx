
import { Navbar, Dropdown } from 'flowbite-react';

import { MdOutlineBakeryDining } from "react-icons/md";
import { SearchForm } from './SearchForm';
import { recetas } from "../Services/recetas"



const index = recetas.map(item => item.name)

const anchores = index.map((item) => (
  <Dropdown.Item key={item} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"><a href={'#' + item}>{item}</a></Dropdown.Item>))

export const Navigation = () => {
  return (
    <Navbar fluid rounded className="sticky top-0 z-10">
      <Navbar.Brand href="#">
        <MdOutlineBakeryDining className="mr-3 h-6 sm:h-9" alt="Bread Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recetario de Leonardo</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <SearchForm />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Indice" inline>
            {anchores}
          </Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
