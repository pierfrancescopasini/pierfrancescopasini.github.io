import React from 'react';
import YouTube from 'react-youtube';
import LinkItem from './LinkItem.js'


class VideoGrid extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', () => { });
        window.addEventListener('orientationchange', () => { setTimeout(() => { this.setState({}) }, 200) });
    }

    render() {
        let opts = {
            width: window.innerWidth / 2.5,
            height: window.innerHeight / 2,
            playerVars: {
                color: 'white',
                autoplay: 0,
            },
        };

        let mob = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mob = true;
            if (window.matchMedia("(orientation: portrait)").matches) {
                if(!this.props.home && !mob){
                    opts = {
                        width: window.innerWidth / 2.7,
                        height: window.innerHeight / 4,
                        playerVars: {
                            color: 'white',
                            autoplay: 0,
                        },
                    };
                }else{
                    opts = {
                        width: window.innerWidth / 1.5,
                        height: window.innerHeight / 4,
                        playerVars: {
                            color: 'white',
                            autoplay: 0,
                        },
                    };
                }
            } else {
                opts = {
                    width: window.innerWidth / 0.7,
                    height: window.innerHeight / 1.5,
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

        return (
            <div>
                {
                !this.props.home || !mob? 
                (<div id={mob? "videoGridMob" : "videoGrid"} style={mob? {gridRowGap:'1%'}: {}}>
                {
                    links.map((item) =>
                        (<div key={item.link}>
                            <YouTube
                                className={'customYT'}
                                videoId={item.link}
                                opts={opts}>
                            </YouTube>
                            <span
                                style={{
                                    color: '#F5F5F5',
                                    textTransform: 'uppercase'
                                }}
                            >{item.text}</span>
                        </div>)
                    )
                }
            </div>)
            : 
            <div id='videoGridMob'>
            {
                links.map((item) =>
                    (<div key={item.link}>
                        <YouTube
                            className={'customYT'}
                            videoId={item.link}
                            opts={opts}>
                        </YouTube>
                        <span
                            style={{
                                color: '#F5F5F5',
                                textTransform: 'uppercase',
                                marginBottom:'5%'
                            }}
                        >{item.text}</span>
                    </div>)
                )
            }
            </div>
            }
            <div>
                {this.props.home ?
                        <div style={mob? { marginTop: '20%', width: '100%', height: '100%' } : { marginTop: '10%', width: '100%', height: '100%' }}><LinkItem path={'/videos'} name={'See More'} home={false}></LinkItem></div>
                        : <div className='fab' style={{}} onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'})}} ><i class='arrow up' style = {{marginTop:25, borderColor:'#f5f5f5'}}></i></div>
                    }
                </div>
            </div>
        )
    }
}

export default VideoGrid;