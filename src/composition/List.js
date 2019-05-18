import React from 'react';
import './List.css';
import Card from './Card.js'

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => 
          <Card 
          key = {card.id}
          id = {card.id}
          title={card.title}
          content={card.content}
          onDeleteItem={props.onDeleteItem}
          />
        )}
        <button 
          onClick={() => props.onRandomNewCard(props.id)} 
          type='button'>
          Add random card
          </button> 
      </div>
    </section>
  );
}
    