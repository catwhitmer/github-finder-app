import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
  const initState = null

  const [state, dispatch] = useReducer(alertReducer, initState)

  return <AlertContext.Provider>
    {children}
  </AlertContext.Provider>
}

export default AlertContext