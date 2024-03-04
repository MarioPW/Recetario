import { useState } from "react";
import { Sidebar } from 'flowbite-react';
import { recipes } from "../Services/recipes";

export const SearchForm = () => {
  let [inputValue, setValue] = useState("");
  let [dropdownItems, setItem] = useState(["searh..."]);

  const dropdownItemsHTML = dropdownItems.map((item) => (
    <Sidebar.Item key={item} href={'#' + item}>{item}</Sidebar.Item>
  ));

  const index = recipes.map(item => item.name).sort();
  const anchores = index.map((item) => (
    <Sidebar.Item key={item} href={'#' + item}>{item}</Sidebar.Item>
  ));

  const searchValue = (value) => {
    const recipeNames = recipes.map(i => i.name);
    const result = recipeNames.filter((name) => name.toLowerCase().includes(value.toLowerCase())).sort();
    setItem(result)
  };

  const valueSetter = (e) => {
    setValue(e.target.value);
    searchValue(inputValue);
  };

  return (
    <>
      <Sidebar className="block sm:absolute ml-4 ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <form className="space-y-4">
                <label htmlFor="search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute start-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <input
                    value={inputValue}
                    onChange={valueSetter}
                    type="search"
                    id="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-50"
                    placeholder="Buscar"
                    required
                  />
                </div>
              </form>
            </Sidebar.Item>
            {dropdownItemsHTML}
            <Sidebar.Collapse label="Índice">
              {anchores}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};
