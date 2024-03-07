import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout.jsx';
import {Provider} from "react-redux";
import store from './redux-store.js';

const renderTree = () => {

  let  root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<React.StrictMode>
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  </React.StrictMode>);
};

export default renderTree;