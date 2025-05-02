import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  InputBase,
  Avatar,
  IconButton,
} from '@mui/material';

import Logo from '../assets/logo.svg';
import blackSearchIcon from '../assets/blackSearchIcon.svg';
import userProfile from '../assets/user-image.png';
import bellIcon from '../assets/bellIcon.svg';

function Header({ setSearchTerm }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        boxSizing: 'border-box',
        px: '80px',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        transition: 'backdrop-filter 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '5px',
        }}
      >
        <Box display="flex" alignItems="center" gap="24px">
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: '18px',
              gap: '20px',
              color: '#6200EE',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="Logo" />
            <span>
              Books <span style={{ color: 'white' }}>List</span>
            </span>
          </Link>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <img
              src={blackSearchIcon}
              alt="Search"
              style={{
                zIndex: 1,
                position: 'absolute',
                left: '10px',
                width: '20px',
                height: '20px',
                transition: '0.3s ease',
              }}
            />
            <InputBase
              placeholder="Search for any training you want"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={searchValue}
              onChange={handleChange}
              sx={{
                padding: '10px 40px',
                backgroundColor: isFocused ? 'white' : 'transparent',
                borderRadius: '6px',
                width: '300px',
                fontSize: '14px',
                lineHeight: '1',
                border: 'none',
                transition: 'background-color 0.2s ease',
                color: '#000',
                '& input::placeholder': {
                  color: 'gray',
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="24px">
          <IconButton>
            <img src={bellIcon} alt="Bell" style={{ cursor: 'pointer' }} />
          </IconButton>
          <Avatar src={userProfile} alt="User" sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
