import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-green-600 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>App Tensión Cables</h2>

        <nav className='mt-20 text-center'>
          <Link className={`${location.pathname === '/' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/'>Linea H</Link>
          <Link className={`${location.pathname === '/lineaM' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/lineaM'>Linea M</Link>
          {/* <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/registro/nuevo'>Linea K</Link>
          <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/registro/nuevo'>Linea J</Link>
          <Link className={`${location.pathname === '/registro/nuevo' ? 'text-black' : ' text-white'} block font-bold text-2xl hover:text-black mb-4`}
            to='/registro/nuevo'>Linea L</Link> */}
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout