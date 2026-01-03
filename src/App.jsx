import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loogedInUserData, setloogedInUserData] = useState(null)
  const [isSignup, setIsSignup] = useState(false)

  const [userData, setUserData] = useContext(AuthContext)

  const refreshUserData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)
        if (userData && userData.role === 'employee' && userData.data) {
          const employees = JSON.parse(localStorage.getItem('employees') || '[]')
          const updatedEmployee = employees.find(emp => emp.email === userData.data.email)
          if (updatedEmployee) {
            setloogedInUserData(updatedEmployee)
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
          }
        }
      } catch (error) {
        console.error('Error refreshing user data:', error)
      }
    }
  }



  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]')
    if (employees.length > 0) {
      employees.forEach(emp => {
        emp.taskCount = {
          newTask: emp.tasks.filter(t => t.newTask).length,
          active: emp.tasks.filter(t => t.active).length,
          completed: emp.tasks.filter(t => t.completed).length,
          failed: emp.tasks.filter(t => t.failed).length
        }
      })
      localStorage.setItem('employees', JSON.stringify(employees))
    }

    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)
        if (userData && userData.role) {
          setUser(userData.role)
          if (userData.data) {
            const updatedEmployee = employees.find(emp => emp.email === userData.data.email)
            setloogedInUserData(updatedEmployee || userData.data)
          }
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error)
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])




  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData?.employees.find((emp) => email == emp.email && emp.password == password)

      if (employee) {
        setUser('employee')
        setloogedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid Credentials')
      }
    }
    else {
      alert('Invalid Credentials')
    }
  }

  const handleSignup = (name, email, password) => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]')

    if (employees.find(emp => emp.email === email)) {
      alert('Email already exists')
      return
    }

    const newEmployee = {
      id: employees.length + 1,
      name,
      email,
      password,
      taskCount: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: []
    }

    employees.push(newEmployee)
    localStorage.setItem('employees', JSON.stringify(employees))
    setUserData({ ...userData, employees })
    alert('Account created successfully! Please login.')
    setIsSignup(false)
  }

  return (
    <>
      {!user ? (
        isSignup ?
          <Signup handleSignup={handleSignup} switchToLogin={() => setIsSignup(false)} /> :
          <Login handleLogin={handleLogin} switchToSignup={() => setIsSignup(true)} />
      ) : (
        user === 'admin' ? <AdminDashboard changeUser={setUser} /> : <EmployeeDashBoard changeUser={setUser} data={loogedInUserData} refreshUserData={refreshUserData} />
      )}
    </>
  )
}

export default App