import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import List from './List';


describe('List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const card = {id: 'a', title: 'test', content:'test content'}
        ReactDOM.render(<List key={1} header="test" cards={[card]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as expected', () => {
      const card = {id: 'a', title: 'test', content:'test content'}
      // Render the component, as JSON
      const tree = renderer.create(<List key={1} header="test" cards={[card]} />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
})