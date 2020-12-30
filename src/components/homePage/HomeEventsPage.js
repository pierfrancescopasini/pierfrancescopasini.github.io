import React from 'react';
import GridImage from '../GridImage.js';
import LinkItem from '../LinkItem.js'


class HomeEventsPage extends React.Component{

    render(){
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
                mob = true;
            }
		}
		let evArr = [2, 1, 0];
        return (
            <div>
                {mob? <div style={{height:'80px'}}></div> : <div style={{height:'50px'}}></div>}
                <div style={{width:'80%', height:'80%', margin:'auto'}}>
                    <div className='row' style={!mob? {width:'80%', margin:'auto'}: {height:'40%', margin:'auto'}}>
						{!mob? 
							evArr.map((item) => (
								<GridImage key={item.name} nElem={1} sEl={item} home={true}></GridImage>
							))
                        :  <div style={{width:'60%', margin:'auto'}}>
                            <GridImage nElem={1} sEl={0} home={true}></GridImage>
                            <GridImage nElem={1} sEl={1} home={true}></GridImage>
						</div>
                    }
                    </div>
                </div>
                <div style={{marginTop:'5%'}} onClick={() => {window.scrollTo(0,0)}}><LinkItem path={'/events'} name={'More'}></LinkItem></div>
            </div>
        )
    }
}

export default HomeEventsPage