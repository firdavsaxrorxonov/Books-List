import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Badge } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function BookCard({ book, onEdit, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  const { title, cover, pages, published, isbn, author } = book;

  const handleDelete = () => {
    const confirmDelete = window.confirm('Ro‘stdan ham o‘chirmoqchimisiz?');
    if (confirmDelete) {
      onDelete(book);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 370,
        boxShadow: 4,
        width: '100%',
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 2,
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'visible',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 8,
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
          zIndex: 10,
          backgroundColor: 'white'
        }}>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={() => onEdit(book)}>
            <Edit />
          </IconButton>
        </div>
      )}

      <CardContent sx={{ paddingBottom: '16px', paddingTop: '8px' }}>
        <Typography variant="h6" component="h3" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
          {title}
        </Typography>
        <ul style={{ paddingLeft: 0, margin: 0, listStyleType: 'none' }}>
          <li><Typography variant="body2">Cover: <Link style={{ color: '#01A4FF' }} to={cover}>{cover}</Link></Typography></li>
          <li><Typography variant="body2">Pages: {pages}</Typography></li>
          <li><Typography variant="body2">Published: {published}</Typography></li>
          <li><Typography variant="body2">ISBN: {isbn}</Typography></li>
        </ul>
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2">{author} / {published}</Typography>
          <Badge badgeContent="New" color="error" />
        </div>
      </CardContent>
    </Card>
  );
}

export default BookCard;
