import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const IsLoggedIn= localStorage.getItem("token")
  return IsLoggedIn ?<Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoute