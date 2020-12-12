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
            color: '#F5f5f5', 
            borderRadius: '4px', 
            width: 205,
            heigth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }
    
        let styleOff = { 
            transition:'1.2s',  
            borderRadius: '4px', 
            backgroundColor: 'none', 
            width: 144,    
            heigth: '100%',            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        let styleMob = {
            transition:'1.2s',  
            borderRadius: '4px', 
            backgroundColor: 'none', 
            width: 144,    
            heigth: '100%',            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }
        
        if(this.props.home){
            styleMob.color = '#000000'
            styleMob.backgroundColor = '#f5f5f5'
            styleOff.color = '#000000'
            styleOff.backgroundColor = '#f5f5f5'
        }
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                styleOff.width = 'auto';
                styleOff.height = 'auto';
                if(window.matchMedia("(orientation: portrait)").matches){
                    styleOff.fontSize= window.innerWidth/20;
                }else{
                    styleOff.fontSize= window.innerWidth/25;
                }
                mob = true;
        }
           
        
        return(
        <Link className='lnk' to={this.props.path}
            onMouseEnter={() => {this.setState({mouseOver:true})}}
            onMouseLeave={() => {this.setState({mouseOver:false})}}
        >
        {this.state.mouseOver || mob?
        <div className='lnk' style={mob? styleMob : styleOn} >{this.props.name}        <i style={(mob && !this.props.home)?{border:' solid #F5F5F5', borderWidth: '0px 1px 1px 0px'}:{border:' solid #F5F5F5', borderWidth: '0px 1px 1px 0px'}}className="arrow right"></i> </div> 
        : <div style={styleOff}>{this.props.name}</div>
        }   
        </Link>
        )
    }
}

export default LinkItem;