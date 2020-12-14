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
            width: '' + window.innerWidth*0.4,
            height: '' + window.innerWidth*0.23,
            playerVars: {
                color: 'white',
                autoplay: 0,
            },
        };
        if(this.props.home){
            opts = {
                width: '' + window.innerWidth*0.28,
                height: '' + window.innerWidth*0.15,
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

        // YT No Lib
        //<iframe style={{ border:'0px'}} width={opts.width} height={opts.height} className='customYT' src={"https://www.youtube.com/embed/watch?v=" + item.link}></iframe> 


        return (
            <div>
            <div id={id}>
            {
                links.map((item) =>
                    (<div key={item.link} style={{height:'80%', width:'100%', margin:'auto'}}>
                        <YouTube
                            videoId={item.link}
                            opts={opts}
                            >
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
            <div>
                {this.props.home ?
                        <div style={mob? { marginTop: '30%', width: '100%', height: '100%' } : { marginTop:'15%', width: '100%', height: '100%' }}><LinkItem path={'/videos'} name={'See More'} home={false}></LinkItem></div>
                        : <div className='fab' style={{}} onClick={() => {window.scrollTo({top:0, left:0, behavior:'smooth'})}}><i class='arrow up' style = {{marginTop:25, borderColor:'#f5f5f5'}}></i></div>
                    }
                </div>
            </div>
        )
    }
}

export default VideoGrid;