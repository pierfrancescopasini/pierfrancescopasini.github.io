import React from 'react';
import { Link } from 'react-router-dom'

class ProjectItem extends React.Component {
    state = {
        mouseOver: false
    }
    render() {

        let styleOn = {
            transition: '0.8s',
            backgroundColor: '#F5F5F5',
            color: '#000000',
            borderRadius: '4px',
            width: 205,
            heigth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        let styleOff = {
            transition: '1.2s',
            borderRadius: '4px',
            backgroundColor: '#000000',
            width: 144,
            heigth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        let styleMob = {
            transition: '1.2s',
            borderRadius: '10px',
            backgroundColor: '#000000',
            width: 144,
            heigth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '22px',
        }

        if (this.props.home) {
            styleOff.color = '#000000'
            styleOff.backgroundColor = '#f5f5f5'
        }
        let mob = false;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            styleOff.width = 'auto';
            styleOff.height = 'auto';
            if (window.matchMedia("(orientation: portrait)").matches) {
                styleOff.fontSize = window.innerWidth / 20;
            } else {
                styleOff.fontSize = window.innerWidth / 25;
            }
            mob = true;
        }
        return (
            <div>
                {
                    this.props.path? 
                <Link
                to={this.props.path} 
                className='lnk' to={this.props.path}
                onMouseEnter={() => { this.setState({ mouseOver: true }) }}
                onMouseLeave={() => { this.setState({ mouseOver: false }) }}
                onClick={() => {
                    setTimeout(this.props.update(),200);
                }}
            >
                {this.state.mouseOver || mob ?
                    <div className='lnk' style={mob ? styleMob : styleOn} >{this.props.name}</div>
                    : <div style={styleOff}> 
                            {this.props.name}            
                    </div>
                }
            </Link>
            : 
            <div 
            className='lnk' 
            onMouseEnter={() => { this.setState({ mouseOver: true }) }}
            onMouseLeave={() => { this.setState({ mouseOver: false }) }}
            onTouchEnd={() => {
                this.props.update();
                setTimeout(() => {window.scrollTo(this.props.scroll)}, 200);
            }}
            onClick={() => {
                this.props.update();
                setTimeout(() => {window.scrollTo(this.props.scroll)}, 200);
            }}
            >
                {this.state.mouseOver || mob ?
                    <div className='lnk' style={mob ? styleMob : styleOn} >{this.props.name}</div>
                    : <div style={styleOff}> 
                            {this.props.name}            
                    </div>
                }
            </div>
                }
            
            </div>
            
        )
    }
}

export default ProjectItem;