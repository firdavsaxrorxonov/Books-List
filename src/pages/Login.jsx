import React from 'react'
import { Box } from '@mui/material'
import bgImage from '../assets/backgroundDesign.png'
import LoginForm from '../components/LoginFrom'

const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <LoginForm />
    </Box>

  )
}

export default Login
