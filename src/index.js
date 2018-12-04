import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './app/common/util/ScrollToTop';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
