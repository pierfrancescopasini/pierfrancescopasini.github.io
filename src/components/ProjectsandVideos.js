import React from 'react';
import LinkItem from './LinkItem.js';

class ProjectandVideos extends React.Component{
    render(){
        return (
            <div id='videoscontactslink'>
                <div style={{marginBottom:'20px'}} ><LinkItem name={'About Me'} path={'/about'}></LinkItem></div>
                <div style={{marginBottom:'20px'}} ><LinkItem name={'Videos'} path={'/videos'}></LinkItem></div>
                <div style={{marginBottom:'20px'}} ><LinkItem name={'Projects'} path={'/projects'}></LinkItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;