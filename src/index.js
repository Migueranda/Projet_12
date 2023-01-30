import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />   
  // </React.StrictMode>
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element={<App /> } />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
 </React.StrictMode>   
);
