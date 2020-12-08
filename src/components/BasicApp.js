import React from 'react';
import Contacts from './Contacts.js';
import Keyboard from './Keyboard.js';
import ProgressBar from './ProgressBar.js';
import ProjectsandVideos from './ProjectsandVideos.js';
import HomeProjectPage from './HomeProjectPage.js';
import HomeVideosPage from './HomeVideosPage.js';


class BasicApp extends React.Component{
    state = {
        display:{display:'none'},
        displayBar:{display:'block'}
    }

    componentDidMount(){
        setTimeout(() => {this.setState({display:{display:'block'}, displayBar:{display:'none'}})}, 600);
        window.addEventListener('load', () => { this.setState({display:{display:'block'}, displayBar:{display:'none'}})});
    }

    render(){
        let height = window.innerHeight*1.1;
        let styleH1, styleH2;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
                styleH1={
                    fontSize:window.outerWidth/12,
                }
                styleH2={
                    fontSize:window.outerWidth/18,
                }
            }else{
                styleH1={
                    fontSize:window.outerWidth/20,
                }
                styleH2={
                    fontSize:window.outerWidth/25,
                }
                height = window.screen.height*2;
            }
        }
        return(
            <div>
                <div style={this.state.display}>
                    <div style={{height:height, width:'100%', marginTop:0, marginBottom:0}}>
                        <h1 style={styleH1} id="nameTitle" >Pierfrancesco Pasini</h1>
                        <h2 style={styleH2} id="musician">Musician</h2>
                        <Keyboard></Keyboard>
                        <ProjectsandVideos></ProjectsandVideos>
                        <div style={{width:'100%', height:'10%'}}><Contacts></Contacts></div>   
                    </div>
                    <div style={{height: height, width:'100%', marginTop:0, marginBottom:0}}>
                        <HomeVideosPage></HomeVideosPage>
                    </div>
                    <div id='homeProjects' style={{height: height, width:'100%', marginTop:0, marginBottom:0}}>
                        <HomeProjectPage></HomeProjectPage>
                    </div>
                </div>
                <div style={this.state.displayBar}><ProgressBar progress={{amount: 0.3, time:10}} styleBar={{width:window.outerWidth/4, height:window.outerWidth/4}}></ProgressBar></div>
            </div>
            
        )
    }
}

export default BasicApp;