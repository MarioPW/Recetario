import { Card, Table } from 'flowbite-react';
import { RecipeTable } from './RecipeTable';
import { recetas } from '../Services/recetas';
import { Preparation } from './Preparation';

export const RecipeLayout = () => {
  return (
    recetas.map(receta => {
      return <Card
        key={receta.id}
        id={receta.name}
        className="mx-auto max-w-xl my-4 "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={receta.image}
      >

        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {receta.name}
        </h5>
        
          <Table striped className=''>
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
              )
            })}

          </Table>
        
        <h5 className="px-3 py-1 bg-gray-700 text-2x1 font-bold tracking-tigh text-white">
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
    })

  )
}
