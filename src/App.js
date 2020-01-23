import React from 'react';
import logo from './logo.svg';
import {
  BorderButton,
  ContactButton,
  Header,
  MainPage
} from './Components';
import './App.css';

import { ReactComponent as PhoneIcon } from './Vectors/phone.svg';

const SvgVector = ({ source }) => <div>{source}</div>;

function App() {
  const componentDisplay = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    width: '100vw',
    height: '90vh',
    marginTop: '200px',
    padding: '50px'
  }
  return (
    <div>
      <Header />
      <MainPage type='commercial' image="url('Backgrounds/PhYq704ffdA.jpg')" title='Commercial and Industrial HVAC Cleaning and Restoration'/>  
    </div>
  );
}

export default App;
