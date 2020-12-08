import React from 'react';
import {
    Link,
  } from "react-router-dom";

class LinkItem extends React.Component{
    state = {
        mouseOver: false
    }
    

    render(){
        let styleOn = { 
            transition: '0.8s', 
            backgroundColor: '#F5F5F5', 
            color: '#282c34', 
            borderRadius: '10px', 
            width: 205,
            heigth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }
    
        let styleOff = { 
            transition:'1.2s',  
            borderRadius: '10px', 
            backgroundColor: '#282c34', 
            width: 144,    
            heigth: '100%',            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                styleOff.width = 'auto';
                styleOff.height = 'auto';
                if(window.matchMedia("(orientation: portrait)").matches){
                    styleOff.fontSize= window.innerWidth/20;
                }else{
                    styleOff.fontSize= window.innerWidth/25;
                }
        }
           
        
        return(
        <Link className='lnk' to={this.props.path}
            onMouseEnter={() => {this.setState({mouseOver:true})}}
            onMouseLeave={() => {this.setState({mouseOver:false})}}
        >
        {this.state.mouseOver ?
        <div className='lnk' style={styleOn} >{this.props.name}        <i className="arrow right"></i> </div> 
        : <div style={styleOff}>{this.props.name}</div>
        }   
        </Link>
        )
    }
}

export default LinkItem;