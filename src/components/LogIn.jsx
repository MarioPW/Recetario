
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

  return (
    <>
      <Button className='inline-flex justify-center items-center py-1 px-3 text-base font-medium text-center text-white rounded-lg  hover:bg-yellow-500 bg-yellow-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900' onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ingresar</h3>
            <div>
              
              <div className="mb-2 block">
                <Label htmlFor="email" value="Correo" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="nombre@correo.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Contraseña" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Recordarme</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Olvidaste tu contraseña?
              </a>
            </div>
            <div className="w-full ">
              <Button className='inline-flex justify-center items-center py-1 px-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>Ingresar</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              No te registras aún?&nbsp;
              <Link to="/Recetario/register" className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={() => setOpenModal(false)}>
                Registrarme
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


