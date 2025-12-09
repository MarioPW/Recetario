import { Navigation } from './components/pages/home/Navigation';
import { MyFooter } from './components/pages/home/Footer';
import { Preheader } from './components/pages/home/Preheader';

import { AnimatedRoutes } from "./components/routes/AnimatedRoutes";

function App() {

    return (
    <div className='flex flex-col min-h-screen'>
      <Preheader />
      <Navigation />
      <main className='flex-1'>
        <AnimatedRoutes />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
