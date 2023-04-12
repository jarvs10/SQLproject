import React from 'react'

const FormElectroT = () => {
  return (
    <form className='bg-white shadow-xl rounded-md md:w-3/4 mx-auto py-10 px-5 mb-20'>

      <h2 className='text-center font-bold text-2xl mb-6'>Formulario Ingreso datos Grupo Electrogeno</h2>

      <div className="mb-4">
        <label className='text-gray-800 font-semibold' htmlFor="fecha">Fecha:</label>
        <input className="mt-2 block w-full p-3 bg-gray-200" type="date" placeholder='Fecha' id='fecha' />
      </div>

      <div className="mb-4">
        <label className='text-gray-800 font-semibold' htmlFor="funcionario2">Funcionario:</label>
        <input className="mt-2 block w-full p-3 bg-gray-200" type="text" placeholder='Funcionario' id='funcionario2' />
      </div>

      <div className="mb-4">
        <label className='text-gray-800 font-semibold' htmlFor="OPC">OPC:</label>
        <input className="mt-2 block w-full p-3 bg-gray-200" type="text" placeholder='OPC' id='OPC' />
      </div>

      <div className="mb-4">
        <label className='text-gray-800 font-semibold' htmlFor="%">Porcentaje:</label>
        <input className="mt-2 block w-full p-3 bg-gray-200" placeholder='%' step="any" type="number" id='%' />
      </div>

      <div>
        <label className='text-gray-800 font-semibold' htmlFor="ups">UPS:</label>
        <input className="mt-2 block w-full p-3 bg-gray-200" placeholder='UPS' step="any" type="text" id='ups' />
      </div>
    </form>
  )
}

export default FormElectroT