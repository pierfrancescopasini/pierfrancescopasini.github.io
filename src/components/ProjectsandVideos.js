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
        let height = window.innerHeight*1.135;
        let mob = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(!window.matchMedia("(orientation: portrait)").matches){
                height = window.screen.height*2;
            }
            mob = true;
        }
        return (
            <div id='videoscontactslink'>
                <div style={{ marginBottom: '20px' }} ><LinkItem name={'About Me'} path={'/about'}></LinkItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Videos'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}}></ScrollItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Spotify'} scroll={mob?{ top: height*2.1, left: 0, behavior: 'smooth'} : { top: height*2, left: 0, behavior: 'smooth'}}></ScrollItem></div>
                <div style={{ marginBottom: '20px' }} ><ScrollItem name={'Events'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}}></ScrollItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;