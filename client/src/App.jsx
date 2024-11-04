import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Layout from '../pages/layout'
import Login from '../pages/login'
import SignUp from '../pages/signUp'
import Items from '../pages/items'
import Cart from '../pages/cart'
import Profile from '../pages/profile'

function App() {
 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/items' element={<Items/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
