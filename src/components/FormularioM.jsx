import React, { useContext } from 'react'
import { EditarContextH } from '../context/EditarContextHProvider';
import Modal from './Modal';

const FormularioM = ({ datosM, handleChange, handleSubmit, animarModal }) => {

  const { linea, estacion, funcionario, horario, lorry, sonda1, sonda2, presion } = datosM;

  const [idH] = useContext(EditarContextH);

  return (
    <form onSubmit={handleSubmit}>

      {
        animarModal && <Modal />
      }

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="linea"
        >Escoja Linea:</label>
        <select onChange={handleChange} value={linea} className="mt-2 block w-full p-3 bg-gray-200 text-center" id="linea" name='linea'>
          <option value="#">-- Seleccione --</option>
          {/* <option value="Linea H">Linea H</option> */}
          <option value="Linea M">Linea M</option>
          {/* <option value="Linea J">Linea J</option>
          <option value="Linea K">Linea K</option>
          <option value="Linea L">Linea L</option> */}
        </select>
      </div>

      {/* <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="fecha"
        >Fecha:</label>
        <input
          id="fecha"
          type="date"
          className="mt-2 block w-full p-3 bg-gray-200"
          name="fecha"
          value={fecha}
          onChange={handleChange}
        />
      </div> */}

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="funcionario"
        >Funcionario:</label>
        <input
          id="funcionario"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Funcionario"
          name="funcionario"
          value={funcionario}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="nombre"
        >Estacion:</label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Nombre Estacion"
          name="estacion"
          value={estacion}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="horario"
        >Horario:</label>
        <select onChange={handleChange} value={horario} className="mt-2 block w-full p-3 bg-gray-200" id="horario" name='horario'>
          <option value="#">-- Seleccione --</option>
          <option value="06:00">06:00</option>
          <option value="12:00">12:00</option>
          <option value="18:00">18:00</option>
          <option value="22:00">22:00</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="Desplazamiento"
        >Desplazamiento de Lorry:</label>
        <input
          id="Desplazamiento"
          step="0.01"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Desplazamiento de Lorry"
          name="lorry"
          value={lorry}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="Sonda 1"
        >Sonda 1:</label>
        <input
          id="Sonda 1"
          step="any"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Sonda 1"
          name="sonda1"
          value={sonda1}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="Sonda 2"
        >Sonda 2:</label>
        <input
          id="Sonda 2"
          step="any"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Sonda 2"
          name="sonda2"
          value={sonda2}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800 font-semibold"
          htmlFor="Presion"
        >Presion:</label>
        <input
          id="Presion"
          step="any"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-200"
          placeholder="Presion"
          name="presion"
          value={presion}
          onChange={handleChange}
        />
      </div>

      <button
        className='mt-5 w-full bg-green-600 hover:bg-green-800 text-white uppercase p-3 cursor-pointer font-bold'
      >{idH.id ? 'Actualizar' : 'Agregar'}
      </button>

    </form>
  )
}

export default FormularioM