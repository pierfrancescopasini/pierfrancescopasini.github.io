import React from 'react'
import bookFront from '../resources/frontLibro.png'
import bookBack from '../resources/backLibro.png'

class HomeBookPage extends React.Component {
    state = {
        back: false,
        overAmzn: false
    }

    render() {
        let mob = false;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                mob = true;
            }
        }
        return (
            <div>
                <h1 style={mob ? {} : { float: 'left', marginLeft: '56px' }}>My Book</h1>
                {mob ? <div></div> : <div style={{ height: '80px' }}></div>}
                <div style={{ color: '#f5f5f5' }}>
                    <div>
                        <div>
                            <div>
                                <div style={{height:'40px'}}></div>
                                    <div style={{margin:'auto'}}>
                                        {
                                            this.state.back ?
                                                <img
                                                    id='backBook'
                                                    onMouseOver={!this.props.mob ? () => { this.setState({ back: false }) } : () => { }}
                                                    src={bookBack}
                                                    width={mob? '70%' : '30%'}
                                                >
                                                </img>
                                                :
                                                <img
                                                    id='frontBook'
                                                    onMouseOver={!this.props.mob ? () => { this.setState({ back: true }) } : () => { }}
                                                    src={bookFront}
                                                    width={mob? '70%' : '30%'}
                                                >
                                                </img>
                                        }
                                        <div
                                            id='amznBtn'
                                            onMouseOver={!this.props.mob ? () => { this.setState({ overAmzn: true }) } : () => { }}
                                            onMouseLeave={!this.props.mob ? () => { this.setState({ overAmzn: false }) } : () => { }}
                                            onClick={() => {window.location='https://www.amazon.it/Pop-Piano-Accompagnamenti-Accompagnare-Pianoforte/dp/B087R9NJK2/'}}
                                        >AMAZON    {this.state.overAmzn ? <i style={{ border: 'solid #F5F5F5', borderWidth: '0px 1px 1px 0px' }} className='arrow right'></i> : <i></i>}
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBookPage