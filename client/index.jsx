import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit';
import App from './app';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
