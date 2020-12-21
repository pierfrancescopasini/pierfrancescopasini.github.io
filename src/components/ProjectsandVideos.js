import React from 'react';
import LinkItem from './LinkItem.js';
import ScrollItem from './ScrollItem.js'
import {Link} from 'react-router-dom'

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
                height = window.screen.height*1.8;
            }
            mob = true;
        }
        return (
            <div id='videoscontactslink'>
                <Link to={'/projects'} style={{ margin: '20px', textDecoration: 'none', color:'#F5F5F5', fontSize:'24px' }} ><span>Music</span></Link>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Videos'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Events'} scroll={{ top: height*2, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
                <div style={{ margin: '20px' }} ><ScrollItem name={'Contacts'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;

//<div style={{ margin: '20px' }} ><ScrollItem name={'Books'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
//<div style={{ margin: '20px' }} ><ScrollItem name={'Spotify'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
