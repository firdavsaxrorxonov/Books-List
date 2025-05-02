import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // useNavigate import qilinadi
import bgImage from '../assets/backgroundDesign.png';
import notFoundImage from '../assets/notFoundImg.png';

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 30px',
        boxSizing: 'border-box'
      }}
    >
      <img
        src={notFoundImage}
        alt="Not Found"
        style={{
          maxWidth: '720px',
          width: '100%',
          height: 'auto',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          justifyContent: 'center',
          marginTop: '72px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          sx={{
            padding: '10px 64px',
            fontWeight: 500,
            color: 'white',
            borderRadius: '4px',
            backgroundColor: '#6200EE',
            border: '1px solid #6200EE',
            cursor: 'pointer',
          }}
          onClick={handleGoHome}
        >
          Go Home Page
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: '10px 64px',
            fontWeight: 500,
            color: '#6200EE',
            borderRadius: '4px',
            cursor: 'pointer',
            border: '1px solid #6200EE',
          }}
          onClick={handleReload}
        >
          Reload Page
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
