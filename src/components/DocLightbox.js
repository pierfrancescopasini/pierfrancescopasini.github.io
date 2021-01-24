import React from 'react';

let currentDisplay = 0;
let docs = [];
let sources = null;
class DocLightbox extends React.Component{
    state = {
        displayLightBox: false,
    }


    render(){
        const {th, files} = this.props;
        //sources = null;
        sources = files;
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
                        onClick={() => {this.setState({displayLightBox:false}); currentDisplay=0;}}>
                        X
                    </div>
                    {
                        sources.map(
                            (source,index) => {
                                return(
                                index === 0 ?
                                <img key={'i_' + index } className='stupidDocs' id={'i_' + index } style={mob ? {width:'70%', margin:'auto ', marginTop:'10%', height:'auto', display:'block', } : {width:'35%', margin:'auto', marginTop:'2%', height:'auto', display:'block'}} src={source}></img>
                                : <img key={'i_' + index } className='stupidDocs' id={'i_' + index} style={mob ? {width:'70%', margin:'auto ', marginTop:'10%', height:'auto', display:'none'} : {width:'35%', margin:'auto', marginTop:'2%', height:'auto',  display:'none'}} src={source}></img>
                                )
                            }
                        )
                    }
                    <span style={{position:'fixed', left:'5%', top:'45%', height:'40px', width:'40px', cursor:'pointer'}} className='arrow left' onClick={() => {
                        let inDisp = currentDisplay -1;
                        const el1 = document.getElementById('i_' + currentDisplay);
                        const el2 = document.getElementById('i_' + (inDisp));
                        if(inDisp >= 0){
                            el1.style.display = 'none';
                            currentDisplay = inDisp;
                            el2.style.display = 'block';
                        }
                    }}></span>
                    <span style={{position:'fixed', right:'5%', top:'45%', height:'40px', width:'40px', cursor:'pointer'}} className='arrow right' onClick={() => {
                       let inDisp = currentDisplay +1;
                       const el1 = document.getElementById('i_' + currentDisplay);
                       const el2 = document.getElementById('i_' + (inDisp));
                       if(inDisp < sources.length){
                          el1.style.display = 'none';
                           currentDisplay = inDisp;
                          el2.style.display = 'block';
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