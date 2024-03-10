import { Navigation } from './components/pages/home/Navigation';
import { MyFooter } from './components/pages/home/Footer';
import { Preheader } from './components/pages/home/Preheader';

import { AnimatedRoutes } from "./components/pages/routes/AnimatedRoutes";

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
