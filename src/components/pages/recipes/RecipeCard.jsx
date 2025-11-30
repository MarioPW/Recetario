import { useLocation } from 'react-router-dom';

import { Card, Table } from "flowbite-react";
import { Preparation } from "./Preparation";
import { RecipeTable } from "./RecipeTable";

export const RecipeCard = () => {
    const location = useLocation();
    const recipe = location.state?.recipe;

    if (!recipe) {
        return <p className="text-center text-gray-500">No recipe data available.</p>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card
                key={recipe.id}
                id={recipe.name}
                className="max-w-xl w-full shadow-lg"
            >
                {/* Imagen con tamaño fijo y aspect-ratio */}
                <div className="w-full h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: '16/9' }}
                    />
                </div>

                {/* Título de la receta */}
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                    {recipe.name}
                </h5>

                {/* Tabla de ingredientes */}
                <Table striped className="mt-4">
                    <Table.Head>
                        <Table.HeadCell>Ingredientes:</Table.HeadCell>
                        <Table.HeadCell>Cantidad:</Table.HeadCell>
                    </Table.Head>
                    {recipe.ingredients.map(ingredient => {
                        return (
                            <RecipeTable
                                key={ingredient.name}
                                name={ingredient.name}
                                weight={ingredient.weight}
                            />
                        );
                    })}
                </Table>

                {/* Preparación */}
                <h5 className="px-3 py-1 bg-gray-700 text-2xl font-bold tracking-tight text-white mt-6">
                    Preparación:
                </h5>
                <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {recipe.preparation.map((step, index) => {
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
        </div>
    );
};
