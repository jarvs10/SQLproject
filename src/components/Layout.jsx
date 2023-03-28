import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-green-600 px-5 py-10'>
        <h2 className='text-5xl font-black text-center text-white'>App Tensión Cables</h2>

        <div className='mt-20 text-center'>
          <h3 className='mb-10 text-3xl text-white font-bold'>Estaciones Lineas de Cable</h3>

          <nav>
            <Link className={`${location.pathname === '/' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
              to='/'>Linea H</Link>
            <Link className={`${location.pathname === '/lineaM' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
              to='/lineaM'>Linea M</Link>
            <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/lineaM'>Linea K</Link>
          <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/lineaM'>Linea J</Link>
          <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/lineaM'>Linea L</Link>
          </nav>
        </div>


      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll bg-slate-100'>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout