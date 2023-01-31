import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { Form } from './components/Form';

export const App = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <Header />
        <div className="container">
          <Users success={success} />
          <Form success={success} setSuccess={setSuccess} />
        </div>
      </div>
    </div>
  );
}
