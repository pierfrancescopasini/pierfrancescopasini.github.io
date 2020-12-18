import React from 'react';
import {Line } from 'rc-progress';

class ProgressBar extends React.Component{
    state = {
        percent: 0
    }

    componentDidMount(){
        setInterval(()=> {this.setState((prevState) => ({percent:prevState.percent+this.props.progress.amount}))}, this.props.progress.time);
    }

    render(){
        return(
        <Line percent={this.state.percent} style={{top: '-2px', height:'1px', width:'95%', margin: 'auto'}} strokeWidth="0.8" strokeColor="#F5F5F5"></Line>
        )
    }
}

export default ProgressBar;