import React, { useState } from 'react';
import Header from '../components/Header';

function MainLayout({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      {React.cloneElement(children, { searchTerm })}
    </div>
  );
}

export default MainLayout;
