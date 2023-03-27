import React from 'react'

const Modal = () => {
  return (
    <>
      <div
        className="md:w-4/4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
      >
        <div className="w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-bold">
                Datos Enviados Correctamente...
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal