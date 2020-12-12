import React from 'react';
import GridImage from './GridImage.js';
import LinkItem from './LinkItem.js'


class HomeEventsPage extends React.Component{
    render(){
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            mob = true;
		}
		let evArr = [2, 1, 0];
        return (
            <div>
                <h1>Events</h1>
                <div style={{width:'80%', height:'80%', margin:'auto'}}>
                    <div className='row' style={!mob? {width:'80%', margin:'auto'}: {height:'40%', margin:'auto'}}>
						{!mob? 
							evArr.map((item) => (
								<GridImage key={item.name} nElem={1} sEl={item}></GridImage>
							))
                        :  <div style={{width:'60%', margin:'auto'}}><GridImage nElem={2} sEl={0}></GridImage>
						</div>
                    }
                    </div>
                </div>
                <div style={{marginTop:'5%'}}><LinkItem path={'/events'} name={'See More'}></LinkItem></div>
            </div>
        )
    }
}

export default HomeEventsPage