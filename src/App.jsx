import './App.css'
import { Navigation } from './components/Navigation';
import { RecipeLayout } from './components/RecipeLayout';
import { MyFooter } from './components/Footer';

function App() {

  return (
    <>
      <Navigation/>
      <div className="block margin-auto">
        <RecipeLayout />
      </div>
      <MyFooter />
    </>
  )
}

export default App
