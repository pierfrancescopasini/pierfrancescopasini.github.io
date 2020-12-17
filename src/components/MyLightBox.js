import React from 'react'

class MyLightBox extends React.Component {

    state = {
        overImage: false,
        overBtn: false,
        imgHeight: 0,
        imgWidth:0
    }

    render() {
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            mob = true;
        }
        
        return (
            <div onClick={() => {
                this.props.update();
            }}
                className='lightbox'
            >
                <div style={{ margin: 'auto', marginTop:'2%', position: 'relative' }}>
                        <img
                            className='lnkImage'
                            onMouseEnter={(e) => { 
                                this.setState({ overImage: true, imgHeight:e.target.height +10, imgWidth:e.target.width +10 }) 
                            }}
                            onTouchStart={()=>{window.location = this.props.link}}
                            src={this.props.mainSrc}
                            width={mob? '70%' : '33.3%'}
                            onLoad={(e) => {
                                this.setState({imgHeight:e.target.height +10, imgWidth:e.target.width +10})
                            }}
                            >
                        </img>
                    {this.state.overImage ?
                        <div
                            className='linkImageHover'
                            style={{width: this.state.imgWidth, height: this.state.imgHeight, left: window.outerWidth/2 - this.state.imgWidth/2}}
                            onMouseEnter={() => {this.setState({overBtn: true})}}
                            onMouseLeave={() => { this.setState({ overImage: false, overBtn:false }) }}
                        >
                            <div
                                className='linkImageBtn'
                                style={{marginLeft:'auto', marginRight:'auto', marginTop:this.state.imgHeight/2}}
                                onClick={() => { window.location = this.props.link }}
                            >
                                <div style={{margin:'auto'}}>
                                    <div style={{  
                                    }}>
                                    Go To Event
                                    {this.state.overBtn ? <i style={{}} className='arrow right'></i> : <i></i>}
                                    </div>
                                </div>
                           </div>
                        </div>
                        : <div></div>
                    }
                </div>
            </div>
        )
    }

}

export default MyLightBox