import React from 'react'
import images from './importPics.js'
import Lightbox from "react-image-lightbox";
import Imagewithlighbox from './Imagewithlightbox.js'

class GridImage extends React.Component{
    state = {
        lightBox: new Set()
    }

    render(){        
        let ev = this.props.events.slice(this.props.sEl, this.props.sEl + this.props.nElem);
        return (
            <div className='column'>
                {
                    ev.map((item) => (
                        <div key={item.name}>
                            <Imagewithlighbox
                                src={images[item.name]} 
                                alt={item.link} 
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