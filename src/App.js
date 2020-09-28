import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  static defaultProps = {
    lists: [],
    cards: []
  };

  render() {
    const lists = this.props.store.lists;
    const allCards = this.props.store.allCards;

    const listComponents = lists.map(list => {
      let cards = list.cardIds.map(id => {
        return allCards[id];
      });
      return <List key={list.id} header={list.header} cards={cards} />
    });

    return (
      <main class="App" >
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
          {listComponents}
        </div>
      </main>
    )
  };
}

export default App;
