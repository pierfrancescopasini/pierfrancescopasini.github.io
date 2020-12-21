import React from 'react';
import YouTube from 'react-youtube';
import LinkItem from './LinkItem.js';
import InfiniteScroll from 'react-infinite-scroll-component';



class VideoGrid extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', () => { });
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
                    width: '' + window.innerWidth*0.9,
                    height: '' + window.innerWidth*0.44,
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

        let links = [
            { text: 'Mecna', link: 'LJtOZH701ZI' },
            { text: 'ChiamamiFaro', link: 'nmRxDltsFZY' },
            { text: 'Carolina', link: 'HzTJkXgs44c' },
            { text: 'Carolina', link: 'Lex3FXEpr0Y' },
        ]

        links = links.slice(0, this.props.nVids);
        let id = 'videoGrid';
        if(this.props.home){
            id = 'videoGridHome';
        }
        if(mob){
            id = 'videoGridMob';
        }


        return (
            <div>
           {
               !this.props.home && !mob?
               <div
                id="videoScroll"
                style={{
                    width: window.innerWidth,
                    margin: 'auto',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
        <InfiniteScroll
            dataLength={links.length}
            next={this.fetchMoreData}
            style={!mob? { display: 'flex', flexDirection: 'row'}: {display: 'flex', flexDirection: 'column'}}//To put endMessage and loader to the top.
            inverse={true} //
            hasMore={true}
            scrollableTarget="scrollableDiv"
        >
            {
                links.map((item) =>
                    (<div key={item.link} style={{height:'80%', width:'90%', margin:'auto'}}>
                        <YouTube
                            className='customYT'
                            videoId={item.link}
                            opts={opts}
                            >
                        </YouTube>
                    </div>)
                )
            }
        </InfiniteScroll>
        </div> :
        <div id={id}>
            {
                links.map((item) =>
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
                        : <div className='fab' style={{}} onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'})}}><i class='arrow up' style = {{marginTop:25, borderColor:'#f5f5f5'}}></i></div>
                    }
                </div>
            </div>
        )
    }
}

export default VideoGrid;