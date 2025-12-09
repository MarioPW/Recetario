import { Footer } from 'flowbite-react';

export const MyFooter = () => {
  return (
    <Footer className='bg-blue-800 text-blue-200 w-full'>
      <div className="w-full">
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://github.com/MarioPW" by="WemMaster: Mario Triana" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          </div>
        </div>
      </div>
    </Footer>
  );
}
