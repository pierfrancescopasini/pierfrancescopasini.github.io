import React from 'react'


class LinkTo extends React.Component{
    state = {
        mouseOver: false
    }

    render(){        
        let widthOn = window.innerWidth/8;
        let widthOff = window.innerWidth/10;
        let mob = false
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                widthOn = window.innerWidth/2;
            }
            mob = true;

        }
        return (
            <div 
            style={this.state.mouseOver || mob?
                  {width:widthOn, height:'5%', color:'#282c34', borderRadius:'10px', backgroundColor:'#f5f5f5', left:0, right:0, transition:'0.5s'}
                  : {width:widthOff, height:'5%', color:'#282c34', borderRadius:'10px', backgroundColor:'#f5f5f5', left:0, right:0, transition:'0.5s'}
            }
            onClick={() => {window.location=this.props.link}}
            onMouseEnter={() => {this.setState({mouseOver:true})}}
            onMouseLeave={() => {this.setState({mouseOver:false})}}
           >
            Go To Event {(this.state.mouseOver || mob) && <i className="arrow right"></i>}
            </div>
        )
    }
}

export default LinkTo