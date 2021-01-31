import React from 'react'
import images from './imports/importPics.js'
import Imagewithlighbox from './Imagewithlightbox.js'
import {allEv} from './imports/events.js'

let events = allEv;
let derived = false;
class GridImage extends React.Component{

    deriveData = () => {
		if (!derived) {
			let date = null;
			let dateDum = null;
			try {
				for (let i = 0; i < events.length; i++) {
					console.log(events[i].date);
					dateDum = events[i].date.split('/');
					date = dateDum[1] + '/' + dateDum[0] + '/' + dateDum[2];
					date = new Date(date);
					events[i].date = date;
				}
			} catch (e) {
			}
			derived = true;
		}
    }
    
    render(){   
        this.deriveData();
		//Ordine Cronologico
		events = events.sort((a, b) => {
			if ((a.date.getFullYear() - b.date.getFullYear()) !== 0) {
				return b.date.getFullYear() - a.date.getFullYear();
			} else if ((a.date.getMonth() - b.date.getMonth()) !== 0) {
				return b.date.getMonth() - a.date.getMonth();
			} else {
				return (b.date.getDate() - a.date.getDate());
			}
        });

		let ev = [];
		
		for(let i=0; i < this.props.nElem; i++){
			let event = events[this.props.sEl + 3*i];
			if(event){
				ev.push(event);
			}
		}
	

        return (
            <div className='column'>
                {
					ev.map((item) => {
						return (
							<div key={images[item.name]}>
									<Imagewithlighbox
										src={images[item.name] !== null && typeof(images[item.name].default) ? images[item.name].default : ''} 
										link={item !== null ? item.link : ''} 
										style={{width:'100%'}} 
										withDate={this.props.home}
										day = {item !== null ? item.date.getDate() : ''}
										month={item !== null && item.date.toLocaleString('en-US', { month: 'short' })}
										year={ item !== null && item.date.getFullYear()}
									></Imagewithlighbox>
							</div>
						)
					})
                }
            </div>
        )
    }
}

export default GridImage