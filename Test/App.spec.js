import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-native';

import App from '../App';

describe('App component', () => {
  it('renders View', () => {
    const view = renderer.create(<App />);
    const rootView = view.toJSON();
    // console.log(rootView);
    expect(rootView.type).toBe('View');
  });
  describe('within View', () => {
    it('renders Button with text "Show alert"', () => {
      const view = renderer.create(<App />);
      const test = view.root;
      // console.log(test.findByType(Button).props.title);
      expect(test.findByType(Button).props.title).toEqual('Show alert');
    });
  });
});
