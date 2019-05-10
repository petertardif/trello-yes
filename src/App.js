import React from 'react';
import './store.js';
import Card from './composition/Card.js';
import List from './composition/List.js';

function App() {
  return (
    <main className='App'>
      <Card />
      <List />
    </main>
  );
}

export default App;