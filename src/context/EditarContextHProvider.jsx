import { useState } from 'react'
import { createContext } from 'react'

export const EditarContextH = createContext();

const EditarContextHProvider = ({children}) => {

  const [idH, setIdH] = useState('');

  return (
    <EditarContextH.Provider value={[idH, setIdH]}>
      {children}
    </EditarContextH.Provider>
  )
}

export default EditarContextHProvider