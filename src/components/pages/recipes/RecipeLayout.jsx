import { motion } from 'framer-motion';
import { useState } from 'react';
import { Table, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { recipes } from '../../../Services/recipes';
import { SearchForm } from './SearchForm';


export const RecipeLayout = () => {
  const [sortBy, setSortBy] = useState('name'); // Estado para controlar el criterio de ordenamiento

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-gray-50"
    >

      {/* <SearchForm /> */}

      <div className="flex flex-col mx-auto mt-6 p-6 w-full max-w-4xl h-full">
        {/* Botones para ordenar */}
        <div className="flex justify-end mb-4 space-x-4">
          <Button
            onClick={() => setSortBy('name')}
            className={`${
              sortBy === 'name' ? 'bg-blue-600' : 'bg-gray-400'
            } hover:bg-blue-700 transition`}
          >
            Ordenar por nombre
          </Button>
          <Button
            onClick={() => setSortBy('category')}
            className={`${
              sortBy === 'category' ? 'bg-blue-600' : 'bg-gray-400'
            } hover:bg-blue-700 transition`}
          >
            Ordenar por categoría
          </Button>
        </div>

        <Table
          striped
          className="border border-gray-700 shadow-lg rounded-lg overflow-hidden"
        >
          <Table.Head className="bg-gray-800">
            <Table.HeadCell className="text-gray-800 font-semibold">
              Recipe
            </Table.HeadCell>
            <Table.HeadCell className="text-gray-800 font-semibold">
              Category
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {sortedRecipes.map((receta) => (
              <Table.Row
                key={receta.id}
                className="hover:bg-gray-100 transition-colors"
              >
                <Table.Cell className="py-4 px-6"> <Link to='/Recetario/recipe'  state={{ recipe: receta }} >{receta.name}</Link></Table.Cell>
                <Table.Cell className="py-4 px-6">{receta.category}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </motion.div>
  );
};
