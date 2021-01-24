import React from 'react';
import ProjectItem from './ProjectItem.js'

class ProjectandVideos extends React.Component {
    state = {
        archive:false
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
                <div disabled={this.state.archive} style={this.state.archive ? { margin:'20px', opacity:0.1} :{ margin: '20px' }} ><ProjectItem path={'/about'} name={'Bio'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={this.state.archive ? { margin:'20px', opacity:0.1} :{ margin: '20px' }} ><ProjectItem name={'Videos'} path={'/videos'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
                <div    onClick={() => {
                        setTimeout(() => {this.state.archive ? 
                            this.setState({archive:false})
                            : this.setState({archive:true});}, 100)
                        }} style={this.state.archive ? {margin:'20px', opacity: 0.3} : { margin: '20px' }}><ProjectItem name={'Archive'} path={null} scroll={{ top: 0, left: 0, behavior: 'smooth'}} update={() => {}} 
                     >
                    </ProjectItem>
                </div>
                {this.state.archive && 
                    (<div>
                        <div style={{ margin: '20px' }} ><ProjectItem name={'Events'} path={'/events'} scroll={{ top: height*2 , left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
                        <div style={{ margin: '20px' }} ><ProjectItem path={'/projects'} name={'Releases'} update={() => {this.props.update()}}></ProjectItem></div>
                        <div style={{ margin: '20px', marginBottom: '30px' }} ><ProjectItem path={'/partners'} name={'Partners'} update={() => {this.props.update()}}></ProjectItem></div>
                    </div>)
                }
                <div style={this.state.archive ? { margin:'20px', opacity:0.1} :{ margin: '20px' }} ><ProjectItem path={'/store'} name={'Store'} update={() => {this.props.update()}}></ProjectItem></div>
                <div style={this.state.archive ? { margin:'20px', opacity:0.1} :{ margin: '20px' }} ><ProjectItem name={'Contacts'} path={null} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ProjectItem></div>
            </div>
        )
    }
}

export default ProjectandVideos;

//<div style={{ margin: '20px' }} ><ScrollItem name={'Books'} scroll={{ top: height*1, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
//<div style={{ margin: '20px' }} ><ScrollItem name={'Spotify'} scroll={{ top: height*3, left: 0, behavior: 'smooth'}} update={() => {this.props.update()}}></ScrollItem></div>
