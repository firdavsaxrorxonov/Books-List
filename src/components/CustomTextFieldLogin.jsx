import React from 'react'
import { FormLabel, TextField } from '@mui/material'

const CustomTextFieldLogin = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  sx,
}) => {
  return (
    <>
      <FormLabel
        htmlFor={id}
        sx={{
          fontWeight: 500,
          color: error ? 'red' : 'black',
          mt: id !== 'username' ? 2 : 0,
        }}
      >
        {label}
      </FormLabel>
      <TextField
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        variant="outlined"
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            height: 40,
            padding: 0,
            '& input': {
              padding: '10px 14px',
              fontSize: '14px',
            },
            '& fieldset': {
              borderColor: error ? 'red' : '#EBEBEB',
              borderRadius: '8px',
            },
            '&:hover fieldset': {
              borderColor: error ? 'red' : '#EBEBEB',
            },
            '&.Mui-focused fieldset': {
              borderColor: error ? 'red' : '#6200EE',
              boxShadow: error
                ? '0 0 0 1px red'
                : '0px 4px 18px 0px rgba(51, 51, 51, 0.04)',
            },
          },
          '& .MuiInputBase-input': {
            textOverflow: 'ellipsis',
          },
          ...sx,
        }}
      />
    </>
  )
}

export default CustomTextFieldLogin
