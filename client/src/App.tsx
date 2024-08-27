import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Authentication from "./pages/Authentication"
import Email_verification from './pages/Email_verification'
// import Forgot_password_component from './components/myComponents/forgot_password_component'
import ResetPassword from './pages/resetPassword'
import VerifyResetPasswordOTP from './pages/verifyResetPasswordOTP'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateRoutes from './components/myComponents/PrivateRoutes'
import Home from './pages/Home'
import KnowYourCostumer from './pages/KnowYourCostumer'
import Profile from './pages/profile'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authentication/>}></Route>
      <Route path='/email_verification' element={<Email_verification/>}></Route>
      <Route path='/ResetPasswordOTP' element={<VerifyResetPasswordOTP/>}></Route>
      <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
      <Route element={<PrivateRoutes></PrivateRoutes>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/knowYourCostumer' element={<KnowYourCostumer/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
