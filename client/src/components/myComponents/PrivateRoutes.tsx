import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { Navigate ,Outlet } from 'react-router-dom'
export default function PrivateRoutes() {

    const user=useSelector((state)=>state.user.isAuth)
  return (
    <div>
      {user?<Outlet></Outlet>:<Navigate to={"/"}/>}
    </div>
  )
}
