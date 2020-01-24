import React from 'react';
import ReactDom from 'react-dom';
import './Components.css';

/* Icons */

import { ReactComponent as Logo } from './logo.svg';

import { ReactComponent as PhoneIcon } from './Vectors/phone.svg';


/* Components */

 // Buttons

function BorderButton(props) {
    let inner_text = props.name;
    return (
        <div className='border-button'>
            <span>{inner_text}</span>
        </div>
    );
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
    return (
        <div className='DesktopHeader'>
            <div class='DesktopHeaderLogo'><Logo/></div>
            <div class='DesktopHeaderLinks'>
                <div>
                    <div><span>Home</span><span></span></div>
                    <div><span>About</span><span></span></div>
                    <div><span>Contact</span><span></span></div>
                    <div><span>FAQ</span><span></span></div>
                    <div><span>Articles</span><span></span></div>
                    <div><span>Pictures</span><span></span></div>
                    <div><span>Videos</span><span></span></div>
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
            <div className='ImageDescription'>
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
            <div className='ImageDescription'>
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

// Component Wrapper (Used for blobs) 

function ComponentWrapper(props) {
    let comp_wrapper;
    if (props.background && props.background_position) {
        comp_wrapper = {
            display: 'block',
            width: '100vw',
            height: '600px',
            background: `url(${props.background})`,
            backgroundSize: 'contain',
            backgroundPosition: props.background_position,
            backgroundRepeat: 'no-repeat'
        }
    } else {
        comp_wrapper = {
            display: 'block',
            width: '100vw',
            height: '600px',
        }
    }
    return (
        <div style={comp_wrapper}>
            {props.children}
        </div>
    );
}

// Landing Page Component (For main pages)

function MainPage(props) {
    const buttonWrapper = {
        display: 'flex',
        width: '400px',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    const page_type = props.type;
    const title = props.title;
    return (
        <div className='Landing-Page' page_type={props.type}>
            <div className='landingPageContent'>
                <h1>{title}</h1>
                <div style={buttonWrapper}>
                    <BorderButton name='Learn More' />
                    <BorderButton name='Contact' />
                </div>
            </div>
        </div>
    );
}
export {BorderButton, ContactButton, Header, MainPage, BorderDescription, LargeImage, ImageDescription, ComponentWrapper};
