
import { Carousel } from 'flowbite-react';
import { recipes } from '../../../Services/recipes';

export const MyCarousel = () => {

  const carouselRecipes = recipes.filter( recipe => recipe.category == 'Panes de Queso')
  const carouselImages = carouselRecipes.map( recipe => {
    return (
    <img key={recipe.id}src={recipe.image} alt={recipe.name} />
    )
  })

  return (
    <div className="sm:h-6 xl:h-80 2xl:h-96 my-32 mx-32">
      <Carousel>
        {carouselImages}
      </Carousel>
    </div>
  );
}
