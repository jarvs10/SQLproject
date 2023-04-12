import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error';
import TableM from '../components/TableM';
import FormularioM from '../components/FormularioM';
import { CSVLink } from "react-csv";

const LineaM = () => {

  const headers = [
    { label: "Estacion", key: "estacion" },
    { label: "Funcionario", key: "funcionario" },
    { label: "Linea", key: "linea" },
    { label: "Horario", key: "horario" },
    { label: "Lorry", key: "lorry" },
    { label: "Sonda1", key: "sonda1" },
    { label: "Sonda2", key: "sonda2" },
    { label: "Presion", key: "presion" },
  ];

  const [lineaM, setLineaM] = useState([]);

  const [animarModal, setAnimarModal] = useState(false);

  const [error, setError] = useState(false);

  const [datosM, setDatosM] = useState({
    linea: '',
    funcionario: '',
    estacion: '',
    horario: '',
    lorry: '',
    sonda1: '',
    sonda2: '',
    presion: ''
  });

  useEffect(() => {
    const fetchLineaM = async () => {
      try {
        const response = await axios.get('http://localhost:5173/lineaM');
        setLineaM(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchLineaM()
  }, [])

  const handleChange = e => {
    setDatosM(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if ([datosM.linea, datosM.estacion, datosM.funcionario, datosM.lorry, datosM.sonda1, datosM.sonda2, datosM.presion, datosM.horario].includes('')) {
      setError(true);
      console.log('todos los campos son necesarios');

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setDatosM({
      linea: '',
      estacion: '',
      funcionario: '',
      horario: '',
      lorry: '',
      sonda1: '',
      sonda2: '',
      presion: ''
    });

    try {
      await axios.post('http://localhost:5173/lineaM', datosM);
      setAnimarModal(true);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      window.location.reload();
      setAnimarModal(false);
    }, 3000);
  }

  const deleteId = async (id) => {
    try {
      await axios.delete('http://localhost:5173/lineaM/' + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className='text-4xl text-center font-black mb-10'>Central De Tension Linea M -- MYSQL</h1>

      <div className='bg-white shadow-xl rounded-md md:w-3/4 mx-auto py-10 px-5 mb-20'>

        <h2 className='font-black mb-10 text-3xl text-center'>Registro de Datos</h2>

        <FormularioM
          datosM={datosM}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          animarModal={animarModal}
        />

        {
          error && <Error>Todos los campos son necesarios</Error>
        }

      </div>

      <div className='mb-11'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Datos Central de Tension Linea M</h2>

        <table className='w-full bg-white shadow-xl mt-5 table-auto'>
          <thead className='bg-green-600 text-white'>
            <tr>
              <th className='p-2 text-lg'>Estacion</th>
              <th className='p-2 text-lg'>Linea</th>
              <th className='p-2 text-lg'>Funcionario</th>
              <th className='p-2 text-lg'>Horario</th>
              <th className='p-2 text-lg'>Desplazamiento Lorry</th>
              <th className='p-2 text-lg'>Sonda 1</th>
              <th className='p-2 text-lg'>Sonda 2</th>
              <th className='p-2 text-lg'>Presion</th>
              <th className='p-2 text-lg'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {lineaM.map(list => {
              return (
                <TableM
                  key={list.id}
                  list={list}
                  deleteId={deleteId}
                />
              )
            })
            }
          </tbody>
        </table>
      </div>
      <CSVLink data={lineaM} headers={headers} filename={`linea M ${(new Date().toDateString())}`} separator=';' className='bg-green-600 hover:bg-green-800 py-2 px-3 text-white font-bold rounded-md'>Export to Excel</CSVLink>
    </>
  )
}

export default LineaM