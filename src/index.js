import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/Main.css';
import SectionOne from './section/Section';
import SectionTwo from './section/SectionTwo';
import SectionThree from './section/SectionThree';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </>
)