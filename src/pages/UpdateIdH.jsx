import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { useNavigate, useLocation } from 'react-router-dom';
import { EditarContextH } from '../context/EditarContextHProvider';

const UpdateIdH = () => {

  const [animarModal, setAnimarModal] = useState(false);

  const [error, setError] = useState(false);

  const [datosH, setDatosH] = useState({
    linea: '',
    funcionario: '',
    estacion: '',
    horario: '',
    lorry: '',
    sonda1: '',
    sonda2: '',
    presion: ''
  });

  const navigate = useNavigate();

  const location = useLocation();

  const lineahId = location.pathname.split('/')[2];

  const [idH, setIdH] = useContext(EditarContextH);

  useEffect(() => {
    if (idH !== '') {
      setDatosH({
        linea: idH.linea,
        funcionario: idH.funcionario,
        estacion: idH.estacion,
        horario: idH.horario,
        lorry: idH.lorry,
        sonda1: idH.sonda1,
        sonda2: idH.sonda2,
        presion: idH.presion
      })
    }
  }, [])

  const handleChange = e => {
    setDatosH(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if ([datosH.linea, datosH.estacion, datosH.funcionario, datosH.lorry, datosH.sonda1, datosH.sonda2, datosH.presion, datosH.horario].includes('')) {
      setError(true);
      console.log('todos los campos son necesarios');

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    try {
      await axios.put('http://localhost:5173/lineah/' + lineahId, datosH);
      setAnimarModal(true);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setAnimarModal(false);
      navigate('/');
      setIdH('');
    }, 3000);
  }

  return (
    <>
      <h1 className='text-4xl text-center font-black mb-5'>Central De Tension Linea H -- MYSQL</h1>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto py-10 px-5 mb-20'>

        <h2 className='font-black mb-10 text-3xl text-center'>Actualizar Datos</h2>

        <Formulario
          // lineaH={lineaH}
          datosH={datosH}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          animarModal={animarModal}
        />

        {
          error && <Error>Todos los campos son necesarios</Error>
        }

      </div>
    </>

  )
}

export default UpdateIdH