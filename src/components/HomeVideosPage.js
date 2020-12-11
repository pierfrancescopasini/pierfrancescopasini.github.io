import React from 'react';
import VideoGrid from './VideoGrid.js';
import ProgressBar from './ProgressBar.js';

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
        return (
            <div>
                <h1>Videos</h1>
                <div style={this.state.styleVid}><VideoGrid nVids={2} home={true}></VideoGrid></div>
                <div style={this.state.styleLoad}><ProgressBar progress={{amount: 0.2, time: 1}} styleBar={{ width: dim, height: dim}} ></ProgressBar></div>
            </div>
        )
    }
}

export default HomeVideosPage;