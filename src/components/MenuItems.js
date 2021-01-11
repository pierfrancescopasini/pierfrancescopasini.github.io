import React from 'react';

class MenuItem extends React.Component{

    disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
    }
        
    enableScroll = () => {
        document.body.style.overflow = null;
    }
    
    render(){
        return(
            <div
            className='mobMenu'
            style={{ width: window.innerWidth, height: window.screen.height, margin: 'auto', backgroundColor: '#000000' }}
        >
            <div style={{ margin: 'auto', width: '100%', height: window.screen.height}}>
                <div style={{ margin: 'auto', width: '100%', height: window.screen.height/6}}></div>
                <div style={{ margin: 'auto', width: '100%', height: window.screen.height/2}}>
                    <ProjectsandVideos
                        update={() => {
                            this.enableScroll();
                            this.setState({
                                display: { display: 'block' },
                                displayBar: { display: 'none' },
                                displayMenu: { display: 'none' }
                            })
                        }}>
                    </ProjectsandVideos>
                    <div style={{ margin: 'auto', width: '100%', height: window.screen.height/6}}></div>
                </div>
            </div>
        </div>
        )
    }
}