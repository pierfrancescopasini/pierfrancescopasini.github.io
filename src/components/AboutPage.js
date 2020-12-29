import React from 'react';
import pieropic from './resources/background3.jpg'
import ProgressBar from './ProgressBar.js'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';

class AboutPage extends React.Component {

    state = {
        stylePage: { display: 'none' },
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 800);
        window.addEventListener('load', () => {
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }

    render() {
        let dim = window.outerWidth / 4;
        let fontH = window.outerWidth / 40;
        let fontP = window.outerWidth / 50;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                fontH = window.outerWidth / 15;
                fontP = window.outerWidth / 20;
                dim = window.outerHeight / 5;
            } else {
                fontH = window.outerWidth / 25;
                fontP = window.outerWidth / 35;
            }
        }

        let topImg = `url(${pieropic})`;
        return (
            <div style={{ backgroundColor: '#F5F5F5', height:window.innerHeight }}>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{ amount: 1, time: 10 }} styleBar={{ width: dim, height: dim }}></ProgressBar>
                </div>
                <div style={this.state.stylePage}>

                        <Link to={'/'} className='headerIcon'><img onClick={() => {
                            
                        }} className='imghead' height='56px'  src={iconTransparent}></img></Link>
                    <div style={{ width: '100%', height: window.innerHeight * 0.6, backgroundSize: 'cover', backgroundImage: topImg }}>
                        <div style={{ float: 'left', marginTop: window.innerHeight * 0.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '50px' }}>
                            BIO
                        </div>
                    </div>
                    <div>
                        <h4 style={{color:'#000000'}}>
                            I play da cool music For y'all
                            Music here, music there, music everywhere
                        </h4>
                    </div>
                    <div>
                        <div>
                            <div style={{width:'100%'}}>
                                <div style={{width:'100%', }}>
                                    <div style={{ color: '#000000', textDecoration:'bold', fontSize:'30px'}}> 
                                        <h2 style={{float:'left', marginLeft: '20px', color: '#000000'}}>
                                            CV
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:'100%', height:'auto', marginBottom:'5%', float:'left'}}>
                                <hr></hr>
                                I'm piero da bu de da bu deh da bu de da bu deh
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;