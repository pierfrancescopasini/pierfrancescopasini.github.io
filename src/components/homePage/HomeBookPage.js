import React from 'react'
import LinkItem from '../LinkItem.js'

class HomeBookPage extends React.Component{
    render(){
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
                mob = true;
            }
		}
        return(
            <div>
                <h1 style={mob? {} : {float:'left', marginLeft:'56px'}}>My Book</h1>
                {mob? <div></div> : <div style={{height:'100px'}}></div>}
                <div style={{color:'#f5f5f5'}}>Sezione Libro!</div>
                <div style={{marginTop:'5%'}}><LinkItem path={'/'} name={'See More'}></LinkItem></div>
            </div>
        )
    }
}

export default HomeBookPage