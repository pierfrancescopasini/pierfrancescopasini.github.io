import React from 'react';
import pieropic from './resources/bioImage.png'
import ProgressBar from './ProgressBar.js'
import iconTransparent from './resources/icon_white_transparent.png';
import { Link } from 'react-router-dom';
import DocLightbox from './DocLightbox';
import { BookFiles, CVFiles, THFiles1, THFiles2, } from './imports/importDocs';
import texts from './resources/texts';

const userLang = navigator.language || navigator.userLanguage;

class AboutPage extends React.Component {

    state = {
        stylePage: { display: 'none' },
        styleLoad: { display: 'block' }
    }

    componentDidMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            this.setState({ stylePage: { display: 'block', backgroundColor: '#FFFFFF', width: '100%', height: 'fit-content' }, styleLoad: { display: 'none' } })
        }, 800);
        window.addEventListener('load', () => {
            this.setState({ stylePage: { display: 'block', backgroundColor: '#FFFFFF', width: '100%', height: 'fit-content' }, styleLoad: { display: 'none' } })
        });
    }

    render() {
        let dim = window.outerWidth / 4;
        let fontH = window.outerWidth / 40;
        let fontP = window.outerWidth / 50;
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                fontH = window.outerWidth / 15;
                fontP = window.outerWidth / 20;
                dim = window.outerHeight / 5;
            } else {
                fontH = window.outerWidth / 25;
                fontP = window.outerWidth / 35;
            }
        }

        let topImg = `url(${pieropic})`;
        document.body.style.overflow = null;
        let mob = false;
        let fontSize = '50px';

        let margin = window.innerHeight / 1.6;
        if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.orientation === 0 || window.orientation === 180)) {
            mob = true;

        }
        if (window.orientation === 0 || window.orientation === 180) {
            mob = true;
        } else if (window.orientation === 90 || window.orientation === -90) {
            fontSize = '40px';
            margin = window.innerHeight / 1.8;
        }
        return (
            <div style={{ width: '100%'}}>
                <div style={this.state.styleLoad} id='barVid'>
                    <ProgressBar progress={{ amount: 1, time: 10 }} styleBar={{ width: dim, height: dim }}></ProgressBar>
                </div>
                <div style={this.state.stylePage}>

                    <Link to={'/'} className='headerIcon'><img onClick={() => {

                    }} className='imghead' height='50px' src={iconTransparent}></img></Link>
                    <div style={mob ? { width: '100%', height: window.innerHeight / 2.8, backgroundSize: '100%', backgroundImage: topImg, backgroundColor: '#000000', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' } : { width: '100%', height: window.innerHeight / 1.3, backgroundSize: '100%', backgroundImage: topImg, backgroundColor: '#000000', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                        <div style={mob ? { float: 'left', marginTop: window.innerHeight / 3.5, marginLeft: '20px', color: '#F5F5F5', fontSize: '25px' } : { float: 'left', marginTop: margin, marginLeft: '20px', color: '#F5F5F5', fontSize: fontSize }}>
                            BIO
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100%', backgroundColor: '#FFFFFF', height: 'auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '100%', width: '100%', borderRadius: '4px', margin: 'auto', backgroundColor: '#FFFFFF' }}>
                            <div style={(mob || window.innerWidth < 640) ? { width: '80%', margin: 'auto', fontSize: '12px', marginBottom: '50px', marginTop: '50px', textAlign: 'justify' } : { width: '80%', margin: 'auto', fontSize: '20px', marginBottom: '50px', marginTop: '50px', textAlign: 'justify' }}>
                                {(userLang === 'it-IT' || userLang === 'it' || userLang === 'IT' || userLang == 'it-it') ? texts.bio.ita : texts.bio.eng}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100%', backgroundColor: '#FFFFFF', height: '100%' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '100%', width: '100%', borderRadius: '4px', margin: 'auto', backgroundColor: '#FFFFFF' }}>
                            <div style={mob ? { width: '80%', margin: 'auto', fontSize: '12px', marginBottom: '50px' } : { width: '80%', margin: 'auto', fontSize: '20px', marginBottom: '50px' }}>
                                <div style={mob ? { display: 'grid', gridTemplateColumns: '50% 50%', rowGap: '5%', gridTemplateRows: '45vh', height: 'auto', backgroundColor: '#FFFFFF' } : { display: 'grid', gridTemplateColumns: '50% 50%', rowGap: '25%', gridTemplateRows: '60vh', height: '200vh', backgroundColor: '#FFFFFF' }}>
                                    <DocLightbox th1={false} th2={false} cv={true} boook={false} files={CVFiles}></DocLightbox>
                                    <DocLightbox th1={false} th2={false} cv={false} book={true} files={BookFiles}></DocLightbox>
                                    <DocLightbox th1={false} th2={true} cv={false} boook={false} files={THFiles2}></DocLightbox>
                                    <DocLightbox th1={true} th2={false} cv={false} book={false} files={THFiles1}></DocLightbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'none'}}>
                    Nato a Brescia il 22 ottobre 1998, mostra un precoce interesse per la musica, iniziando lo studio dello strumento a sei anni d’età. Dopo aver frequentato la Scuola Media ad Indirizzo Musicale di Passirano, nel 2014 inizia il suo percorso al Conservatorio Luca Marenzio di Brescia, dove frequenta il corso preaccademico di Pianoforte Principale con Daniela Piovani. Nel 2017 inizia gli studi accademici al Conservatorio di Brescia frequentando il Triennio di Pianoforte Jazz con Corrado Guarino e Pasquale Stafano, proseguendo al contempo gli studi classici con Enrico Conti. Nell’autunno 2017 frequenta i corsi di Popular Music al CET di Mogol, conseguendone il diploma nel dicembre dello stesso anno. Attualmente frequenta il Biennio di Pianoforte Jazz al Conservatorio  Giuseppe Verdi di Milano, dove studia sotto la guida dei  maestri Umberto Petrin e Carlo Morena.
                    Durante il suo percorso di formazione ha partecipato a numerosi seminari e masterclass tenuti da professionisti attivi in diversi ambiti musicali: Mogol, Laura Valente, Giuseppe Anastasi, Serena Brancale, Eddie Gomez, Joe la Barbera, Dado Moroni, Franco d’Andrea, Kurt Rosenwinkel, Luca Mannutza, Nicole Metzger, Gerardo Chimini, Paolo Alderighi e Stephanie Trick.
                    A partire dall’autunno del 2017 iniziano le prime esperienze d’insegnamento musicale, e nel contempo un’intensa attività artistica che lo porta a partecipare, in veste di pianista/tastierista e compositore/produttore, a diversi progetti che spaziano tra molti generi differenti, vantando collaborazioni con artisti quali Pinguini Tattici Nucleari, Mecna, Frah Quintale, Voodoo Kid, Chiamamifaro, Osso, Auroro Borealo, Typo Clan. Nel maggio 2020 pubblica il suo primo libro di didattica pianistica, dal titolo “Pop Piano Accompagnamenti”, edito da Christian Salerno, rimasto ai vertici della classifica bestseller Amazon per oltre un mese.
                    Born in Brescia on October 22, 1998, he showed an early interest in music, starting the study of the instrument at age six. After attending the Music Middle School in Passirano, in 2014 he began his career at the Luca Marenzio Conservatory in Brescia, where he attended the pre-academic course of Classical Piano with Daniela Piovani. In 2017 he began his academic studies at the Brescia Conservatory, attending the Bachelor in Jazz Piano with Corrado Guarino and Pasquale Stafano, while continuing his classical studies with Enrico Conti. During the autumn of 2017 he attended Popular Music courses at Mogol’s CET, obtaining the qualification in December of the same year. He currently attends the Master in Jazz Piano at the Giuseppe Verdi Conservatory in Milan, where he studies under the guidance of the masters Umberto Petrin and Carlo Morena.
                    Throughout his training path, he participated in numerous seminars and masterclasses held by professionals active in various musical fields: Mogol, Laura Valente, Giuseppe Anastasi, Serena Brancale, Eddie Gomez, Joe la Barbera, Dado Moroni, Franco d’Andrea, Kurt Rosenwinkel, Luca Mannutza, Nicole Metzger, Gerardo Chimini, Paolo Alderighi and Stephanie Trick. 
                    Starting from the autumn of 2017, he began his first experiences as a musical teacher, carrying on at the same time an intense artistic activity that led him to participate, as a pianist/keyboardist and composer/producer, in several projects ranging between many different genres and boasting collaborations with artists such as Pinguini Tattici Nucleari, Mecna, Frah Quintale, Voodoo Kid, Chiamamifaro, Osso, Auroro Borealo, Typo Clan.
                    In May 2020 he published his first piano teaching book entitled "Pop Piano Accompagnamenti", edited by Christian Salerno, which remained at the top of the Amazon bestseller ranking for over a month.
                </div>
            </div>
        )
    }
}

export default AboutPage;