import React from 'react';
import './List.css';
import Card from './Card';

class List extends React.Component {
  render() {
    const cards = this.props.cards;
    const cardComponents = cards.map(card => {
      return <Card key={card.id} title={card.title} content={card.content} />;
    });

    return (
      <section class="List">
        <header class="List-header">
          <h2>this.props.header</h2>
        </header>
        <div class="List-cards">
          {cardComponents}
        </div>
        <button type="button" class="List-add-button">
            + Add Random Card
        </button>
      </section>
    );
  }
}

export default List;