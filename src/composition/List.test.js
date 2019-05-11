import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import '../store.js';

describe('List component', () => {
  const cards = [
    { id: 1, title: 'First card', content: 'lorem ipsum' },
    { id: 2, title: 'Second card', content: 'lorem ipsum' },
    { id: 3, title: 'Third card', content: 'lorem ipsum' },
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={1} cards={cards} header={"test list"} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List key={1} cards={cards} header={"test list"}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })  
});