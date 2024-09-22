import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Top from './Component/Top/Top';
import Header from './Component/Header/Header';
import Section1 from './Component/Section-1/Section1';
import Section2 from './Component/Section-2/Section2';
import Section3 from './Component/Section-3/Section3';
import Section4 from './Component/Section-4/Section4';
import Section5 from './Component/Section-5/Section5';
import Section6 from './Component/Section-6/Section6';
import Section7 from './Component/Section-7/Section7';
import Section8 from './Component/Section-8/Section8';
import Footer from './Component/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Top/>
    <Header/>
    <Section1/>
    <Section3/>
    <Section2/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
