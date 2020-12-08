import React from 'react';
import pieropic from './resources/pierpiero.jpeg'
import ProgressBar from './ProgressBar.js'
import AboutMeText from './AboutMeText.js'


class AboutPage extends React.Component{
    
    state = {
        stylePage: {display: 'none'},
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        setTimeout(() => {        
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 800);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }

    render(){ 
        let dim = window.outerWidth / 4;    
        let fontH = window.outerWidth/40;
        let fontP = window.outerWidth/50;
        let float = 'right';
        let widthP = '50%';
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
                fontH = window.outerWidth/15;
                fontP = window.outerWidth/20;
                dim = window.outerHeight/5;
            }else{
                fontH = window.outerWidth/25;
                fontP = window.outerWidth/35;
            }
        }

        return(
            <div>
                 <div style={this.state.styleLoad} id='barVid'>
                    <h1 style={{borderRadius: '10px', width:'100%', fontWeight:'500', fontSize: fontH}}>About Me:</h1>
                    <ProgressBar progress={{amount: 1, time:10}} styleBar={{width:dim, height:dim}}></ProgressBar>
                </div>
                 <div style={this.state.stylePage}>
                        <h1 style={{borderRadius: '10px', width:'100%', fontWeight:'500', fontSize: fontH}}>About Me:</h1>
                        <img style={{float:float, borderRadius: '10px', width: '40%', marginBottom:'5px'}} src={pieropic} alt={'profile'}></img>
                        <AboutMeText width={widthP} fontsize={fontP}></AboutMeText>
                </div>
            </div>
           
        )
    }
}

export default AboutPage;