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
            color: '#000000', 
            borderRadius: '4px', 
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
        <div id="contacts" className='container' style={{marginTop:'20px'}}>
            <div>
                <div style={{width:'100%'}}>
                    <div className= 'downmovers' style={{fontSize: fontSize, marginBottom:'2%'}}>(+39)  3343777058</div> 
                    <div 
                        className= 'downmovers'
                        onClick={() => {
                            window.location.href = "mailto:pierfrancesco.pasini@gmail.com";
                        }} 
                        style={{fontSize: fontSize, marginBottom: '20px', marginLeft:'5%', cursor:'pointer'}}>
                        pierfrancesco.pasini@gmail.com 
                    </div>
                </div>
                <div className= 'downmovers' style={{marginTop:'20px', marginBottom:'20px'}}>
                    <span style={{marginRight:'1%'}}>
                        <a 
                        className='social-lnk' 
                        style={
                            {fontFamily:'Oleo Script', 
                            fontSize: fontSize*1.2,
                            }} 
                            href='https://www.instagram.com/pierfrancescopasini/'
                            >
                            <svg style={{fill:'#F5F5F5'}}>
                                <path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z">
                                </path>    
                            </svg>    
                                
                            </a>
                    </span>
                    <span style={{marginRight:'1%'}}>
                    <a 
                        className='social-lnk' 
                        style={
                            {fontFamily:'Neue Helvetica', 
                            fontSize: fontSize*1.2,
                            }} 
                            href='https://it-it.facebook.com/pierfrancesco.pasini'
                            >
                            <div>
                                <span>
                                    <svg style={{fill:'#F5F5F5'}}>
                                        <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z">  
                                        </path>
                                    </svg>   
                                </span>
                            </div>
                            </a>
                    </span>
                </div>
        </div>
       </div>
    )
   }
}

export default Contacts;