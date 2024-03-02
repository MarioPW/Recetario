import './App.css'
import { Navigation } from './components/Navigation';
import { RecipeLayout } from './components/RecipeLayout';
import { MyFooter } from './components/Footer';
import { Preheader } from './components/Preheader';

function App() {

  return (
    <div className='lg:mx-10'>
    <Preheader/>
      <Navigation/>
      <div className="block margin-auto">
        <RecipeLayout />
      </div>
      <MyFooter />
    </div>
  )
}

export default App
