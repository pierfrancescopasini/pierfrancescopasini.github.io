import React from 'react'
import images from './importPics.js'
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
        ev = events.slice(this.props.sEl, this.props.sEl + this.props.nElem);

        return (
            <div className='column'>
                {
                    ev.map((item) => (
                        <div key={images[item.name]}>
                            <Imagewithlighbox
                                src={images[item.name]} 
                                link={item.link} 
                                style={{width:'100%'}} 
                            ></Imagewithlighbox>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default GridImage