import React from 'react';
import VideoGrid from './VideoGrid.js'
import ProgressBar from './ProgressBar.js';

class VideosPage extends React.Component{

    state={
        styleVideos : {display:'none'},
        styleLoad : {display:'block'}
    }

    reload = () => {
        window.location.reload();
    }
    
    componentDidMount = () => {
        setTimeout(() => {        
            this.setState({ styleVideos: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }
    
    render(){
        let dim = window.outerWidth / 4;    
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
               dim = window.outerHeight/5;
            }
        }    
        return (
            <div>
                <h1>Videos</h1>
                <div style={this.state.styleVideos}><VideoGrid></VideoGrid></div>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{amount: 1, time:10}} styleBar={{width:dim, height:dim}}></ProgressBar>
                </div>
            </div>
        )
    }
}

export default VideosPage;