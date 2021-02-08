import React from 'react';
import pieropic from './resources/bioImage.png'
import ProgressBar from './ProgressBar.js'
import iconTransparent from './resources/icon_white_transparent.png';
import { Link } from 'react-router-dom';
import DocLightbox from './DocLightbox';
import { BookFiles, CVFiles, THFiles1, THFiles2,  } from './imports/importDocs';
import texts from './resources/texts';

const userLang = navigator.language || navigator.userLanguage;

class AboutPage extends React.Component {

    state = {
        stylePage: { display: 'none' },
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            this.setState({ stylePage: { display: 'block', backgroundColor: '#FFFFFF', width: '100%', height:'500%' }, styleLoad: { display: 'none' } })
        }, 800);
        window.addEventListener('load', () => {
            this.setState({ stylePage: { display: 'block', backgroundColor: '#FFFFFF', width: '100%', height:'500%' }, styleLoad: { display: 'none' } })
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
        let mob = false;
        let fontSize = '50px';

        let margin = window.innerHeight / 1.6;
        if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
            mob = true;

        }
        if (window.orientation === 0 || window.orientation === 180) {
            mob = true;
        } else if (window.orientation === 90 || window.orientation === -90) {
            fontSize = '40px';
            margin = window.innerHeight / 1.8;
        }
        return (
            <div>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{ amount: 1, time: 10 }} styleBar={{ width: dim, height: dim }}></ProgressBar>
                </div>
                <div style={this.state.stylePage}>

                    <Link to={'/'} className='headerIcon'><img onClick={() => {

                    }} className='imghead' height='50px' src={iconTransparent}></img></Link>
                    <div style={mob ? { width: '100%', height: window.innerHeight / 2.8, backgroundSize: '100%', backgroundImage: topImg, backgroundColor: '#000000', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' } : { width: '100%', height: window.innerHeight / 1.3, backgroundSize: '100%', backgroundImage: topImg, backgroundColor: '#000000', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                        <div style={mob ? { float: 'left', marginTop: window.innerHeight / 3.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '25px' } : { float: 'left', marginTop: margin, marginLeft: '20px', color: '#F5F5F5', fontSize: fontSize }}>
                            BIO
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100%' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '100%', width: '100%', borderRadius: '4px', margin: 'auto' }}>
                            <div style={(mob || window.innerWidth < 640 ) ? { width: '80%', margin: 'auto', fontSize: '12px', marginBottom: '50px', marginTop: '50px', textAlign: 'justify' } : { width: '80%', margin: 'auto', fontSize: '20px', marginBottom: '50px', marginTop: '50px', textAlign: 'justify'  }}>
                                {(userLang === 'it-IT' || userLang === 'it' || userLang === 'IT' || userLang == 'it-it') ? texts.bio.ita : texts.bio.eng}
                        </div>
                    </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100%' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '100%', width: '100%', borderRadius: '4px', margin: 'auto', backgroundColor:'#FFFFFF'}}>
                            <div style={mob ? { width: '80%', margin: 'auto', fontSize: '12px', marginBottom: '50px' } : { width: '80%', margin: 'auto', fontSize: '20px', marginBottom: '50px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', rowGap: '3%', backgroundColor:'#FFFFFF', height:'130%' }}>
                                    <DocLightbox th1={false} th2={false} cv={true} boook={false} files={CVFiles}></DocLightbox>
                                    <DocLightbox th1={false} th2={false} cv={false} book={true} files={BookFiles}></DocLightbox>
                                    <DocLightbox th1={false} th2={true} cv={false} boook={false} files={THFiles2}></DocLightbox>
                                    <DocLightbox th1={true} th2={false} cv={false} book={false} files={THFiles1}></DocLightbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;