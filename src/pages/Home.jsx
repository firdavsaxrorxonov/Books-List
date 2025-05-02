import React, { useState, useEffect } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import bgImage from '../assets/backgroundDesign.png';
import BookList from '../components/BookList';
import { toast, ToastContainer } from 'react-toastify';

const initialForm = {
  title: '',
  cover: '',
  pages: '',
  published: '',
  isbn: '',
  author: '',
};

function Home() {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }

    const savedOpen = localStorage.getItem('bookFormOpen');
    if (savedOpen) {
      setOpen(JSON.parse(savedOpen));
    }

    const savedForm = JSON.parse(localStorage.getItem('bookFormData'));
    if (savedForm) {
      setForm(savedForm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleOpen = () => {
    setEditingBook(null);
    setForm(initialForm);
    setOpen(true);
    localStorage.setItem('bookFormOpen', JSON.stringify(true));
  };

  const handleClose = () => {
    setOpen(false);
    setForm(initialForm);
    localStorage.setItem('bookFormOpen', JSON.stringify(false));
    localStorage.removeItem('bookFormData');
  };

  const handleChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);
    localStorage.setItem('bookFormData', JSON.stringify(updatedForm));
  };

  const handleSave = () => {
    const isEmpty = Object.values(form).some((val) => val.trim() === '');
    if (isEmpty) {
      toast.error('Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }

    if (editingBook !== null) {
      const updated = books.map((b) =>
        b.isbn === editingBook.isbn ? { ...form } : b
      );
      setBooks(updated);
      toast.success('Kitob yangilandi!');
    } else {
      setBooks([...books, form]);
      toast.success(
        `✅ ‘${form.title}’ muvaffaqiyatli qo‘shildi! O‘qish orqali bilimlaringizni kengaytiring!`
      );
    }

    handleClose();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setForm(book);
    setOpen(true);
  };

  const handleDelete = (bookToDelete) => {
    const updated = books.filter((book) => book.isbn !== bookToDelete.isbn);
    setBooks(updated);
    toast.success(`${bookToDelete.title} kitobi o‘chirildi!`);
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
      }}
    >
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />

      <div style={{ padding: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ color: 'white' }}>
            You’ve got <span style={{ color: '#6200EE' }}>{books.length} book</span>
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleOpen}
            sx={{ backgroundColor: '#6200EE', padding: '10px 24px' }}
          >
            Create a book
          </Button>
        </div>

        <Typography variant="h5" sx={{ color: 'white', marginTop: 2 }}>
          Your books today
        </Typography>

        <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />

        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>{editingBook ? 'Edit Book' : 'Add Book'}</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            {Object.keys(initialForm).map((field) => (
              <TextField
                key={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field] || ''}
                onChange={handleChange}
                fullWidth
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#6200EE' }}>
              {editingBook ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;
