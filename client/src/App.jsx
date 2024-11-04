import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../pages/landing'
import Layout from '../pages/layout'

function App() {
 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
