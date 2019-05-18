import React from 'react';
import './Card.css'

export default function Card(props) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button 
        onClick={() => props.onDeleteItem(props.id)} 
        type='button'>
        Delete
      </button>
    </div>
  );
}

