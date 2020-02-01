import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import ReactDom from 'react-dom';
import './Components.css';

/* Icons */

import { ReactComponent as Logo } from './logo.svg';

import { ReactComponent as PhoneIcon } from './Vectors/phone.svg';


/* Components */

 // Buttons

function BorderButton(props) {
    let inner_text = props.name;

    if (props.linkPage) {
        return (
            <NavLink to={props.linkPage}>
                <div className='border-button'>
                    <span>{props.name}</span>
                </div>
            </NavLink>
        );
    } else {
        return (
            <div className='border-button'>
                <span>{inner_text}</span>
            </div>
        );
    }
}
function ContactButton(props) {
    function returnIcon() {
        switch(props.iconName) {
            case 'phone':
                return <PhoneIcon className='fullCentered'/>
                break;
            default :
            return <PhoneIcon className='fullCentered'/>
        }
    }
    let button_text = props.text;
    return (
        <div className='contact-button'>
            <div>{returnIcon()}</div>
            <div><span className='fullCentered'>{button_text}</span></div>
        </div>
    );
}

function LargeHeader() {
    function showNav() {
        let toggled = false;
        return function() {
          const navigation = document.querySelector('.mobile_header_menu');
          if (toggled) {
            navigation.style.height = '0px';
            navigation.style.opacity = '0'
            toggled = false;
          } else {
            navigation.style.height = '100vh';
            navigation.style.opacity = '1';
            toggled = true;
          }
        }
    }
    const showNavTrigger = showNav();
    return (
        <div className='DesktopHeader'>
            <div className='DesktopHeaderLogo'><Logo/></div>
            <div className='DesktopHeaderLinks'>
                <div className='links'>
                    <NavLink to='/'><div><span>Home</span><span></span></div></NavLink>
                    <NavLink to='/about'><div><span>About</span><span></span></div></NavLink>
                    <NavLink to='/contact'><div><span>Contact</span></div></NavLink>
                    <NavLink to='/faqs'><div><span>FAQ</span></div></NavLink>
                    <NavLink to='/about'><div><span>About</span></div></NavLink>
                    <NavLink to='/pictures'><div><span>Pictures</span></div></NavLink>
                    <NavLink to='/videos'><div><span>Videos</span></div></NavLink>
                </div>
                <div className='mobile_header_menu_icon'>
                    <svg onClick={showNavTrigger} width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 0.125H11.625C12.1223 0.125 12.5992 0.322544 12.9508 0.674175C13.3025 1.02581 13.5 1.50272 13.5 2C13.5 2.49728 13.3025 2.97419 12.9508 3.32582C12.5992 3.67746 12.1223 3.875 11.625 3.875H2.25C1.75272 3.875 1.27581 3.67746 0.924175 3.32582C0.572544 2.97419 0.375 2.49728 0.375 2C0.375 1.50272 0.572544 1.02581 0.924175 0.674175C1.27581 0.322544 1.75272 0.125 2.25 0.125V0.125ZM15.375 15.125H24.75C25.2473 15.125 25.7242 15.3225 26.0758 15.6742C26.4275 16.0258 26.625 16.5027 26.625 17C26.625 17.4973 26.4275 17.9742 26.0758 18.3258C25.7242 18.6775 25.2473 18.875 24.75 18.875H15.375C14.8777 18.875 14.4008 18.6775 14.0492 18.3258C13.6975 17.9742 13.5 17.4973 13.5 17C13.5 16.5027 13.6975 16.0258 14.0492 15.6742C14.4008 15.3225 14.8777 15.125 15.375 15.125V15.125ZM2.25 7.625H24.75C25.2473 7.625 25.7242 7.82254 26.0758 8.17418C26.4275 8.52581 26.625 9.00272 26.625 9.5C26.625 9.99728 26.4275 10.4742 26.0758 10.8258C25.7242 11.1775 25.2473 11.375 24.75 11.375H2.25C1.75272 11.375 1.27581 11.1775 0.924175 10.8258C0.572544 10.4742 0.375 9.99728 0.375 9.5C0.375 9.00272 0.572544 8.52581 0.924175 8.17418C1.27581 7.82254 1.75272 7.625 2.25 7.625Z" fill="#F4F4F4"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

// Header Nav 

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: false};
    }
    render() {
        return (
            <div className='Main_Header' onResize={this.props.adjustHeader}>
                <LargeHeader />
                <div className='mobile_header_menu'>
                    <div className='mobile_header_menu_links'>
                        <NavLink to='/'><span>Home</span></NavLink>
                        <NavLink to='/about'><span>About</span></NavLink>
                        <NavLink to='/contact'><span>Contact</span></NavLink>
                        <NavLink to='/faqs'><span>FAQ</span></NavLink>
                        <NavLink to='/about'><span>About</span></NavLink>
                        <NavLink to='/pictures'><span>Pictures</span></NavLink>
                        <NavLink to='/videos'><span>Videos</span></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

// Border Description (Contains header with pseudo element border and a description)
// Contains title and content props for header and description 
// Work in Progress... might need to add additional props for differing header lengths
function BorderDescription(props) {
    const header = props.title;
    const content = props.content;
    
    if (props.direction == 'left') {
        return (
            <div className='borderDescription' direction='left'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        );
    } else {
        return (
            <div className='borderDescription' direction='right'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        );
    }
}

// Image Components (Will be used primarily for Landing Pages, my contain a background blob)
// Add image source in 'img' attribtue, blobs are optional.

function LargeImage(props) {
    const image = props.img;

    return (
        <div>
            <img className='largeImage' src={image} />
        </div>
    );
}

// Image and Description Component (Mainly for Landing Pages)
// Direction is required ('ltr' == text left, image right --- 'rtl' == image left, text right)

function ImageDescription(props) {
    const title = props.title;
    const description = props.description;
    const image = props.image;
    const direction = props.direction;

    if (direction == 'ltr') {
        return (
            <div className='ImageDescription' type='ltr'>
                <div position='left'>
                    <div className='ImageDescriptionContent'>
                        <BorderDescription title={title} content={description} direction='left'/>
                    </div>
                </div>
                <div position='right'>
                    <div className='ImageDescriptionContent'>
                        <LargeImage img={image} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='ImageDescription' type='rtl'>
                <div position='left'>
                    <div className='ImageDescriptionContent' direction='right'>
                        <LargeImage img={image} />
                    </div>
                </div>
                <div position='right'>
                    <div className='ImageDescriptionContent'>
                        <BorderDescription title={title} content={description} direction='right' />
                    </div>
                </div>
            </div>
        );
    }
}

// Object description (or adding props such as carousels, images, etc (will likely replace 'imageDescription'))
function ObjectDescription(props) {
    const title = props.title;
    const description = props.description;
    const direction = props.direction;
    let type = props.type ? props.type : null;

    if (direction == 'ltr') {
        return (
            <div className='ImageDescription' type='ltr'>
                <div position='left'>
                    <div className='ImageDescriptionContent'>
                        <BorderDescription title={title} content={description} direction='left'/>
                    </div>
                </div>
                <div position='right'>
                    <div className='ImageDescriptionContent'>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='ImageDescription' type='rtl'>
                <div position='left'>
                    <div className='ImageDescriptionContent' direction='right'>
                        {props.children}
                    </div>
                </div>
                <div position='right'>
                    <div className='ImageDescriptionContent'>
                        <BorderDescription title={title} content={description} direction='right' />
                    </div>
                </div>
            </div>
        );
    }
}

// Image carousel Component

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transform_index: 600,
            image_info: [
            ]
        };
    }

    moveCarousel(evt) {
        evt.preventDefault();

        let navButtons = Array.from(document.querySelectorAll('.carouselNavButton'));
        navButtons.forEach(button => button.children[0].style.background = '#DBDBDB');
        
        let carouselImages = document.querySelector('.carouselImages');

        carouselImages.style.transform = `translateX(${evt.target.getAttribute('index')}px)`;
        evt.target.style.background = '#ABABAB';
    }

    render() {
        let images = this.props.images; 
        let imgIndex, navIndex = 600;
        const displayNavButtons = images.map(image => {
            return (
                <div className='carouselNavButton'><div onClick={e => this.moveCarousel(e)} index={navIndex -= 600}></div></div>
            )
        }
        );
        const displayImages = images.map(image => {
            return (<div className='carouselImage' index={imgIndex -= 600}>
                <img src={require(`${image}`)} />
            </div>);
        });
        return (
            <div className='Carousel'>
                <div className='carouselImageWrapper'>
                    <div className='carouselImages'>
                        {displayImages}
                    </div>
                </div>
                <div className='carouselNavigation'>
                    <div className='carouselNavigationWrap'>
                        {displayNavButtons}
                    </div>
                </div>
            </div>
        )
    }
}

// Cert Grid Component 

class CertGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let certImgs = this.props.images;
        const displayCerts = certImgs.map(img => 
            <div className='cert'><div className='certContent'><img src={require(`${img}`)} /></div></div>
        );
        return (
            <div className='CertGrid'>
                {displayCerts}
            </div>
        )
    }
}
// Centered Text Block (Mainly used for Landing Pages)
// Requires 'header' and 'content' props

function CenteredTextBlock(props) {
    let type = props.type;
    return (
        <div className='CenteredTextBlock' type={type}>
            <h1 className='header_text centerTextAlign'>{props.header}</h1>
            <p className='description_text centerTextAlign'>{props.content}</p>
        </div>
    );
}

function IconDescription(props) {
    let icon = props.svg;
    let header = props.header;
    let content = props.content;
    return (
        <div className='iconDescription'>
            <div section='icon'>
                <img src={icon} />
            </div>
            <div section='description'>
                <h3>{header}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}

// Footer 

function Footer() {
    return (
        <div className='FooterWrapper'>
        <div className='Footer'>
            <div className='footerContent'>
                <div className='footerSiteInfo'>
                    <h2>Machado Air</h2>
                    <address>2219 Broadview Dr, Glendale CA 91208</address>
                    <small>Air Duct Cleaning Company Division of Machado Environmental Corporation</small>
                    <a>Site Map</a>
                </div>
                <div className='footerSocialLinks'>
                    <div>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.30181 0H29.1667C30.0917 0 30.828 0.73125 30.828 1.65V28.35C30.828 29.25 30.0917 30 29.1667 30H21.464V18.375H25.3908L25.9761 13.8563H21.464V10.9688C21.464 9.65625 21.8416 8.75625 23.7295 8.75625H26.146V4.70625C25.7307 4.65 24.2959 4.5375 22.6345 4.5375C19.1419 4.5375 16.7631 6.6375 16.7631 10.5188V13.8563H12.8174V18.375H16.7631V30H2.30181C1.85944 30 1.4349 29.8268 1.12034 29.5179C0.805768 29.209 0.626553 28.7893 0.621582 28.35V1.65C0.621582 0.73125 1.37674 0 2.30181 0Z" fill="#eee"/>
                    </svg>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.3165 3.56363C29.2057 4.14942 27.9969 4.57102 26.7517 4.73522C28.0445 3.79633 29.0125 2.31303 29.4743 0.563627C28.2613 1.44583 26.9323 2.06444 25.5465 2.39203C24.9673 1.63505 24.2668 1.032 23.4886 0.620465C22.7104 0.208931 21.8712 -0.00227123 21.0234 1.84189e-05C17.5929 1.84189e-05 14.834 3.39942 14.834 7.57102C14.834 8.15682 14.8921 8.74262 14.9864 9.30623C9.84978 8.97782 5.26854 5.97783 2.22285 1.38463C1.66789 2.54343 1.37708 3.86285 1.38066 5.20564C1.38066 7.83285 2.47333 10.1494 4.13957 11.5118C3.15763 11.4646 2.19868 11.1346 1.34073 10.5488V10.642C1.34073 14.321 3.46799 17.3698 6.30313 18.071C5.7708 18.2401 5.22319 18.3265 4.6732 18.3284C4.27025 18.3284 3.88909 18.2796 3.50429 18.213C4.2884 21.213 6.57176 23.392 9.29074 23.463C7.16348 25.5 4.49895 26.6982 1.60573 26.6982C1.08662 26.6982 0.607437 26.676 0.110107 26.605C2.8545 28.7574 6.11073 30 9.61745 30C21.0016 30 27.2309 18.4704 27.2309 8.46303C27.2309 8.13463 27.2309 7.80623 27.2128 7.47782C28.418 6.39942 29.4743 5.06362 30.3165 3.56363Z" fill="#eeeeee"/>
                    </svg>
                    </div>
                </div>
                <div className='footerLinks'>
                    <div>
                        <NavLink to='/'><span>Home</span></NavLink>
                        <NavLink to='/commerical'><span>Commercial</span></NavLink>
                        <NavLink to='/residential'><span>Residential</span></NavLink>
                        <NavLink to='/dryer'><span>Dryer Vent</span></NavLink>
                        <NavLink to='/about'><span>About</span></NavLink>
                        <NavLink to='/articles'><span>Articles</span></NavLink>
                        <NavLink to='/videos'><span>Videos</span></NavLink>
                        <NavLink to='/pictures'><span>Pictures</span></NavLink>
                        <NavLink to='/contact'><span>Contact</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
// Component Wrapper (Used for blobs) 

function ComponentWrapper(props) {
    let height = props.customHeight;
    let component_types = ['imageDesc', 'iconDesc', 'centerTextBlock'];

    let component_type = props.type;
    let comp_wrapper;
    if (props.customHeight) {
        comp_wrapper = {
            display: 'block',
            width: '100vw',
            minHeight: '500px',
            position: 'relative'
        }
    } else {
        comp_wrapper = {
            display: 'block',
            width: '100vw',
            minHeight: '500px',
            position: 'relative'
        }
    }
    return (
        <div className='Component_Wrapper' componentType={component_type} style={comp_wrapper}>
            {props.children}
        </div>
    );
}

// Image Grid Component (For landing pages)

class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let images = this.props.images;
        const listImages = images.map((image) => 
            <div className='imageGridImage' show='image'>
                <div className='imageGridImageContent' onClick={this.showDescription}>
                    <div className='front cardSide'>
                        <img src={require(`${image}`)} />
                    </div>
                    <div className='back cardSide'>
                        <div className='imageGridImageDescription'>
                            <h3>Image Title</h3>
                            <p>A small description about the image</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className='ImageGrid'>
                {listImages}
            </div>
        );
    }
}
// Landing Page Component (For main pages)

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let RenderedPage = () => {
            if (this.props.type == 'home') {
                return (
                    <div className='Landing-Page' page_type={this.props.type}> <div className='Landing-Page-Clouds'><div className='landingPageContent'><h1>{this.props.title}</h1><div className='borderButtonWrapper' type='landing'><BorderButton name='Commercial' linkPage='/commercial' /><BorderButton name='Residential' linkPage='/residential' /><BorderButton name='Dryer Vent' linkPage='/dryer'/></div></div></div></div>
                )
            } else {
                return (
                    <div className='Landing-Page' page_type={this.props.type}><div className='landingPageContent'><h1>{this.props.title}</h1><div class='borderButtonWrapper'><BorderButton name='Learn More' /><BorderButton name='Contact' /></div></div></div>
                )
            }
        }
        return (
            <div>
                {RenderedPage()}
            </div>
        )
    }
}


export {BorderButton, ContactButton, Header, MainPage, BorderDescription, LargeImage, ImageDescription, ComponentWrapper, CenteredTextBlock, IconDescription, Footer, ImageGrid, ObjectDescription, Carousel, CertGrid};
