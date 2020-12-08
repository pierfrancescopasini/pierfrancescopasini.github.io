import React from 'react'

class Contacts extends React.Component{
    state = {
        showPhone : false,
        showMail : false,
        showSocial : false,
        onPhone : false,
        onMail : false,
        onSocial : false,
    }
 
   render(){ 
        let styleOn = { 
            transition: '0.4s', 
            backgroundColor: '#F5F5F5', 
            color: '#282c34', 
            borderRadius: '3px', 
            marginRight: '5.5px', 
            marginLeft: '5.5px',
            marginTop: '5.5px',
            marginBottom: '5.5px',
            fontSize: '20px'
        }
       let fontSize = 20;
       let mob = false;
       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           mob = true;
            if (window.matchMedia("(orientation: portrait)").matches) {
                fontSize = window.innerWidth/20;
            }else{
                fontSize = window.innerWidth/40;
            }
            styleOn.fontSize = fontSize;
        }   
    return (
        <div id="contacts" className='container'>
            <div 
            style={{
                marginBottom: '0.5cm',
            }}
            >
               <span style={{fontSize: fontSize}}>|</span><span 
                style={
                    (this.state.showPhone || this.state.onPhone)? 
                    styleOn
                    : {transition: '0.4s', fontSize: fontSize}
                }
                onClick={() => {
                    setTimeout(() => {                    
                        window.scrollTo(0, window.outerHeight + 20);
                    },20);                    
                    this.setState((prevState) => ({
                        showPhone: !prevState.showPhone,
                        showMail: false,
                        showSocial: false
                    }))
                    }
                }
                onMouseEnter = {() => {this.setState({onPhone:true})}}
                onMouseLeave = {() => {this.setState({onPhone:false})}}
                >Phone  </span><span style={{fontSize: fontSize}}>|</span>
                <span 
                style={
                    (this.state.showMail || this.state.onMail)? 
                    styleOn 
                    : {transition: '0.4s', fontSize: fontSize}
                }
                onClick={() => {
                    setTimeout(() => {                    
                        window.scrollTo(0, window.outerHeight + 20);
                    },20);
                    this.setState((prevState) => ({
                        showPhone: false,
                        showMail: !prevState.showMail,
                        showSocial: false
                }))}
                }
                onMouseEnter = {() => {this.setState({onMail:true})}}
                onMouseLeave = {() => {this.setState({onMail:false})}}
                >Email  </span><span style={{fontSize: fontSize}}>|</span> 
                <span 
                style={
                    (this.state.showSocial || this.state.onSocial)? 
                    styleOn
                    : {transition: '0.4s', fontSize: fontSize}
                }
                onClick={() => {
                    setTimeout(() => {                    
                        window.scrollTo(0, window.outerHeight + window.outerHeight/5);
                    },20);                    
                    this.setState((prevState) => ({
                        showPhone: false,
                        showMail: false,
                        showSocial: !prevState.showSocial
                }))}
                }
                onMouseEnter = {() => {this.setState({onSocial:true})}}
                onMouseLeave = {() => {this.setState({onSocial:false})}}
                >Socials </span>
            </div>
            <div>
                {this.state.showPhone?  <div className= 'downmovers' style={{fontSize: fontSize, marginBottom:'2%'}}>(+39)  3343777058 </div> : <div></div>} 
                {this.state.showMail? <div 
                    className= 'downmovers'
                    onClick={() => {
                        window.location.href = "mailto:pierfrancesco.pasini@gmail.com";
                    }} 
                    style={{fontSize: fontSize, marginBottom: '2%', cursor:'pointer'}}>pierfrancesco.pasini@gmail.com </div> : <div></div>} 
                {this.state.showSocial? 
                <div className= 'downmovers' style={mob? {}: {bottom:'8%'}}>
                    <div style={{marginBottom:'1%'}}>
                        <a 
                        className='social-lnk' 
                        style={
                            {fontFamily:'Oleo Script', 
                            fontSize: fontSize*1.2,
                            }} 
                            href='https://www.instagram.com/pierfrancescopasini/'
                            >Instagram  </a>
                    </div>
                    <div style={{marginBottom:'1%'}}>
                    <a 
                        className='social-lnk' 
                        style={
                            {fontFamily:'Neue Helvetica', 
                            fontSize: fontSize*1.2,
                            }} 
                            href='https://it-it.facebook.com/pierfrancesco.pasini'
                            >facebook   </a>
                    </div>
                </div> : <div></div>}
        </div>
       </div>
    )
   }
}

export default Contacts;