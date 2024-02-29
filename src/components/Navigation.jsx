
import { Button, Navbar } from 'flowbite-react';
import { MdOutlineBakeryDining } from "react-icons/md";
import { SearchForm } from './SearchForm';

export const Navigation = () =>  {
  return (
    <Navbar fluid rounded className="sticky top-0 z-10">
      <Navbar.Brand href="https://flowbite-react.com">
        <MdOutlineBakeryDining className="mr-3 h-6 sm:h-9" alt="Bread Logo"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recetario de Leonardo</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <SearchForm/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
