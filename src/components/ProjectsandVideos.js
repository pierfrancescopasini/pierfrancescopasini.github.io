import React from 'react';
import LinkItem from './LinkItem.js';
import ScrollItem from './ScrollItem.js'

class ProjectandVideos extends React.Component {
    state = {
        mouseOverVideos: false,
        mouseOverSpotify: false,
        mouseOverAbout: false
    }
    render() {
        let height = window.innerHeight;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(!window.matchMedia("(orientation: portrait)").matches){
                height = window.screen.height*2;
            }
        }
        return (
            <div id='videoscontactslink'>
                <div style={{ marginBottom: '20px' }} ><LinkItem name={'About Me'} path={'/about'}></LinkItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Videos'} scroll={{ top: height*1.1, left: 0, behavior: 'smooth'}}></ScrollItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Spotify'} scroll={{ top: height*2.35, left: 0, behavior: 'smooth'}}></ScrollItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Events'} scroll={{ top: height*3.35, left: 0, behavior: 'smooth'}}></ScrollItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;