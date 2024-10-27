import React from 'react';
import me from '../../assets/pictures/AboutFigure1.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Hello</h1>
            <h3>I'm Ruchika Jashnani</h3>
            <br />
            <div className="text-block">
                <p>
                    Before setting up shop in London, I was crafting creative
                    strategies for luxury and B2B brands (think diamonds one
                    day, industrial adhesives the next – keeps things
                    interesting). I firmly believe in culture that moves the
                    needle and the bottom line. I also believe that being
                    digital-first is just common sense these days and that no
                    great creative happens without a strategy (you can quote me
                    on that).
                </p>
                <br />
                <p>
                    When someone says, “We’ve got tight timelines and tighter
                    budgets,” I say, “Challenge accepted!” I’ve been known to
                    pull off content miracles – from bumper ads to product
                    shoots – within 4 hours to a week (*yes, really).
                </p>
                <br />
                <p>
                    In short, I make things happen. You can subscribe to this
                    strategy-driven magic, too (just kidding, but seriously).
                </p>
                <br />
                <br />
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Early evidence of my ‘grab the
                            opportunity’ attitude.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    Take a look around, and I hope you enjoy exploring the rest
                    of my portfolio! Fancy a chat? I’m all ears. Reach out
                    through the <Link to="/contact">contact page</Link> or drop
                    me a line at{' '}
                    <a href="ruchika.jashnani@gmail.com">
                        ruchika.jashnani@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
