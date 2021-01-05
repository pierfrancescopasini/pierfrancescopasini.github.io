import React from 'react'
import MyLightBox from './MyLightBox.js'
import "react-image-lightbox/style.css";


class GridImage extends React.Component {
    state = {
        lightBox: false,
        showtoLink: false
    }

    update = () => {
        this.setState(
            {
                lightBox: false
            }
        )
    }

    render() {
        return (
            <div>
                <div className='imgCont'>
                    <img
                        className='eventImage'
                        src={this.props.src}
                        alt={''}
                        style={{ width: '95%', height: '95%' }}
                        onClick={() => {
                            this.setState({ lightBox: true });
                        }}
                    ></img>
                    {this.props.withDate ?
                        <div 
                            className='calendarIt'
                            onClick={() => {window.location=this.props.link}}
                        >
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
                                        className='goTo'
                                    > 
                                        <div style={{left:'auto'}}>Go To Event</div>
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
                        <MyLightBox
                            mainSrc={this.props.src}
                            update={this.update}
                            link={this.props.link}
                        >
                        </MyLightBox>
                    </div>
                    : <div></div>}
            </div>
        )
    }
}

export default GridImage

/*<Lightbox
                            wrapperClassName='stupidme'
                            id='weirdshit'
                            enableZoom={false}
                            mainSrc={this.props.src}
                            style={{ width: '100%' }}
                            onCloseRequest={() => { this.setState({ lightBox: false }) }}
                            toolbarButtons={
                                [(<LinkTo link={this.props.link} name={'Go To Event'}></LinkTo>)]}
                        >
                        </Lightbox>*/