import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export const Register = () => {
  return (
    <form className="flex max-w-md mx-5 flex-col gap-4 sm:mx-auto my-20">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Correo" />
        </div>
        <TextInput id="email1" type="email" placeholder="nombre@correo.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Contraseña" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Confirmar Contraseña" />
        </div>
        <TextInput id="password2" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Recordarme</Label>
      </div>
      <Button type="submit" className=' bg-sky-700'>Enviar</Button>
    </form>
  );
}

