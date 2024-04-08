import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../home/Home';
import { Register } from '../loginRegister/Register';
import { RecipeLayout } from '../recipes/RecipeLayout';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {

  const location = useLocation()

  return (

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/Recetario' element={<Home />} />
        <Route path='/Recetario/recipes' element={<RecipeLayout />} />
        <Route path='/Recetario/register' element={<Register />} />
      </Routes>
    </AnimatePresence>
  )
}
