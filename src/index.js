import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
*  @method render in this method I set the router of the application as well as the router that directs to the error page(404)
*          
* */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/:userId' element={<App /> } />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
 </React.StrictMode>   
);
