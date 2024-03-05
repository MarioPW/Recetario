import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Home';
import { Register } from './Register';
import { RecipeLayout } from './RecipeLayout';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {

  const location = useLocation()

  return (

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/Recetario' element={<Home />} />
        <Route path='/Recetario/recipes' element={<RecipeLayout />} />
        <Route path='/Recetario/register' element={<Register />} />
      </Routes>
    </AnimatePresence>
  )
}
