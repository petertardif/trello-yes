import React from 'react';
import './List.css';
import Card from './Card.js'
import STORE from '../store';

class List extends React.Component {
  render() {
    const arrayOfList = STORE.lists.map((item) =>
      <div key={item.id}>
        <header className="List-header">
          <h2>{item.header}</h2>
        </header>
        <div className="List-cards">
          <Card />
        </div>
      </div>
    )
    return (
      <section className="List">
        {arrayOfList}
      </section>
    );
  }
}

export default List; 