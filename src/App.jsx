import { Navigation } from './components/Navigation';
import { RecipeLayout } from './components/RecipeLayout';
import { MyFooter } from './components/Footer';
import { Preheader } from './components/Preheader';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Register } from './components/Register';

function App() {

  return (
    <div className='mx-0'>
    <Preheader/>
      <Navigation/>
      <div className="block margin-auto">
      </div>
      <Routes>
        <Route path='/Leos' element={<Home/>} />
        <Route path='/Leos/recipes' element={<RecipeLayout/>} />
        <Route path='/Leos/register' element={<Register/>} />
      </Routes>
      <MyFooter />
    </div>
  )
}

export default App
