import React from 'react';
import {CVFiles, THFiles} from './imports/importDocs';

class DocLightbox extends React.Component{
    state = {
        displayLightBox: false,
        currentDisplay:0
    }

    componentDidMount = () => {

    }

    render(){
        const {th} = this.props;
        let sources = null;
        if(th){
            sources = THFiles;
        }else{
            sources = CVFiles;
        }
        console.log(sources);
        let mob = false;
        if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
            mob = true;
            
        }
        if(window.orientation === 0  || window.orientation === 180){
            mob = true;
		}
        
        sources = Object.values(sources);

        if(this.state.displayLightBox){
            return(
                <div style={{position:'fixed', top:'0px', left:'0px', width:'100vw', height:'100vh', backgroundColor:'rgb(0,0,0,0.4)'}}>
                    <div 
                        style={{position:'fixed', top:'20px', left:'calc(100vw - 70px)', height:'56px', width:'56px', color:'blackss', fontSize:'30px', cursor:'pointer'}} 
                        onClick={() => {this.setState({displayLightBox:false})}}>
                        X
                    </div>
                    <img style={mob ? {width:'70%', marginTop:'10%', height:'auto'} : {width:'35%', marginTop:'2%', height:'auto'}} src={sources[this.state.currentDisplay]}></img>
                    <span style={{position:'fixed', left:'5%', top:'45%', height:'56px', width:'56px', cursor:'pointer'}} className='arrow left' onClick={() => {
                        const currentDisplay = this.state.currentDisplay -1;
                        if(currentDisplay >= 0){
                            this.setState({currentDisplay:currentDisplay})
                        }
                    }}></span>
                    <span style={{position:'fixed', right:'5%', top:'45%', height:'56px', width:'56px', cursor:'pointer'}} className='arrow right' onClick={() => {
                        const currentDisplay = this.state.currentDisplay +1;
                        if(currentDisplay < sources.length){
                            this.setState({currentDisplay:currentDisplay})
                        }
                    }}></span>
                </div>
            )
        }else{
            return(
                <div style={{width:'100%'}}>
                    <img style={{width:'80%', marginTop:'10%', height:'auto', cursor:'pointer'}} src={sources[0]} 
                        onClick={() => {
                            this.setState({displayLightBox:true})
                        }}
                    >
                    </img>
                    
                </div>
            )
        }
        
    }
}

export default DocLightbox;