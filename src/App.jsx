import { Navigation } from './components/pages/home/Navigation';
import { MyFooter } from './components/pages/home/Footer';
import { Preheader } from './components/pages/home/Preheader';

import { AnimatedRoutes } from "./components/pages/routes/AnimatedRoutes";
import { HashRouter } from 'react-router-dom';

function App() {

  return (
    <div className='mx-0'>
      <Preheader />
      <Navigation />
      <div className="block margin-auto">
      </div>
        <AnimatedRoutes />
      <MyFooter />
    </div>
  )
}

export default App
