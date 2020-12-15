import React from 'react'
import LinkItem from '../LinkItem.js'
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
                            <div style={{ display: 'grid', gridTemplateColumns: '30% 70%' }}>
                                <div>
                                    <h3>POP PIANO ACCOMPAGNAMENTI</h3>
                                    <p>All the hits: 
                                      
                                    </p>
                                    <div style={{height:'50px'}}></div>
                                    <div 
                                        id='amznBtn'
                                            onMouseOver={() => {this.setState({overAmzn:true})}}
                                            onMouseLeave={() => {this.setState({overAmzn:false})}}
                                        >AMAZON    {this.state.overAmzn? <i style={{ border: 'solid #F5F5F5', borderWidth: '0px 1px 1px 0px' }} className='arrow right'></i>: <i></i>}</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '80%' }}>
                                    <div>
                                        {
                                            this.state.back ?
                                                <img
                                                    id='backBook'
                                                    onMouseOver={() => {
                                                        this.setState({ back: false })
                                                    }
                                                    }
                                                    src={bookBack}
                                                    width='40%'
                                                >
                                                </img>
                                                :
                                                <img
                                                    id='frontBook'
                                                    onMouseOver={() => {
                                                        this.setState({ back: true })
                                                    }
                                                    }
                                                    src={bookFront}
                                                    width='40%'
                                                >
                                                </img>
                                        }
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