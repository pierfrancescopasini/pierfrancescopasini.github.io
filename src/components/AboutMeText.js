import React from 'react'

class AboutMeText extends React.Component{

    render(){
        return(
            <p id='aboutme' style={{ backgroundColor:'#F5F5F5', color: '#282c34', width:this.props.width, fontSize: this.props.fontsize, borderRadius: '10px', textAlign: 'center'}}> 
                I play da sweet piano, da kool guitar, and I make da sweet love to you.
            </p>
        )
    }
}

export default AboutMeText;