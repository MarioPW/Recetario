import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Register } from '../pages/loginRegister/Register';
import { RecipeLayout } from '../pages/recipes/RecipeLayout';
import { RecipeCard } from '../pages/recipes/RecipeCard';
export const AnimatedRoutes = () => {

  const location = useLocation()

  return (

    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/Recetario' element={<Home />} />
        <Route path='/Recetario/recipes' element={<RecipeLayout />} />
        <Route path='/Recetario/recipe' element={<RecipeCard />} />
        <Route path='/Recetario/register' element={<Register />} />
      </Routes>
    </>
  )
}
