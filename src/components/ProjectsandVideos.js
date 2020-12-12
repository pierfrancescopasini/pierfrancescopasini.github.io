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
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(!window.matchMedia("(orientation: portrait)").matches){
                height = window.screen.height*2;
            }
            mob = true;
        }
        return (
            <div id='videoscontactslink'>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Videos'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Spotify'} scroll={{ top: height*2, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Events'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Contacts'} scroll={{ top: height*4, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;