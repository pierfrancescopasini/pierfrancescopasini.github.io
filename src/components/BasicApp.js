import React from 'react';
import Contacts from './Contacts.js';
import Keyboard from './Keyboard.js';
import ProjectsandVideos from './ProjectsandVideos.js';

class BasicApp extends React.Component{
    render(){
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
            }
        }
        return(
            <div id="centerall" className="container">
                <h1 style={styleH1} id="nameTitle" >Pierfrancesco Pasini</h1>
                <h2 style={styleH2} id="musician">Musician</h2>
                <Keyboard></Keyboard>
                <ProjectsandVideos></ProjectsandVideos>
                <Contacts></Contacts>
            </div>
        )
    }
}

export default BasicApp;