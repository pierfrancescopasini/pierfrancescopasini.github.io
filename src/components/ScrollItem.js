import React from 'react';

class ScrollItem extends React.Component{
    state = {
        mouseOver: false
    }
    render(){
    
        let styleOn = { 
            transition: '0.8s', 
            backgroundColor: '#F5F5F5', 
            color: '#000000', 
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
            backgroundColor: '#000000', 
            width: 144,    
            heigth: '100%',            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        let styleMob = {
            transition:'1.2s',  
            borderRadius: '10px', 
            backgroundColor: '#000000', 
            width: 144,    
            heigth: '100%',            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        if(this.props.home){
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
        return (
            <div className='lnk' to={this.props.path}
            onMouseEnter={() => {this.setState({mouseOver:true})}}
            onMouseLeave={() => {this.setState({mouseOver:false})}}
            onTouchEnd={() => {
                window.scrollTo(this.props.scroll)
                this.props.update();
            }}
            onClick={() => {
                window.scrollTo(this.props.scroll);
            }}
        >
        {this.state.mouseOver || mob?
        <div className='lnk' style={mob? styleMob : styleOn} >{this.props.name}</div> 
        : <div style={styleOff}>{this.props.name}</div>
        }   
        </div>
        )
    }
}

export default ScrollItem;