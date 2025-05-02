import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/sign-in' element={<Login />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='*' element={<NotFound />} />
      <Route index element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
    </Routes>
  )
}

export default App
