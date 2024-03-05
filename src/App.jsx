import { Navigation } from './components/Navigation';
import { MyFooter } from './components/Footer';
import { Preheader } from './components/Preheader';

import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {

  return (
    <div className='mx-0'>
    <Preheader/>
      <Navigation/>
      <div className="block margin-auto">
      </div>
     <AnimatedRoutes />
      <MyFooter />
    </div>
  )
}

export default App
