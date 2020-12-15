import React from 'react';
import Contacts from './homePage/Contacts.js';
import ProgressBar from './ProgressBar.js';
import ProjectsandVideos from './ProjectsandVideos.js';
import HomeProjectPage from './homePage/HomeProjectPage.js';
import HomeVideosPage from './homePage/HomeVideosPage.js';
import HomeEventsPage from './homePage/HomeEventsPage.js';
import HomeBookPage from './homePage/HomeBookPage.js';
import icon from './resources/logo.png';
import back1 from './resources/background1.jpg';
import back1mob from './resources/b1mobile.png';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

class BasicApp extends React.Component {
    state = {
        display: { display: 'none' },
        displayBar: { display: 'block' },
        displayMenu: { display: 'none' }
    }

    componentDidMount() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => { this.setState({ display: { display: 'block' }, displayBar: { display: 'none' } }) }, 1300);
        //window.addEventListener('resize', () => { this.setState({}) });
    }

    disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
    }
        
    enableScroll = () => {
        document.body.style.overflow = null;
    }

    render() {
        document.body.style.backgroundColor = '#000000'
        let height = window.innerHeight * 1.1;
        let styleH1, styleH2;
        let mob = false;
        let b1 = `url(${back1})`;
        let land = false;

        if(/iPad/i.test(navigator.userAgent)){
            if (window.matchMedia("(orientation: portrait)").matches) {
                mob = true;
            }

        }

        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                styleH1 = {
                    fontSize: window.outerWidth / 12,
                }
                styleH2 = {
                    fontSize: window.outerWidth / 18,
                }
                b1 = `url(${back1mob})`;
            } else {
                styleH1 = {
                    fontSize: window.outerWidth / 20,
                }
                styleH2 = {
                    fontSize: window.outerWidth / 25,
                }
                height = window.screen.height * 2;
                land = true;
            }
            mob = true;
        }

        return (
            <div>
                <div style={this.state.displayMenu}>
                    <div
                        className='mobMenu'
                        style={{ width: window.innerWidth, height: window.screen.height, margin: 'auto', backgroundColor: '#000000' }}
                    >
                        <div style={{ margin: 'auto', width: '100%', height: window.screen.height}}>
                            <div style={{ margin: 'auto', width: '100%', height: window.screen.height/6}}></div>
                            <div style={{ margin: 'auto', width: '100%', height: window.screen.height/2}}>
                                <ProjectsandVideos
                                    update={() => {
                                        this.enableScroll();
                                        this.setState({
                                            display: { display: 'block' },
                                            displayBar: { display: 'none' },
                                            displayMenu: { display: 'none' }
                                        })
                                    }}>
                                </ProjectsandVideos>
                                <div style={{ margin: 'auto', width: '100%', height: window.screen.height/6}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={this.state.display}>
                    <div style={{ height: height, width: '100%', margin: '0', marginRight: 'auto', marginBottom: 'auto', backgroundImage: b1 }}>
                        {mob ?
                            <header style={mob? {width: '100%', height: '10%', marginTop: '0%', marginBottom: '10%', borderRadius: '4px', background: 'none' }: { width: '100%', height: '10%', marginTop: '0%', marginBottom: '10%', marginLeft:'10%', borderRadius: '4px', background: 'none' }}>
                                <img src={icon} style={{ position: 'fixed', height: '60px', width: '60px', left: '15px', top: '15px', borderRadius: '50px', backgroundColor:'none', borderWidth:'2px', borderColor:'solid #f5f5f5' }}
                                    onClick={(e) => {
                                        this.disableScroll();
                                        window.scrollTo({ top: 0, left: 0 })
                                        if (this.state.displayMenu.display === 'block') {
                                            this.enableScroll();
                                            this.setState(
                                                {
                                                    display: { display: 'block' },
                                                    displayBar: { display: 'none' },
                                                    displayMenu: { display: 'none' }
                                                }
                                            )
                                        } else {
                                            this.setState(
                                                {
                                                    display: { display: 'block' },
                                                    displayBar: { display: 'none' },
                                                    displayMenu: { display: 'block' }
                                                }
                                            )
                                        }
                                    }} className='headerspan'></img></header>
                            :
                            <header style={{ width: '100%', height: '5%', marginTop: '0%', borderRadius: '4px', background: 'none' }}>
                                <div className='lefty' style={{ width: '33%', marginTop: '2%' }}>
                                    <span className={'headerspan'} onClick={() => { window.scrollTo({ top: window.innerHeight * 1.1 * 1, left: 0, behavior: 'smooth' }) }}>Books</span>
                                    <span className={'headerspan'} onClick={() => { window.scrollTo({ top: window.innerHeight * 1.1 * 2, left: 0, behavior: 'smooth' }) }}>Videos</span>
                                    <span className={'headerspan'} onClick={() => { window.scrollTo({ top: window.innerHeight * 1.1 * 3, left: 0, behavior: 'smooth' }) }}>Music</span>
                                    <span className={'headerspan'} onClick={() => { window.scrollTo({ top: window.innerHeight * 1.1 * 4, left: 0, behavior: 'smooth' }) }}>Events</span>
                                    <span className={'headerspan'} onClick={() => { window.scrollTo({ top: window.innerHeight * 1.1 * 5, left: 0, behavior: 'smooth' }) }}>Contacts</span>
                                </div>
                            </header>}
                        <div style={{height:'100px'}}></div>
                        <h1 style={styleH1} id="nameTitle" >Pierfrancesco Pasini</h1>
                        <h2 style={styleH2} id="musician">Musician</h2>
                    </div>
                    <div>
                        <div className='fab'
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            <i className='arrow up' style={{ marginTop: '25px', borderColor: '#f5f5f5' }}></i>
                        </div>
                        <div id='homeBooks' style={{ height: height, width: '100%', marginTop: 0, marginBottom: '0px' }}>
                            <HomeBookPage mob={mob}></HomeBookPage>
                        </div>
                        <div id='homeVideos' style={{ height: height, width: '100%', marginTop: 0, marginBottom: '0px' }}>
                            <HomeVideosPage></HomeVideosPage>
                        </div>
                        <div id='homeProjects' style={{ height: height, width: '100%', marginTop: 0, marginBottom: '0px' }}>
                            <HomeProjectPage></HomeProjectPage>
                        </div>
                        <div id='homeEvents' style={{ height: height, width: '100%', marginTop: 0, marginBottom: '0px' }}>
                            <HomeEventsPage></HomeEventsPage>
                        </div>
                    </div>
                    <hr></hr>
                    <footer style={{ width: '100%', height: '10%' }}><Contacts></Contacts></footer>
                </div>
                <div style={this.state.displayBar} ><ProgressBar progress={{ amount: 0.3, time: 10 }} styleBar={{ width: window.outerWidth / 4, height: window.outerWidth / 4 }}></ProgressBar></div>
            </div>

        )
    }
}

export default BasicApp;