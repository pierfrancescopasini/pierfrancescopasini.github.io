import React from 'react'


class GridImage extends React.Component{
    state = {
        mouseOver: false
    }

    render(){        
        return (
            <div 
            style={this.state.mouseOver?
                  {width:window.innerWidth/8, height:'5%', color:'#282c34', borderRadius:'10px', backgroundColor:'#f5f5f5', left:0, right:0, transition:'0.5s'}
                  : {width:window.innerWidth/10, height:'5%', color:'#282c34', borderRadius:'10px', backgroundColor:'#f5f5f5', left:0, right:0, transition:'0.5s'}
            }
            onClick={() => {window.location=this.props.link}}
            onMouseEnter={() => {this.setState({mouseOver:true})}}
            onMouseLeave={() => {this.setState({mouseOver:false})}}
           >
            Go To Event {this.state.mouseOver && <i className="arrow right"></i>}
            </div>
        )
    }
}

export default GridImage