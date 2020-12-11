import React from 'react'
import LinkTo from './LinkTo.js'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


class GridImage extends React.Component{
    state = {
        lightBox: false,
        showtoLink: false
    }
    
    componentDidMount = () => {
            
    }

    componentDidUpdate = () => {
        setTimeout(() => {
                        let els = document.getElementsByClassName('ril-image-current ril__image');
                        for(let i=0; i < els.length; i++){
                             els[i].addEventListener('mouseover', () => {
                                 console.log('Mouse me all like I am your bitch');
                                 let para = document.createElement("div");
                                 var node = document.createTextNode("This is new.");
                                 para.appendChild(node);
                            });
                        }}, 100)
    }

    render(){        
        return (
                        <div>
                            <img
                            /*onMouseOver={(e) => {
                                if(Math.abs(e.clientX - e.target.y)  > e.target.height){
                                    if(e.clientY > e.target.y){
                                        window.scrollTo({top:e.clientY - e.target.height, behavior:'smooth'})
                                    }else{
                                        window.scrollTo({top:e.clientY + e.target.height, behavior:'smooth'})
                                    }
                                }
                                }}*/
                                src={this.props.src} 
                                alt={''} 
                                style={{width:'95%', height:'95%'}} 
                                onClick={() => {
                                    this.setState({lightBox:true});
                                }}
                            ></img>
                            {this.state.lightBox? 
                            <div className='stupidme'>
                                <Lightbox
                                    wrapperClassName='stupidme'
                                    id='weirdshit'
                                    enableZoom={false}
                                    mainSrc={this.props.src}
                                    style={{width:'100%'}}
                                    onCloseRequest={() => {this.setState({lightBox:false})}}
                                    toolbarButtons={
                                        [(<LinkTo link={this.props.link} name={'Go To Event'}></LinkTo>)]}
                                >
                                </Lightbox> 
                            </div>
                            : <div></div>}
                        </div>
        )
    }
}

export default GridImage