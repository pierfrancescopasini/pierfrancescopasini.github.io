import React from 'react';
import {Circle } from 'rc-progress';

class ProgressBar extends React.Component{
    state = {
        percent: 0
    }

    componentDidMount(){
        setInterval(()=> {this.setState((prevState) => ({percent:prevState.percent+this.props.progress.amount}))}, this.props.progress.time);
    }

    render(){
        return(
        <Circle percent={this.state.percent} style={this.props.styleBar} strokeWidth="1.5" strokeColor="#F5F5F5"></Circle>
        )
    }
}

export default ProgressBar;