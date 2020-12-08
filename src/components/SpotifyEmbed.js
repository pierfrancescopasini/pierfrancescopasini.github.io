import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


class SpotifyEmbed extends React.Component{
    state = {
        styleCards : {display:'flex', flexDirection: 'row'},
    }

    componentDidMount = () => {
    }

    render(){
        let dim = window.outerWidth / 5;    
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(window.matchMedia("(orientation: portrait)").matches){
               dim = window.outerHeight/5;
            }
        }   

        const album_links = [
            '5e33d90hvAsPdOrC0dtskP',
            '0HUDXbFaRlxFJuFRSftwJA',
            '5dCIrLEY5lUgntCR9F9yit',
            '5uaOfLTa1aXHxPYmXytiq2',
            '7xF0gCFzeJdGvVjWkDPvKJ',
            '60mrAm82z03UQ3W85rO8GF',
        ]

        let track_links = [
            '2lQGFIpD5MRghyrjW91LoR',
            '6QXCvzyzpLQsI6M99Qyalm',
            '2HgF0tqyua6zRU5ig6MPJV',
            '5EMAHTk9IDzUVnXqcWzEj1',
            '43ZztZLSJdEm2RjX0aKhEq',
            '0LlOJWcJZbJRCc2vVJkR9S',
            '5E3dBXdNPpE5vK4EAK4wdR',
            '58adZaMwhvrHJ2rclo24gB',
            '4KXlKIfIPR85EOf9uamnUf',
            '3QqYhjrVvZwMoV9r4aBYBG',
            '1N928MHssSvFI6TEVxVRQF',
            '3zYgLrwKQBei7f6FxKVc6W',
        ]
        let width, height;
        width = "" + window.innerWidth/4.5;
        height = "" + window.innerHeight/3;
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                height = "" + window.innerHeight/3.5;
                width = "" + window.innerHeight/3;
            }else{
                width = "" + window.innerWidth/4;
                height = "" + window.innerHeight/2;
            }
        }

        return(
            <div>
                <h4>Albums</h4>
                <div id='album-scroll' className="spotifyGrid">
                </div>
                <InfiniteScroll
                    dataLength={album_links.length}
                    style={this.state.styleCards} //To put endMessage and loader to the top.
                    scrollableTarget="single-scroll"
                >
                    {
                          album_links.map((item) => (
                            <div 
                                key={item} 
                                style={{
                                    marginInline:'5px',
                                    marginRight: '5px'
                                }}
                            >
                                <iframe 
                                        className='spotifyCard'
                                        src={'https://open.spotify.com/embed/album/' + item}
                                        width={width} 
                                        height={height} 
                                        frameBorder="0" 
                                        allowtransparency="true" 
                                        allow="encrypted-media"
                                        title={item}
                                >
                                </iframe>
                            </div>
                        ))
                    }
                </InfiniteScroll>
                <h4>Singles</h4>
                <div id='singles-scroll' className="spotifyGrid">
                </div>
                <InfiniteScroll
                    dataLength={track_links.length}
                    style={this.state.styleCards} //To put endMessage and loader to the top.
                    scrollableTarget="single-scroll"
                >
                    {track_links.map((item) => (
                    <div 
                        key={item}
                        style={{
                            marginInline:'5px',
                            marginRight: '5px'
                        }}
                    >
                    <iframe 
                            className='spotifyCard'
                            src={'https://open.spotify.com/embed/track/' + item}
                            width={width} 
                            height={height} 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"
                            title={item}
                    >
                    </iframe>
                </div>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }
}

export default SpotifyEmbed;