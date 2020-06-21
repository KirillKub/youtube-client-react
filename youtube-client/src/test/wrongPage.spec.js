import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import WrongPage from '../../src/wrong-page/wrongPage';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

describe('Wrong page', () => {
  it('render wrong page', () => {
    act(() => {
      render(<WrongPage/>, container)
    })
    expect(container.textContent).toBe('Sorry, smth went wrong((')
  })
})