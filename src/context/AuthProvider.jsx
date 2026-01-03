import React, { createContext, useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)


  useEffect(() => {
    if (!localStorage.getItem('employees')) {
      setLocalStorage()
    }
    const { employees, Admin } = getLocalStorage()
    setUserData({ employees, Admin })

  }, [])


  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

// export default AuthProvider

