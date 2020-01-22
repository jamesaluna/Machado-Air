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
            <div><Logo/></div>
            <div>
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
export {BorderButton, ContactButton, Header};
