import './App.css'
import { Navigation } from './components/Navigation';
import { RecipeLayout } from './components/RecipeLayout';

function App() {

  return (
    <>
      <Navigation/>
      <div className="block margin-auto">
        <RecipeLayout />
      </div>
    </>
  )
}

export default App
