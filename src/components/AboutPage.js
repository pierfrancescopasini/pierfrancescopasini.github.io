import React from 'react';
import pieropic from './resources/background3.jpg'
import ProgressBar from './ProgressBar.js'
import iconTransparent from './resources/icon_white_transparent.png';
import {Link} from 'react-router-dom';

class AboutPage extends React.Component {

    state = {
        stylePage: { display: 'none'},
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            this.setState({ stylePage: { display: 'block', backgroundColor:'#F5F5F5', width:'100%'}, styleLoad: { display: 'none' } })
        }, 800);
        window.addEventListener('load', () => {
            this.setState({ stylePage: { display: 'block', backgroundColor:'#F5F5F5', width:'100%' }, styleLoad: { display: 'none' } })
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
        document.body.style.overflow = null;
        return (
            <div>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{ amount: 1, time: 10 }} styleBar={{ width: dim, height: dim }}></ProgressBar>
                </div>
                <div style={this.state.stylePage}>

                        <Link to={'/'} className='headerIcon'><img onClick={() => {
                            
                        }} className='imghead' height='56px'  src={iconTransparent}></img></Link>
                    <div style={{ width: '100%', height: window.innerHeight * 0.45, backgroundSize: 'cover', backgroundImage: topImg, backgroundColor:'#000000' }}>
                        <div style={{ float: 'left', marginTop: window.innerHeight * 0.3, marginLeft: '20px', color: '#F5F5F5', fontSize: '50px'}}>
                            BIO
                        </div>
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'100%'}}>
                        <div style={{display:'grid', gridTemplateColumns:'100%', width:'100%', borderRadius:'4px', margin:'auto', boxShadow:'2px 3px 0px 0px rgb(0,0,0,0.2)'}}>
                        <div>  
                            <h2 style={{color:'#000000', float:'left', marginLeft:'20px', fontWeight:'light'}}>
                                ABOUT ME
                            </h2>
                        </div>
                        <div style={{width:'80%', margin:'auto', fontSize:'20px', marginBottom:'50px'}}>
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                            Ciao a tutti, io sono Pierfrancesco Pasini. Sono molto molto bravo. Fatemi suonare con voi. Perfavore. 
                            Quando avete tempo. Se avete tempo.  IO VI AMO TUTTI
                        </div>
                        </div>                       
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'100%'}}>
                        <div style={{display:'grid', gridTemplateColumns:'100%', width:'100%', borderRadius:'4px', margin:'auto', boxShadow:'2px 3px 0px 0px rgb(0,0,0,0.2)'}}>
                        <div>  
                            <h2 style={{color:'#000000', float:'left', marginLeft:'20px', fontWeight:'light'}}>CV</h2>
                        </div>
                        <div style={{width:'80%', margin:'auto', fontSize:'20px', marginBottom:'50px'}}>
                            Hi yall, here's my CV
                        </div>
                        </div>                    
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'100%'}}>
                    <div style={{display:'grid', gridTemplateColumns:'100%', width:'100%', borderRadius:'4px', margin:'auto', boxShadow:'2px 3px 0px 0px rgb(0,0,0,0.2)'}}>
                        <div>  
                            <h2 style={{color:'#000000', float:'left', marginLeft:'20px', fontWeight:'light'}}>BACHELOR THESIS</h2>
                        </div>
                        <div style={{width:'80%', margin:'auto', fontSize:'20px', marginBottom:'50px'}}>
                            Hi yall, here's my BT
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default AboutPage;