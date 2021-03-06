import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
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
  CenteredTextBlock,
  IconDescription,
  Footer,
  ImageGrid,
  ObjectDescription,
  Carousel,
  CertGrid,
  ServiceArea,
  ArticleComponent,
  ContactGrid
} from './Components';
import './App.css';

import { ReactComponent as PhoneIcon } from './Vectors/phone.svg';

const SvgVector = ({ source }) => <div>{source}</div>;

function HomePage() {
  return (
    <div id='Home_Page'>
      <MainPage type='home' title='Air Duct Cleaning in Southern California Since 1983' />
      <ComponentWrapper type='imageDesc'>
      <ObjectDescription title='Here is some Grabber Text' description='This contains the photos from the original estimate and photos the foreman took after cleaning your system. This shows you the visual improvement of your system and is great as part of your OSHA documentation.' direction='rtl'>
        <Carousel images={['./Images/img7.jpg', './Images/img8.jpg', './Images/img9.jpg', './Images/img10.jpg', './Images/img11.jpg', './Images/img12.jpg', './Images/img13.jpg', './Images/img14.jpg', './Images/img15.jpg']}/>
      </ObjectDescription>
      </ComponentWrapper>
      <ComponentWrapper type='cert_grid'>
        <CertGrid images={['./Icons/avetta_text.png', './Icons/cslb.png', './Icons/iaqa.jpg', './Icons/ihaci.png', './Icons/isnet.png', './Icons/nadca.png', './Icons/sam.png', './Icons/sbe.png']}/>
      </ComponentWrapper>
      <ComponentWrapper>
        <CenteredTextBlock type='centerTextBlock' header="Once you're ready to sign the bid or issue a purchase order number, our delivery team go to work." content="First they find out about any special building access or regulations you may haveOnce you're ready to sign the bid or issue a purchase order number, our delivery team go to work. First they find out about any special building access or regulations you may have. Having been in business since 1983, we've worked in Government Top Security Building, Jails, Hospitals and Chinese Restaurants, so we're familiar with special building needs. "/>
      </ComponentWrapper>
      <ComponentWrapper type='articles'>
        <ArticleComponent />
      </ComponentWrapper>
      <ComponentWrapper type='service_area'>
        <ServiceArea />
      </ComponentWrapper>
      <ComponentWrapper>
        <ContactGrid />
      </ComponentWrapper>
    </div>
  );
}

function CommercialPage() {
  return (
    <div>
      <MainPage type='commercial' image="url('Backgrounds/PhYq704ffdA.jpg')" title='Commercial and Industrial HVAC Cleaning and Restoration'/>  
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title='Few, if any, HVAC systems are the same, even within the same building' description='	Our highly experienced Account Managers and Estimators look at each part of your system to evaluate what is needed to bring the system back to hygienic and cost efficient operation. Boiler plate and square footage estimates can be very costly because specific issues are missed and can leave a building in a worse condition after cleaning' image={require('./Images/img2.jpg')} direction='ltr' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title='Doing it right first time is the most cost effective and hygienic solution' description='After your Estimator has fully inspected your HVAC system and discussed with you what you are looking to resolve, you will receive a detailed report and bid.' image={require('./Images/img1.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper>
        <CenteredTextBlock type='centerTextBlock' header="Once you're ready to sign the bid or issue a purchase order number, our delivery team go to work." content="First they find out about any special building access or regulations you may haveOnce you're ready to sign the bid or issue a purchase order number, our delivery team go to work. First they find out about any special building access or regulations you may have. Having been in business since 1983, we've worked in Government Top Security Building, Jails, Hospitals and Chinese Restaurants, so we're familiar with special building needs. "/>
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper type='iconDesc'>
        <IconDescription header='On completion you will receive a "Before and After Report"' content='This contains the photos from the original estimate and photos the foreman took after cleaning your system. This shows you the visual improvement of your system and is great as part of your OSHA documentation.' svg={require('./Vectors/report_svg.svg')}/>
      </ComponentWrapper>
      <ImageGrid images={['./Images/img7.jpg', './Images/img8.jpg', './Images/img9.jpg', './Images/img10.jpg', './Images/img11.jpg', './Images/img12.jpg', './Images/img13.jpg', './Images/img14.jpg', './Images/img15.jpg']}/>
    </div>
  );
}
function ResidentialPage() {
  return (
    <div>
      <MainPage type='residential' image="url('Backgrounds/residential_background.jpg')" title='Residential Heating and Air Conditioning'/>  
      <ComponentWrapper>
        <CenteredTextBlock type='top' header="With over 30 years servicing your area, Machado is your Heating, Ventilation and Air Conditioning Cleaning professionals." content="HVAC Cleaning can: Improve the hygienic conditions of your home. Often important for allergy suffers. Improve system efficiency, which saves you money and reduces your carbon footprint. Improve the longevity of your system. Less stress on components makes the system last longer."/>
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title='We recommend having your HVAC system cleaned every 5 years.' description='This can vary with location and weather. It is usually helpful for allergy and asthma sufferers to have it done more frequently and certainly after any house construction work.' image={require('./Images/img4.jpg')} direction='ltr' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title='How do I determine if my ducts are dirty?' description='You can always check to see if your system needs cleaning by shining a flash light through the vents and see if it looks dirty. You could even go as far as taking off the air vent - to get a proper look.' image={require('./Images/img6.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper type='iconDesc'>
        <IconDescription header='Next is to get a quote. Call Nancy at 800 358-3828.' content='This contains the photos from the original estimate and photos the foreman took after cleaning your system. This shows you the visual improvement of your system and is great as part of your OSHA documentation.' svg={require('./Vectors/illustrated_phone.svg')}/>
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='ltr' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='ltr' />
      </ComponentWrapper>
      <ComponentWrapper type='imageDesc'>
        <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='rtl' />
      </ComponentWrapper>
      <ImageGrid images={['./Images/img7.jpg', './Images/img8.jpg', './Images/img9.jpg', './Images/img10.jpg', './Images/img11.jpg', './Images/img12.jpg', './Images/img13.jpg', './Images/img14.jpg', './Images/img15.jpg']}/>
    </div>
  );
}
function DryerPage() {
  return (
    <div>
    <MainPage type='dryer' image="url('Backgrounds/dryer_background.jpg')" title='Residential Dryer Vent Cleaning' />  
    <ComponentWrapper>
      <CenteredTextBlock header="With over 30 years servicing your area, Machado is your Heating, Ventilation and Air Conditioning Cleaning professionals." content="HVAC Cleaning can: Improve the hygienic conditions of your home. Often important for allergy suffers. Improve system efficiency, which saves you money and reduces your carbon footprint. Improve the longevity of your system. Less stress on components makes the system last longer."/>
    </ComponentWrapper>
    <ComponentWrapper type='imageDesc'>
      <ImageDescription title='We recommend having your HVAC system cleaned every 5 years.' description='This can vary with location and weather. It is usually helpful for allergy and asthma sufferers to have it done more frequently and certainly after any house construction work.' image={require('./Images/img4.jpg')} direction='ltr' />
    </ComponentWrapper>
    <ComponentWrapper type='imageDesc'>
      <ImageDescription title='How do I determine if my ducts are dirty?' description='You can always check to see if your system needs cleaning by shining a flash light through the vents and see if it looks dirty. You could even go as far as taking off the air vent - to get a proper look.' image={require('./Images/img6.jpg')} direction='rtl' />
    </ComponentWrapper>
    <ComponentWrapper type='iconDesc'>
      <IconDescription header='Next is to get a quote. Call Nancy at 800 358-3828.' content='This contains the photos from the original estimate and photos the foreman took after cleaning your system. This shows you the visual improvement of your system and is great as part of your OSHA documentation.' svg={require('./Vectors/illustrated_phone.svg')}/>
    </ComponentWrapper>
    <ComponentWrapper type='imageDesc'>
      <ImageDescription title="Next our crews go to work." description="On longer projects you'll get daily statuses via email or phone detailing what areas we've completed and where we'll be working next." image={require('./Images/img3.jpg')} direction='rtl' />
    </ComponentWrapper>
  </div>
  )
}
function Pictures() {
  return (
    <>
      <div class='Pictures'>
        <h1>Pictures</h1>
        <ImageGrid images={['./Images/img7.jpg', './Images/img8.jpg', './Images/img9.jpg', './Images/img10.jpg', './Images/img11.jpg', './Images/img12.jpg', './Images/img13.jpg', './Images/img14.jpg', './Images/img15.jpg']}/>
      </div>
    </>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'home'};
  }

  render() {
    return (
      <HashRouter>
        <Header/>
        <>
          <Route exact path='/' component={HomePage} />
          <Route path='/commercial' component={CommercialPage} />
          <Route path='/residential' component={ResidentialPage} />
          <Route path='/dryer' component={DryerPage} />
          <Route path='/pictures' component={Pictures} />
        </>
        <Footer />
    </HashRouter>
    );
  }
}


export default App;
