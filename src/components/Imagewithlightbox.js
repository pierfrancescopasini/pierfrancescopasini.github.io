import React from 'react'
import LinkTo from './LinkTo.js'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


class GridImage extends React.Component {
    state = {
        lightBox: false,
        showtoLink: false
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {
        setTimeout(() => {
            let els = document.getElementsByClassName('ril-image-current ril__image');
            for (let i = 0; i < els.length; i++) {
                els[i].addEventListener('mouseover', () => {
                    console.log('Mouse me all like I am your bitch');
                    let para = document.createElement("div");
                    var node = document.createTextNode("This is new.");
                    para.appendChild(node);
                });
            }
        }, 100)
    }

    render() {
        return (
            <div>
                <div className='imgCont'>
                    <img
                        src={this.props.src}
                        alt={''}
                        style={{ width: '95%', height: '95%' }}
                        onClick={() => {
                            this.setState({ lightBox: true });
                        }}
                    ></img>
                    {this.props.withDate ?
                        <div className='calendarIt'>
                            <div className='calendDate' style={{height:'100%'}}>
                                <div className='calendarMonth'>
                                    <div style={{margin:'auto'}}>{this.props.month}</div>
                                </div>
                                <div className='calendarDay'>
                                    <div style={{margin:'auto'}}>{this.props.day}</div>
                                </div>
                            </div>
                            <div style={{margin:'auto', width:'100%'}}>   
                                    <div      
                                        style={{margin:'auto'}}       
                                        onClick={() => {window.location=this.props.link}}
                                        className='goTo'
                                    > 
                                        <div style={{margin:'auto'}}>Go To Event</div>
                                        <div>
                                            <i className='arrow left' style={{border: 'solid #F5F5F5', borderWidth: '1px 0px 0px 1px', marginLeft:'10px', float:'center right'}}></i>
                                        </div>
                                   </div>
                            </div>
                        </div> :
                        <div></div>}
                </div>
                {this.state.lightBox ?
                    <div className='stupidme'>
                        <Lightbox
                            wrapperClassName='stupidme'
                            id='weirdshit'
                            enableZoom={false}
                            mainSrc={this.props.src}
                            style={{ width: '100%' }}
                            onCloseRequest={() => { this.setState({ lightBox: false }) }}
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