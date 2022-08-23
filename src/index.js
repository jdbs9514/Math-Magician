import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/app" element={<App />} />
    <Route path="/quote" element={<Quotes />} />
  </Routes>
</Router>,
document.getElementById('root'),
);

