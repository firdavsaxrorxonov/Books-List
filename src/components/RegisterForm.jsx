import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  Link,
} from '@mui/material'
import CustomTextFieldRegister from './CustomTextFieldRegister'

const initialForm = {
  username: '',
  password: '',
  confirmPassword: '',
}

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleSubmit = () => {
    const { username, password, confirmPassword } = formData
    const newErrors = {
      username: username.trim() === '',
      password: password.trim() === '',
      confirmPassword:
        confirmPassword.trim() === '' || password !== confirmPassword,
    }
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
        Sign up
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 4 }}>
        <CustomTextFieldRegister
          id="username"
          sx={{ borderRadius: '6px' }}
          label="Username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <CustomTextFieldRegister
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <CustomTextFieldRegister
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
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
          Sign up
        </Button>

        <Typography component="span" sx={{ margin: '8px auto 0 auto', fontSize: '14px' }}>
          Already signed up?{' '}
          <Link href='/' sx={{ textDecoration: 'none', color: '#6200EE' }}>
            Go to sign in.
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default RegisterForm
