import React, { useState } from 'react'
import { Box, Button, Container, Typography, Link } from '@mui/material'
import CustomTextFieldLogin from './CustomTextFieldLogin'
import { useNavigate } from 'react-router-dom'

const initialForm = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleSubmit = () => {
    const { username, password } = formData
    const newErrors = {
      username: username.trim() === '',
      password: password.trim() === '',
    }

    navigate('/home')

    setErrors(newErrors)

    const hasError = Object.values(newErrors).some(Boolean)
    if (!hasError) {
      console.log('Form submitted:', formData)
    }
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        margin: 2,
        backgroundColor: 'white',
        padding: '48px 28px',
        borderRadius: '12px',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
        Sign in
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 4 }}>
        <CustomTextFieldLogin
          id="username"
          sx={{ borderRadius: '6px' }}
          label="Username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          placeholder="Enter your username"
        />
        <CustomTextFieldLogin
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
        />

        <Button
          onClick={handleSubmit}
          fullWidth
          sx={{
            mt: 2,
            background: '#6200EE',
            color: 'white',
            py: '8px',
            fontWeight: 500,
            textTransform: 'capitalize',
            fontSize: '16px',
            '&:hover': {
              background: '#5200cc',
            },
          }}
        >
          Sign in
        </Button>

        <Typography component="span" sx={{ margin: '8px auto 0 auto', fontSize: '14px' }}>
          Not registered yet?{' '}
          <Link href="/sign-up" sx={{ textDecoration: 'none', color: '#6200EE' }}>
            Go to sign up.
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default LoginForm
