import 'wicg-focus-ring';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'state/store';

import './styles';
import App from './components/app';

/* eslint-disable */
try {
  require("babel-polyfill");
} catch (e) {}
/* eslint-enable */

window.initPdfSlideshow = function initPdfSlideshow() {
  document.querySelectorAll('.pdf-slideshow-widget').forEach((element) => {
    const store = createStore('such-pdf');

    render(
      <Provider store={store}>
        <App pdf={element.dataset.pdf} />
      </Provider>,
      element,
    );
  });
};
