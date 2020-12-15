import React from 'react';
import VideoGrid from './VideoGrid.js'
import ProgressBar from './ProgressBar.js';

class VideosPage extends React.Component{

    state={
        styleVideos : {display:'none'},
        styleLoad : {display:'block'}
    }
    componentDidMount = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
        setTimeout(() => {        
            this.setState({ styleVideos: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
        window.addEventListener('orientationchange', () => {})
    }
    
    render(){
        let dim = window.outerWidth / 4;    
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
               dim = window.outerHeight/5;
            }
            mob = true;
        }    
        return (
            <div>
                <h1 style={mob? {} : {float:'left', marginLeft:'56px'}}>Videos</h1>
                {mob? <div></div> : <div style={{height:'100px'}}></div>}
                <div style={this.state.styleVideos}><VideoGrid nVids={100} home={false}></VideoGrid></div>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{amount: 1, time:10}} styleBar={{width:dim, height:dim}}></ProgressBar>
                </div>
            </div>
        )
    }
}

export default VideosPage;