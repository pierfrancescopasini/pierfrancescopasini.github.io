import React from 'react';
import Sketch from 'react-p5';
import "p5/lib/addons/p5.sound";


class Keyboard extends React.Component {

    componentDidMount = () => {
        window.addEventListener('resize', () => {setTimeout(() => {this.setState({})}, 200)});
        window.addEventListener('orientationchange', () => {window.location.reload()})
    }
    render() {
        //Roba de initializao
        let widthWhite = window.innerWidth / 22.5;
        let heightWhite = widthWhite * 3;
        let widthBlack = widthWhite / 2;
        let heightBlack = widthBlack * 3.5;
        let xWhite = window.innerWidth / 2 - widthWhite * 10;
        let yAll = window.innerHeight / 12;
        let xBlack = xWhite + widthWhite - widthBlack / 2;
        let shiftx = Math.random() * 10;
        let shifty = Math.random() * 10;
        let delta = widthWhite + window.innerWidth / 230;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                widthWhite = window.innerWidth / 15;
                heightWhite = widthWhite * 4;
                widthBlack = widthWhite / 1.5;
                heightBlack = widthBlack * 3.5;
                xWhite = window.outerWidth / 2 - widthWhite * 6;
                yAll = window.innerHeight / 20;
                xBlack = xWhite + widthWhite - widthBlack / 2;
                shiftx = Math.random() * 10;
                shifty = Math.random() * 10;
                delta = widthWhite + window.innerWidth / 230;
            }
        }

        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(widthWhite * 12 + xWhite, heightWhite + yAll + window.innerWidth / 20).parent(canvasParentRef);
        }

        const draw = (p5) => {
            p5.frameRate(12);
            p5.background("#282c34");
            p5.noStroke();
            for (let i = 0; i < 10; i++) {
                shiftx = Math.random() * 1.5;
                shifty = Math.random() * 2.5;
                p5.fill('white');
                p5.rect(xWhite + shiftx + delta * i, yAll + shifty, widthWhite, heightWhite, 20);
            }
            for (let i = 0; i < 9; i++) {
                if (i !== 2 && i !== 6) {
                    shiftx = Math.random() * 1.5;
                    shifty = Math.random() * 2.5;
                    p5.fill("#282c34");
                    p5.rect(xBlack + shiftx + delta * i, yAll + shifty, widthBlack, heightBlack, 20);
                }
            }
        }

        const windowResized = (p5) => {
            p5.resizeCanvas(widthWhite * 12 + xWhite, heightWhite + yAll + window.innerWidth / 20);
        }

        return (
            <div>
                <Sketch setup={setup} draw={draw} windowResized={windowResized}></Sketch>
            </div>
        )
    }
}

export default Keyboard;