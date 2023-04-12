import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { EditarContextH } from '../context/EditarContextHProvider';

const TableM = ({list, deleteId}) => {

  const {estacion, fecha, linea, funcionario, lorry, sonda1, sonda2, presion, horario, id} = list;

  const [idH, setIdH] = useContext(EditarContextH);

  return (
    <>
      <tr className='border-b'>
        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-700 font-bold'>{estacion}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{linea}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{fecha}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{funcionario}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{horario}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-700 font-bold'>{lorry}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{sonda1}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{sonda2}</p>
        </td>

        <td className='p-6 text-center'>
          <p className='text-1xl text-gray-400 font-semibold'>{presion}</p>
        </td>

        <td className='text-center flex gap-2 justify-center flex-row items-center py-6'>
          <Link to={`/updateM/${id}`}>
            <button onClick={() => setIdH(list)} className='text-green-500 hover:green-indigo-700 text-1xl font-semibold'>Editar</button>
          </Link>
          <button onClick={() => deleteId(id)} className='text-red-500 hover:text-red-700 text-1xl font-semibold'>Eliminar</button>
        </td>

      </tr>
    </>
  )
}

export default TableM