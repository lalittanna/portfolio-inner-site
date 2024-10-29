import React from 'react';
import me from '../../assets/pictures/AboutFigure1.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps { }

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
                    Before setting up shop in London, I was crafting creative strategies for both luxury and B2B brands – diamonds one day, industrial adhesives the next. I believe in a culture that moves the needle and the bottom line. Being digital-first is simply common sense today, and, in my view, no great creative work happens without a strategy (you can quote me on that).
                </p>
                <br />
                <p>
                    My response to “We have short timelines and tight budgets” is a data-driven engine built to deliver campaigns in four hours to a week (*terms and conditions apply). I’ve led thumb-stopping campaigns across platforms and borders, producing everything from bumper ads to product shoots.
                </p>
                <br />
                <p>
                    P.S. You can subscribe to this service.
                </p>
                <br />
                <br />
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Early evidence of my ‘grab the opportunity’ attitude.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    Take a look around, and I hope you enjoy exploring the rest of my portfolio! Fancy a chat? I’m all ears. Reach out through the{' '}
                    <Link to="/contact">contact page</Link> or drop me a line
                    at{' '}
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
