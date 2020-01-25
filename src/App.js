import React from 'react';
import logo from './logo.svg';
import {
  BorderButton,
  ContactButton,
  Header,
  MainPage,
  BorderDescription,
  LargeImage,
  ImageDescription,
  ComponentWrapper,
  CenteredTextBlock
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
      <ComponentWrapper background={require('./Blobs/blob.svg')} background_position='top right'>
        <ImageDescription title='Few, if any, HVAC systems are the same, even within the same building' description='	Our highly experienced Account Managers and Estimators look at each part of your system to evaluate what is needed to bring the system back to hygienic and cost efficient operation. Boiler plate and square footage estimates can be very costly because specific issues are missed and can leave a building in a worse condition after cleaning' image={require('./Images/prop_img.jpg')} direction='ltr' />
      </ComponentWrapper>
      <ComponentWrapper >
        <ImageDescription title='Doing it right first time is the most cost effective and hygienic solution' description='After your Estimator has fully inspected your HVAC system and discussed with you what you are looking to resolve, you will receive a detailed report and bid.' image={require('./Images/prop_img2.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper>
        <CenteredTextBlock header="Once you're ready to sign the bid or issue a purchase order number, our delivery team go to work." content="First they find out about any special building access or regulations you may haveOnce you're ready to sign the bid or issue a purchase order number, our delivery team go to work. First they find out about any special building access or regulations you may have. Having been in business since 1983, we've worked in Government Top Security Building, Jails, Hospitals and Chinese Restaurants, so we're familiar with special building needs. "/>
      </ComponentWrapper>
      <ComponentWrapper background={require('./Blobs/blob2.svg')} background_position='top left'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/prop_img3.jpg')} direction='rtl' />
      </ComponentWrapper>
    </div>
  );
}

export default App;
