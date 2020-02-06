import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import ReactDom from 'react-dom';
import './Components.css';
import Articles from './articles.json';
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
        this.state = {
            isMobile: false,
            headerStyling: {
                background: 'transparent'
            }
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.adjustHeader);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.adjustHeader);
    }
    adjustHeader = () => {
        let h = window.innerHeight - 200;
        if (window.scrollY >= h) {
            this.setState((state, props) => ({
                headerStyling: {
                    background: 'var(--primary-color)'
                }
            }));
        } else {
            this.setState((state, props) => ({
                headerStyling: {
                    background: 'transparent'
                }
            }))
        }
    }
    render() {
        return (
            <div className='Main_Header' style={this.state.headerStyling}>
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
                <div>
                    <h1>{props.title}</h1>
                </div>
                <p>{props.content}</p>
            </div>
        );
    } else {
        return (
            <div className='borderDescription' direction='right'>
                <div>
                    <h1>{props.title}</h1>
                </div>
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
            current_index: 0
        };
    }

    moveCarousel(evt) {
        evt.preventDefault();
        
        let type = evt.target.getAttribute('type');
        let imageCount = Array.from(document.querySelectorAll('.carouselImage')).length;
        let carouselImages = document.querySelector('.carouselImages');

        if (type == 'prev') {
            if (this.state.current_index < 0) {
                this.setState({
                    current_index: this.state.current_index += 600
                });
                carouselImages.style.transform = `translateX(${this.props.current_index}px)`;
            } 
        } else if (type == 'next') {
            if (this.state.current_index > ((imageCount * -600) + 600) || this.state.current_index == 0) {
                this.setState({
                    current_index: this.state.current_index -= 600
                });
                carouselImages.style.transform = `translateX(${this.props.current_index}px)`;
            }
        }
    }

    render() {
        let images = this.props.images; 
        let imgIndex, navIndex = 600;
        const displayImages = images.map(image => {
            return (<div className='carouselImage' index={imgIndex -= 600}>
                <img src={require(`${image}`)} />
            </div>);
        });
        let carouselTransform = {
            transform: `translateX(${this.state.current_index}px)`,
            transition: '0.2s all ease'
        }
        return (
            <div className='Carousel'>
                <div className='carouselNavigation'>
                    <div className='carouselNavigationWrap'>
                        <div>
                            <img src={require('./Vectors/prev_buttonsvg.svg')} onClick={e => this.moveCarousel(e)} type='prev' />
                        </div>
                        <div>
                            <img src={require("./Vectors/next_buttonsvg.svg")} onClick={e => this.moveCarousel(e)} type='next' />
                        </div>
                    </div>
                </div>
                <div className='carouselImageWrapper'>
                    <div className='carouselImages' style={carouselTransform}>
                        {displayImages}
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

// Service Area Component (For landing page) 

class ServiceArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: 'https://www.google.com/maps/d/u/1/embed?mid=1zY5DzzaVSRXMaRDrV0wk0PYecuojsZde'
        };
    }
    changeMap(evt) {
        evt.preventDefault();
        let iconFor = evt.target.getAttribute('iconFor');
        let src;
        switch(iconFor) {
            case 'dryer' :
                src = "https://www.google.com/maps/d/u/1/embed?mid=1Cx8acQztSiGWafmzGjhpj-OKaEduetY5";
                break;
            case 'residential' :
                src = "https://www.google.com/maps/d/u/1/embed?mid=1vblrFH2zvBlOTbkIh-M-dhUUWwT_WFGo";
            case 'commercial' :
                src = "https://www.google.com/maps/d/u/1/embed?mid=1zY5DzzaVSRXMaRDrV0wk0PYecuojsZde";
                break;
        }
        this.setState({
            map: src
        });
    }
    render() {
        return (
            <div className='ServiceArea'>
                <div className='service_area_header'><h3>Service Area</h3></div>
                <div className='service_area_type'>
                    <div>
                        <img iconFor='dryer' onClick={e => this.changeMap(e)} src={require('./Vectors/dryer.svg')} />
                        <img iconFor='residential' onClick={e => this.changeMap(e)} src={require('./Vectors/home.svg')} />
                        <img iconFor='commercial' onClick={e => this.changeMap(e)} src={require('./Vectors/commercial_building.svg')} />
                    </div>
                </div>
                <div className='service_area_map'>
                    <iframe id='contact-map' src={this.state.map}  width='100%' height='500'></iframe>
                </div>
            </div>
        );
    }
}

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const background = this.props.background;
        const articleStyling = {
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        return (
            <div className='article' style={articleStyling}>
                <div className='article_title'>
                    <h4>{this.props.title}</h4>
                </div>
                <div className='article_description'>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

// Articles Component 

class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{name: 'popular', hasLoaded: false}],
            currentArticles: [],
            indexSize: 375,
            currentTransform: 0,
            current_index: 0
        }
    }
    nextArticle() {
        let displayed_articles_length = this.state.currentArticles.length - 1;
        if (this.state.current_index < displayed_articles_length) {
            this.setState({
                currentTransform: this.state.currentTransform -= this.state.indexSize,
                current_index: this.state.current_index += 1
            });
        }
    }
    prevArticle() {
        if (this.state.current_index > 0) {
            this.setState({
                currentTransform: this.state.currentTransform += this.state.indexSize,
                current_index: this.state.current_index -= 1
            });
        }
    }

    async loadSelectedArticles(evt) {
        evt.preventDefault();

        let categoryName = evt.target.getAttribute('name');

        for (let cat of this.state.categories) {
            if (cat.name == categoryName) {
                return;
            }
        }
        let category = {
            name: categoryName,
            hasLoaded: false
        }

        await this.setState((state, props) => ({
            categories: [...this.state.categories, category]
        }));
        this.loadArticles();
    }
    loadArticles() {
        let allArticles = [];
        this.state.categories.forEach(category => {
            if (category.hasLoaded == false) {
                let displayedArticles;
                switch(category.name) {
                    case 'popular' : 
                        displayedArticles = Articles.popular;
                    break;
                    case 'understanding_mold' :
                        displayedArticles = Articles.understanding_mold;
                    break;
                    case 'iaq' :
                        displayedArticles = Articles.iaq;
                    break;
                    case 'tails_from_the_field' :
                        displayedArticles = Articles.tails_from_the_field;
                    break;
                    case 'other_topics' :
                        displayedArticles = Articles.other_topics;
                    break;
                    default :
                        displayedArticles = Articles.popular;
                }
                displayedArticles.forEach(article => {
                    allArticles.push(article);
                });
                category.hasLoaded = true;
            }
        }); 
        this.setState((state, props) => ({
            currentArticles: [...this.state.currentArticles, ...allArticles] 
        }));
    }
    componentDidMount() {
        this.loadArticles();
    }
    render() {
        let articlePositionStyling = {
            transform: `translateX(${this.state.currentTransform}px)`,
            transition: '0.2s all ease-in-out'
        }
        return (
            <div className='ArticlesComponent'>
                <div className='articles_component_selection'>
                    <div className='wrap'>
                        <div id='title'>
                            <h3>View Our Articles</h3>
                        </div>
                        <div id='categories'>
                            <div class='category-wrapper'>
                                <label class='category'>Popular&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' name='popular' class='category-checkbox' onClick={e => this.loadSelectedArticles(e)}/>
                                    <span class='checkbox-checkmark'></span>
                                </label>
                                <label class='category'>Understanding Mold&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' name='understanding_mold' class='category-checkbox' onClick={e => this.loadSelectedArticles(e)}/>
                                    <span class='checkbox-checkmark'></span>
                                </label>
                                <label class='category'>IAQ&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' name='iaq' class='category-checkbox' onClick={e => this.loadSelectedArticles(e)}/>
                                    <span class='checkbox-checkmark'></span>
                                </label>
                                <label class='category'>Tails from the Field&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' name='tails_from_the_field' class='category-checkbox' onClick={e => this.loadSelectedArticles(e)}/>
                                    <span class='checkbox-checkmark'></span>
                                </label>
                                <label class='category'>Other Topics&nbsp;&nbsp;&nbsp;
                                    <input type='checkbox' name='other_topics'class='category-checkbox' onClick={e => this.loadSelectedArticles(e)}/>
                                    <span class='checkbox-checkmark'></span>
                                </label>
                            </div>
                        </div>
                        <div id='description'>
                            <p>This is a description for the article. This is additional text for the preview because there will probably be a lot more text than this.</p>
                        </div>
                    </div>
                </div>
                <div className='articles_component_display'>
                    <div className='view'>
                        <div className='view_content'>
                            <div className='articles' style={articlePositionStyling}>
                                {this.state.currentArticles.map(article => <Article title={article.name} description={article.description} background={require(`${article.preview}`)} />)}
                            </div>
                        </div>
                        <div class='next-button' onClick={this.nextArticle.bind(this)}>
                            <img src={require('./Vectors/next_buttonsvg.svg')} />
                        </div>
                        <div class='prev-button' onClick={this.prevArticle.bind(this)}>
                            <img src={require('./Vectors/prev_buttonsvg.svg')} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Contact Grid 

class ContactGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='ContactGrid'>
                <div className='contact_grid_block'>
                    <div className='contact_grid_block_content'>
                        <div>
                            <svg width="47" height="62" viewBox="0 0 47 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 0C10.5079 0 0 9.703 0 21.7C0 37.975 23.5 62 23.5 62C23.5 62 47 37.975 47 21.7C47 9.703 36.4922 0 23.5 0ZM6.71427 21.6999C6.71427 13.1439 14.2343 6.19987 23.5 6.19987C32.7657 6.19987 40.2857 13.1439 40.2857 21.6999C40.2857 30.6279 30.6171 43.9889 23.5 52.3279C16.5171 44.0509 6.71427 30.5349 6.71427 21.6999ZM15.1071 21.7005C15.1071 17.4202 18.8648 13.9505 23.5 13.9505C26.4985 13.9505 29.2692 15.4276 30.7684 17.8255C32.2677 20.2234 32.2677 23.1776 30.7684 25.5755C29.2692 27.9734 26.4985 29.4505 23.5 29.4505C18.8648 29.4505 15.1071 25.9807 15.1071 21.7005Z" fill="#283B5A"/>
                            </svg>
                            <span>2219 Broadview Dr, Glendale CA 91208</span>
                        </div>
                    </div>
                </div>
                <div className='contact_grid_block'>
                    <div className='contact_grid_block_content'>
                        <div>
                            <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M45 5.08333C45 2.2875 42.975 0 40.5 0H4.5C2.025 0 0 2.2875 0 5.08333V35.5833C0 38.3792 2.025 40.6667 4.5 40.6667H40.5C42.975 40.6667 45 38.3792 45 35.5833V5.08333ZM40.5 5.08327L22.5 17.7916L4.5 5.08327H40.5ZM22.5 22.8751L4.5 10.1667V35.5834H40.5V10.1667L22.5 22.8751Z" fill="#283B5A"/>
                            </svg>
                            <span>info@machadoair.com</span>
                        </div>
                    </div>
                </div>
                <div className='contact_grid_block'>
                    <div className='contact_grid_block_content'>
                        <div>
                            <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45833 0H11.0625C12.4146 0 13.5208 1.16704 13.5208 2.59342C13.5208 5.8352 14.0125 8.94731 14.9221 11.8519C15.1925 12.7596 14.9958 13.7711 14.3075 14.4972L8.89917 20.2028C12.4392 27.5422 18.1425 33.533 25.0996 37.2934L30.5079 31.5879C30.9996 31.0951 31.6142 30.8358 32.2533 30.8358C32.4992 30.8358 32.7696 30.8617 33.0154 30.9655C35.7687 31.925 38.7433 32.4437 41.7917 32.4437C43.1437 32.4437 44.25 33.6108 44.25 35.0371V44.0882C44.25 45.5146 43.1437 46.6816 41.7917 46.6816C18.7079 46.6816 0 26.9457 0 2.59342C0 1.16704 1.10625 0 2.45833 0ZM8.7025 5.18716C8.85 7.4953 9.21875 9.75158 9.80875 11.9041L6.85875 15.0162C5.85083 11.9041 5.21167 8.61048 4.99042 5.18716H8.7025ZM32.9417 36.3599C35.0313 36.9823 37.17 37.3713 39.3333 37.527V41.3912C36.0883 41.1577 32.9663 40.4835 29.9917 39.4461L32.9417 36.3599Z" fill="#283B5A"/>
                            </svg>
                            <span>(800) 358-3828</span>
                        </div>
                    </div>
                </div>
                <div className='contact_grid_block'>
                    <div className='contact_grid_block_content'>
                        <div>
                            <svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3078 8.5166H36.2682C37.2067 8.5166 37.9674 7.88698 37.9674 7.11035C37.9674 6.33373 37.2067 5.7041 36.2682 5.7041H28.3078C27.3694 5.7041 26.6086 6.33373 26.6086 7.11035C26.6086 7.88698 27.3693 8.5166 28.3078 8.5166Z" fill="#283B5A"/>
                                <path d="M28.3078 14.1553H44.0789C45.0173 14.1553 45.7781 13.5256 45.7781 12.749C45.7781 11.9724 45.0173 11.3428 44.0789 11.3428H28.3078C27.3694 11.3428 26.6086 11.9724 26.6086 12.749C26.6086 13.5256 27.3693 14.1553 28.3078 14.1553Z" fill="#283B5A"/>
                                <path d="M53.0156 18.5725V2.59819C53.0156 1.16559 51.6072 0 49.8761 0H22.5106C20.7795 0 19.3711 1.16559 19.3711 2.59819V18.5725C18.0895 18.7887 16.951 19.3323 16.0859 20.0916C14.949 19.0936 13.3389 18.4688 11.5547 18.4688H6.23047C2.79499 18.4688 0 20.7818 0 23.625V42.8438C0 45.6869 2.79499 48 6.23047 48H11.5547C13.3389 48 14.949 47.3752 16.0859 46.3772C17.2228 47.3752 18.833 48 20.6172 48H51.7695C55.205 48 58 45.6869 58 42.8438V23.625C58 21.1349 55.856 19.0516 53.0156 18.5725ZM49.6172 2.8125V18.4688H22.7695V2.8125H49.6172ZM14.3867 42.8438C14.3867 44.1361 13.1163 45.1875 11.5547 45.1875H6.23047C4.66889 45.1875 3.39844 44.1361 3.39844 42.8438V23.625C3.39844 22.3327 4.66889 21.2812 6.23047 21.2812H11.5547C13.1163 21.2812 14.3867 22.3327 14.3867 23.625V42.8438ZM54.6016 42.8438C54.6016 44.1361 53.3311 45.1875 51.7695 45.1875H20.6172C19.0556 45.1875 17.7852 44.1361 17.7852 42.8438V23.625C17.7852 22.3327 19.0556 21.2812 20.6172 21.2812H51.7695C53.3311 21.2812 54.6016 22.3327 54.6016 23.625V42.8438Z" fill="#283B5A"/>
                                <path d="M28.2637 26.2031H25.998C25.0596 26.2031 24.2988 26.8327 24.2988 27.6094C24.2988 28.386 25.0596 29.0156 25.998 29.0156H28.2637C29.2021 29.0156 29.9629 28.386 29.9629 27.6094C29.9629 26.8327 29.2021 26.2031 28.2637 26.2031Z" fill="#283B5A"/>
                                <path d="M37.3262 26.2031H35.0605C34.1221 26.2031 33.3613 26.8327 33.3613 27.6094C33.3613 28.386 34.1221 29.0156 35.0605 29.0156H37.3262C38.2646 29.0156 39.0254 28.386 39.0254 27.6094C39.0254 26.8327 38.2646 26.2031 37.3262 26.2031Z" fill="#283B5A"/>
                                <path d="M46.3887 26.2031H44.123C43.1846 26.2031 42.4238 26.8327 42.4238 27.6094C42.4238 28.386 43.1846 29.0156 44.123 29.0156H46.3887C47.3271 29.0156 48.0879 28.386 48.0879 27.6094C48.0879 26.8327 47.3271 26.2031 46.3887 26.2031Z" fill="#283B5A"/>
                                <path d="M28.2637 31.8281H25.998C25.0596 31.8281 24.2988 32.4577 24.2988 33.2344C24.2988 34.011 25.0596 34.6406 25.998 34.6406H28.2637C29.2021 34.6406 29.9629 34.011 29.9629 33.2344C29.9629 32.4577 29.2021 31.8281 28.2637 31.8281Z" fill="#283B5A"/>
                                <path d="M37.3262 31.8281H35.0605C34.1221 31.8281 33.3613 32.4577 33.3613 33.2344C33.3613 34.011 34.1221 34.6406 35.0605 34.6406H37.3262C38.2646 34.6406 39.0254 34.011 39.0254 33.2344C39.0254 32.4577 38.2646 31.8281 37.3262 31.8281Z" fill="#283B5A"/>
                                <path d="M46.3887 31.8281H44.123C43.1846 31.8281 42.4238 32.4577 42.4238 33.2344C42.4238 34.011 43.1846 34.6406 44.123 34.6406H46.3887C47.3271 34.6406 48.0879 34.011 48.0879 33.2344C48.0879 32.4577 47.3271 31.8281 46.3887 31.8281Z" fill="#283B5A"/>
                                <path d="M28.2637 37.4531H25.998C25.0596 37.4531 24.2988 38.0827 24.2988 38.8594C24.2988 39.636 25.0596 40.2656 25.998 40.2656H28.2637C29.2021 40.2656 29.9629 39.636 29.9629 38.8594C29.9629 38.0827 29.2021 37.4531 28.2637 37.4531Z" fill="#283B5A"/>
                                <path d="M37.3262 37.4531H35.0605C34.1221 37.4531 33.3613 38.0827 33.3613 38.8594C33.3613 39.636 34.1221 40.2656 35.0605 40.2656H37.3262C38.2646 40.2656 39.0254 39.636 39.0254 38.8594C39.0254 38.0827 38.2646 37.4531 37.3262 37.4531Z" fill="#283B5A"/>
                                <path d="M46.3887 37.4531H44.123C43.1846 37.4531 42.4238 38.0827 42.4238 38.8594C42.4238 39.636 43.1846 40.2656 44.123 40.2656H46.3887C47.3271 40.2656 48.0879 39.636 48.0879 38.8594C48.0879 38.0827 47.3271 37.4531 46.3887 37.4531Z" fill="#283B5A"/>
                            </svg>
                            <span>(819) 382-3132</span>
                        </div>
                    </div>
                </div>
            </div>
        )
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


export {BorderButton, ContactButton, Header, MainPage, BorderDescription, LargeImage, ImageDescription, ComponentWrapper, CenteredTextBlock, IconDescription, Footer, ImageGrid, ObjectDescription, Carousel, CertGrid, ServiceArea, ArticleComponent, ContactGrid};
