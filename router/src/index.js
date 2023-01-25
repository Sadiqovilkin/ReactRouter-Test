import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Layout from './component/Layout/Layout';
import {BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Layout>
  <App />
 </Layout>
  </BrowserRouter>
 
    

);

