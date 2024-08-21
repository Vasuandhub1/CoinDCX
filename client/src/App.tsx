import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Authentication from "./pages/Authentication"
import Email_verification from './pages/Email_verification'
// import Forgot_password_component from './components/myComponents/forgot_password_component'
import ResetPassword from './pages/resetPassword'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authentication/>}></Route>
      <Route path='/email_verification' element={<Email_verification/>}></Route>
      <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
