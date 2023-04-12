import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableH from '../components/TableH';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { CSVLink } from "react-csv";
import FormElectroT from '../components/FormElectroT';

const Index = () => {

  const headers = [
    { label: "Estacion", key: "estacion" },
    { label: "Linea", key: "linea" },
    { label: "Fecha", key: "fecha" },
    { label: "Funcionario", key: "funcionario" },
    { label: "Horario", key: "horario" },
    { label: "Lorry", key: "lorry" },
    { label: "Sonda1", key: "sonda1" },
    { label: "Sonda2", key: "sonda2" },
    { label: "Presion", key: "presion" },
  ];

  const [lineaH, setLineaH] = useState([]);

  const [animarModal, setAnimarModal] = useState(false);

  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(0)

  const [datosH, setDatosH] = useState({
    linea: '',
    fecha: '',
    funcionario: '',
    estacion: '',
    horario: '',
    lorry: '',
    sonda1: '',
    sonda2: '',
    presion: ''
  });

  const filteredData = () => {

    return lineaH.slice(currentPage, currentPage + 4);
  }

  const nextPage = () => {
    if(currentPage >= 0){
      setCurrentPage(currentPage + 4)
    }
  }

  const prevPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 4)
    }
  }

  useEffect(() => {
    const fetchLineaH = async () => {
      try {
        const response = await axios.get('http://localhost:5173/lineah');
        setLineaH(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchLineaH()
  }, [])

  const handleChange = e => {
    setDatosH(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if ([datosH.linea, datosH.fecha, datosH.estacion, datosH.funcionario, datosH.lorry, datosH.sonda1, datosH.sonda2, datosH.presion, datosH.horario].includes('')) {
      setError(true);
      console.log('todos los campos son necesarios');

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setDatosH({
      linea: '',
      fecha: '',
      funcionario: '',
      estacion: '',
      horario: '',
      lorry: '',
      sonda1: '',
      sonda2: '',
      presion: ''
    });

    try {
      await axios.post('http://localhost:5173/lineah', datosH);
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
      await axios.delete('http://localhost:5173/lineah/' + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className='text-4xl text-center font-black mb-10'>Central De Tension Linea H -- MYSQL</h1>

      <div className='bg-white shadow-xl rounded-md md:w-3/4 mx-auto py-10 px-5 mb-20'>

        <h2 className='font-black mb-10 text-3xl text-center'>Registro de Datos</h2>

        <Formulario
          datosH={datosH}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          animarModal={animarModal}
          deleteId={deleteId}
        />

        {
          error && <Error>Todos los campos son necesarios</Error>
        }

      </div>

      <div className='mb-5'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Datos Central de Tension Linea H</h2>

        <table className='w-full bg-white shadow-xl mt-5 table-auto'>
          <thead className='bg-green-600 text-white'>
            <tr>
              <th className='p-2 text-lg'>Estacion</th>
              <th className='p-2 text-lg'>Linea</th>
              <th className='p-2 text-lg'>fecha</th>
              <th className='p-2 text-lg'>Funcionario</th>
              <th className='p-2 text-lg'>Horario</th>
              <th className='p-2 text-lg'>Lorry</th>
              <th className='p-2 text-lg'>Sonda 1</th>
              <th className='p-2 text-lg'>Sonda 2</th>
              <th className='p-2 text-lg'>Presion</th>
              <th className='p-2 text-lg'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData().map(list => {
              return (
                <TableH
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
      
      <div className='flex mb-8 gap-4'>
        <button onClick={prevPage} className='bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-5 rounded-lg'>Anterior</button>
        <button onClick={nextPage} className='bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-5 rounded-lg'>Siguiente</button>
      </div>
      

      <CSVLink data={lineaH} headers={headers} filename={`linea H ${(new Date().toDateString())}`} separator=';' className='bg-green-600 hover:bg-green-800 py-2 px-3 text-white font-bold rounded-md'>Export to Excel</CSVLink>

      {/* <div className='mt-20'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Datos Grupo Electrogeno estaciones Linea H</h2>
          
        <FormElectroT />

      </div> */}
    </>

  )
}

export default Index