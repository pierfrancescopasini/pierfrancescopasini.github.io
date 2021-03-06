import React from 'react'

class Contacts extends React.Component {
    state = {
        showPhone: false,
        showMail: false,
        showSocial: false,
        onPhone: false,
        onMail: false,
        onSocial: false,
    }

    render() {
        let styleOn = {
            transition: '0.4s',
            backgroundColor: '#F5F5F5',
            color: '#000000',
            borderRadius: '4px',
            marginRight: '5.5px',
            marginLeft: '5.5px',
            marginTop: '5.5px',
            marginBottom: '5.5px',
            fontSize: '15px'
        }
        let fontSize = 20;
        let mob = false;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mob = true;
            fontSize = '16px';
            if (window.matchMedia("(orientation: portrait)").matches) {
                //fontSize = window.innerWidth / 20;
            } else {
                //fontSize = window.innerWidth / 40;
            }
            styleOn.fontSize = fontSize;
        }
        return (
            <div id="contacts" className='container' style={{ marginTop: '20px' }}>
                <div>
                    <div style={{ width: '100%', margin: 'auto' }}>
                        <div
                            id='phoneNumber'
                            style={{
                                fontSize: fontSize,
                                marginBottom: '20px',
                                marginLeft: 'auto',
                            }}>(+39)  3343777058</div>
                       <div
                            style={{ fontSize: fontSize, marginBottom: '20px', cursor: 'pointer', height: '20px' }}>
                                P.IVA 04239570981
                        </div>
                        <div
                            id='mailCont'
                            onClick={() => {
                                window.location.href = "mailto:pierfrancesco.pasini@gmail.com";
                            }}
                            style={{ fontSize: fontSize, marginBottom: '25px', cursor: 'pointer', height: '20px' }}>
                            pierfrancesco.pasini@gmail.com
                    </div>
                        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <div style={{ margin: 'auto', width: '280px' }}>
                                <div className='socialGrid'>
                                    <div className='svgCont'>
                                        <a href='https://www.instagram.com/pierfrancescopasini/' target='__black'>
                                            <svg
                                                width="35px"
                                                height="35px"
                                                viewBox="0 0 512 512">
                                                <path
                                                    className='inPath'
                                                    d="m 265.93,64 c -41.667,1.375 -84.183,-3.251 -125.086,6.62 -40.578,9.984 -70.111,47.801 -73.974,88.801 -4.638,50.316 -2.221,100.998 -2.387,151.461 -0.13,35.781 3.377,75.54 29.696,102.571 26.992,30.526 70.203,34.851 108.429,34.06 51.153,0.126 102.552,2.098 153.519,-2.913 39.308,-5.052 74.901,-33.599 84.896,-72.546 9.743,-37.854 5.561,-77.469 6.977,-116.135 -1.503,-39.853 3.194,-80.889 -8.106,-119.676 -11.48,-38.58 -48.197,-65.647 -87.639,-69.523 -28.631,-3.127 -57.567,-2.34 -86.324,-2.72 z m -30.994,34.377 c 40.692,1.041 81.831,-2.334 122.195,4.027 27.079,4.842 48.722,27.65 52.884,54.725 5.423,39.468 2.928,79.585 3.602,119.335 -1.931,32.303 3.528,66.492 -9.587,97.085 -11.821,27.14 -42.43,38.798 -70.315,38.825 -52.965,1.631 -106.056,1.888 -159.003,-0.245 -28.757,-0.263 -59.374,-15.308 -68.969,-43.925 -10.145,-32.022 -6.293,-66.255 -7.21,-99.36 0.658,-38.302 -2.245,-77.064 4.145,-114.983 5.342,-29.297 31.986,-50.471 60.987,-53.027 23.622,-2.633 47.537,-2.147 71.272,-2.457 z m 122.951,32.38 c -19.563,-0.758 -30.439,26.323 -15.751,39.304 13.259,14.58 40.231,3.133 39.072,-16.5 0.246,-12.423 -10.968,-23.203 -23.321,-22.804 z m -100.311,26.777 c -38.532,-0.791 -76.376,22.386 -91.331,58.265 -21.747,44.612 -1.617,103.134 41.978,126.287 41.974,24.313 100.227,11.204 127.711,-28.696 29.712,-39.463 22.664,-100.415 -15.507,-131.922 -17.255,-15.073 -39.912,-23.824 -62.851,-23.934 z m -1.067,34.281 c 36.069,-0.829 67.125,33.32 63.491,69.11 -1.715,38.865 -44.436,68.767 -81.579,56.709 -36.64,-9.135 -57.429,-53.986 -40.946,-87.883 9.99,-22.905 34.017,-38.439 59.034,-37.936 z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='svgCont'>

                                        <a href='https://it-it.facebook.com/pierfrancesco.pasini' target='__black'>
                                            <svg
                                                width="35px"
                                                height="35px"
                                                viewBox="0 0 512 512">
                                                <path
                                                    className='inPath'
                                                    d="M 350.912,71.615 C 340.532,69.394 330.697,67.581 321.405,66.176 312.113,64.771 302.005,64.046 291.082,64 c -31.819,0.136 -54.799,7.479 -68.941,22.028 -14.142,14.55 -21.077,35.49 -20.804,62.822 l 0,39.705 -40.249,0 0,64.181 40.249,0 0,195.263 78.323,0 0,-195.263 57.11,0 5.439,-64.181 -62.55,0 0,-31.003 c -0.453,-8.793 0.861,-15.682 3.943,-20.669 3.082,-4.986 10.651,-7.524 22.708,-7.615 4.816,0.023 10.413,0.386 16.793,1.088 6.379,0.703 12.385,1.609 18.017,2.72 z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <a href='https://www.tiktok.com/@pierfrancescopasini' target='__black'>
                                    <div className='svgCont'>
                                    <svg 
                                                width="35px"
                                                height="25px"
                                                style={{marginTop:'5px'}}
                                                viewBox="0 0 512 512">
                                            <path className='inPath' d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                        </svg> 
                                    </div>
                                    </a>
                                    <div className='svgCont'>
                                        <a href='https://open.spotify.com/playlist/24UsN45jfHwYkqtKKt9hwG?si=GY2Fh68jSqG3HnyuMEnlAA' target='__black'>
                                        <svg
                                                width='50px'
                                                height='50px'
                                                style={{marginTop:'-8px'}}
                                                viewBox= '0 0 64 64'
                                                >
                                                <path
                                                    className='inPath'
                                                    d='M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2'
                                                
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='svgCont'>
                                        <a href='https://www.youtube.com/channel/UCPB3jS7oPlA-UGXdSfjqxNA' target='__black'>
                                            <svg
                                                width="35px"
                                                height="35px"
                                                viewBox="0 0 512 512">
                                                <path
                                                    className='inPath'
                                                    d="m 216.356,206.191 c -0.006,35.965 -0.012,71.929 -0.018,107.894 34.586,-18.045 69.172,-36.09 103.758,-54.135 -34.58,-17.92 -69.161,-35.839 -103.741,-53.759 z m 227.809,126.585 c -2.806,21.003 -12.623,43.976 -34.555,50.793 -24.069,6.418 -49.474,4.495 -74.156,6.21 -73.65,1.887 -147.51,2.205 -221.004,-3.391 C 92.09,384.599 74.088,366.272 70.328,344.515 62.591,306.892 64.047,268.138 64.165,229.902 66.354,200.833 63.988,168.866 81.031,143.579 c 17.12,-20.521 46.088,-18.611 70.27,-20.315 82.042,-2.855 164.346,-3.799 246.248,2.469 22.363,1.787 40.361,20.117 44.126,41.873 7.605,36.672 6.239,74.451 6.23,111.734 -0.414,17.856 -1.705,35.692 -3.74,53.435 z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;