import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Paragraph from './components/Paragraph';
import Greet from './components/Greet';
import Skills from './components/Skills';
import Couter from './components/Couter';
import Provider from './providers/Provider';
import MuiMode from './components/MuiMode';
import User from './components/Https/User';

function App() {
  return (
    <Provider>
      <MuiMode />
      <User />
    </Provider>

  );
}

export default App;
