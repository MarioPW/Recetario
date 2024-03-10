import { motion } from 'framer-motion';

import { Card, Table } from 'flowbite-react';
import { RecipeTable } from './RecipeTable';
import { recipes } from '../../../Services/recipes';
import { Preparation } from './Preparation';
import { SearchForm } from './SearchForm';


export const RecipeLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-col sm:flex">

      <SearchForm />

      <div className='flex flex-col mx-auto'>
        {recipes.map(receta => {
          return (
            <Card
              key={receta.id}
              id={receta.name}
              className="max-w-xl"
              imgAlt={receta.name}
              imgSrc={receta.image}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {receta.name}
              </h5>
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>Ingredientes:</Table.HeadCell>
                  <Table.HeadCell>Cantidad:</Table.HeadCell>
                </Table.Head>
                {receta.ingredients.map(ingredient => {
                  return (
                    <RecipeTable
                      key={ingredient.name}
                      name={ingredient.name}
                      weight={ingredient.weight}
                    />
                  );
                })}
              </Table>
              <h5 className="px-3 py-1 bg-gray-700 text-2xl font-bold tracking-tight text-white">
                Preparacion:
              </h5>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {receta.preparation.map((step, index) => {
                  const stepNumber = index + 1;
                  return (
                    <Preparation
                      key={step}
                      step={step}
                      stepNumber={stepNumber}
                    />
                  );
                })}
              </ul>
            </Card>
          );
        })}
      </div>
    </motion.div>

  );
}
