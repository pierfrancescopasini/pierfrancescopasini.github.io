import React from 'react';
import YouTube from 'react-youtube';
import LinkItem from './LinkItem.js';
import links from './imports/importLinkVideos.js'


console.log(links)

class VideoGrid extends React.Component {

    state = {
        currentVideo: '',
        index: 0
    }

    componentDidMount() {
        window.addEventListener('resize', () => { });
        this.setState({currentVideo:links[0].link});
    }

    render() {
        let opts = {
                width: '' + window.innerWidth*0.7,
                height: '' + window.innerWidth*0.35,
                playerVars: {
                    color: 'white',
                    autoplay: 0,
                },
            };
            if(!this.props.home){
                opts = {
                    width: '' + window.innerWidth*0.7,
                    height: '' + window.innerWidth*0.4,
                    playerVars: {
                        color: 'white',
                        autoplay: 0,
                    },
                };
            }

        let mob = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mob = true;
            if (window.matchMedia("(orientation: portrait)").matches) {
                    opts = {
                        width: '' + window.innerHeight*0.4,
                        height: '' + window.innerHeight*0.23,
                        playerVars: {
                            color: 'white',
                            autoplay: 0,
                        },
                    };
            } else {
                opts = {
                    width: '' + window.innerWidth*0.4,
                    height: '' + window.innerWidth*0.23,
                    playerVars: {
                        color: 'white',
                        autoplay: 0,
                    },
                };
            }
        }

       

        let inLinks = links.slice(0, this.props.nVids);
        let id = 'videoGrid';
        if(this.props.home){
            id = 'videoGridHome';
        }
        if(mob){
            id = 'videoGridMob';
        }


        return (
            <div 
                style={{
                    width: window.innerWidth,
                    margin: 'auto',
                }}>
           {
               !this.props.home && !mob?
               <div id="videoScroll">
                    <div style={{height:'100%', width:'90%', margin:'auto'}}>
                        <div 
                            className = 'direction'
                            onClick={() => {
                            let newIndex = (this.state.index +1)%links.length;
                            this.setState(
                                {   
                                    currentVideo: links[newIndex].link,
                                    index: newIndex
                                }
                            )}}
                            style={{ right: '2.5px', marginTop: window.innerHeight/2 -56*3}}>
                            <i 
                            style={{borderColor: '#f5f5f5', marginTop: '23px', marginLeft:'-2.5px'}} className="arrow right"></i>
                        </div>
                        <div 
                        className = 'direction'
                        onClick={() => {
                            if(this.state.index > 0){
                                let newIndex = (this.state.index -1);
                                this.setState(
                                    {   
                                        currentVideo: links[newIndex].link,
                                        index: newIndex
                                    }
                                )
                            }
                            }}
                        style={{left: '2.5px', marginTop: window.innerHeight/2 -56*3}}>
                            <i style={{borderColor: '#f5f5f5',  marginTop: '23px', marginRight:'-2.5px'}} className="arrow left"></i>
                        </div>
                        <div style={{margin:'auto'}}>
                        <YouTube
                            className='customYTHome'
                            videoId={this.state.currentVideo}
                            opts={opts}
                            >
                        </YouTube>
                        </div>
                    </div>
        </div> :
        <div id={id}>
            {
                inLinks.map((item) =>
                    (<div key={item.link} style={{height:'80%', width:'100%', margin:'auto'}}>
                        <YouTube
                            className='customYTHome'
                            videoId={item.link}
                            opts={opts}
                            >
                        </YouTube>
                    </div>)
                )
            }
            </div>
    }
            <div>
                {this.props.home ?
                        <div style={mob? { marginTop: '30%', width: '100%', height: '100%' } : { marginTop:'8%', width: '100%', height: '100%' }}><LinkItem path={'/videos'} name={'More'} home={false}></LinkItem></div>
                        : <div></div>
                    }
                </div>
            </div>
        )
    }
}

export default VideoGrid;