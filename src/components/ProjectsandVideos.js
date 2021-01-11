import React from 'react';
import LinkItem from './LinkItem.js';
import ProjectItem from './ProjectItem.js'
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
                height = window.screen.height*0.8;
            }else{
                height = window.innerHeight*1.1;
            }
            mob = true;
        }
        return (
            <div id='videoscontactslink'>
                <div style={{ margin: '20px' }} ><ProjectItem path={'/about'} name={'Bio'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem name={'Videos'} path={'/videos'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }}><ProjectItem name={'Archive'} path={null} scroll={{ top: 0, left: 0, behavior: 'smooth'}} update={() => {}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem name={'Events'} path={'/events'} scroll={{ top: height*2 , left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem path={'/projects'} name={'Releases'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem path={'/partners'} name={'Partners'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem path={'/store'} name={'Store'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={{ margin: '20px' }} ><ProjectItem name={'Contacts'} path={null} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;

//<div style={{ margin: '20px' }} ><ScrollItem name={'Books'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
//<div style={{ margin: '20px' }} ><ScrollItem name={'Spotify'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
