import React from 'react';
import VideoGrid from '../VideoGrid.js';
import ProgressBar from '../ProgressBar.js';

class HomeVideosPage extends React.Component {
    state = {
        styleVid: { display: 'none'},
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        setTimeout(() => {        
            this.setState({ styleVid: { display: 'block' }, styleLoad: { display: 'none' } })
        }, 2000);
        window.addEventListener('load', () => {            
            this.setState({ stylePage: { display: 'block' }, styleLoad: { display: 'none' } })
        });
    }

    render() {
        let dim = window.outerWidth / 4;  
        let nVids = 3;
        let mob=false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){nVids = 2; mob=true}          
        return (
            <div>
                <h1 style={mob? {} : {float:'left', marginLeft:'56px'}}>Videos</h1>
                {mob? <div></div> : <div style={{height:'100px'}}></div>}
                <div style={this.state.styleVid}><VideoGrid nVids={nVids} home={true}></VideoGrid></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default HomeVideosPage;