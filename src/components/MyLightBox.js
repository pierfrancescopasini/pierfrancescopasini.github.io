import React from 'react'

class MyLightBox extends React.Component {

    state = {
        overImage: false,
        overBtn: false
    }

    render() {
        let mob = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            mob = true;
        }
        
        let imgHeight = 0;
        let imgWidth = 0;
        return (
            <div onClick={() => {
                this.props.update();
            }}
                className='lightbox'
            >
                <div style={{ margin: 'auto', position: 'relative' }}>
                        <img
                            className='lnkImage'
                            onMouseEnter={() => { this.setState({ overImage: true }) }}
                            src={this.props.mainSrc}
                            width={mob? '70%' : '40%'}
                            onLoad={(e) => {imgHeight = e.target.height; imgWidth=e.target.width; console.log(imgHeight)}}
                            >
                        </img>
                    {this.state.overImage ?
                        <div
                            className='linkImageHover'
                            style={{}}
                            onMouseEnter={() => {this.setState({overBtn: true})}}
                            onMouseLeave={() => { this.setState({ overImage: false, overBtn:false }) }}
                        >
                            <div
                                className='linkImageBtn'
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