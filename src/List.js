import React from 'react';
import './List.css';
import Card from './Card';

class List extends React.Component {
  render() {
    const cards = this.props.cards;
    const cardComponents = cards.map(card => {
      return <Card key={card.id} title={card.title} content={card.content} 
        deleteCard={() => this.props.deleteCard(card.id)} />;
    });

    return (
      <section className="List">
        <header className="List-header">
          <h2>this.props.header</h2>
        </header>
        <div className="List-cards">
          {cardComponents}
        </div>
        <button type="button" className="List-add-button" 
          onClick={this.props.addRandomCard}>
            + Add Random Card
        </button>
      </section>
    );
  }
}

export default List;