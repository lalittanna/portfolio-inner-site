import React from 'react';
import me from '../../../assets/pictures/AboutFigure1.png';

import ResumeDownload from '../ResumeDownload';

export interface HOQProps { }

const HOQ: React.FC<HOQProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>BACCAROSE</h1>
            <div className="text-block">
                <br />
                <p>
                    As a creative strategist for Baccarose, I led the storytelling across partner channels, bringing the brand’s essence to life online and on-ground. From organising launch events with brand teams to ensuring a seamless digital strategy, I took each project up a notch – meeting some fascinating fragrance connoisseurs along the way. Yes, the office smelled like heaven.
                </p>
                <br />
                <h2>Paris Hilton Fragrances</h2>
                <br />
                <p>
                    Paris Hilton’s first visit to India was for an exclusive launch of her new fragrance with Parcos. I handled event coordination, vendor negotiations, and crafted the launch strategy. Fun fact: Paris Hilton approved my outfit choice. Ask me for proof if you don’t believe me.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Meeting Paris Hilton.
                        </sub>
                    </p>
                </div>
                <h2>KOL Campaigns</h2>
                <br />
                <p>
                    The time I maxed out my imagination by curating influencers and designing mood boards to promote luxury fragrances. These KOL campaigns were all about selecting personalities who fit the brand, making every detail resonate.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Influencer Campaigns that raised the creative bar.
                        </sub>
                    </p>
                </div>
                <h2>Diego Dalla Palma Milano</h2>
                <br />
                <p>
                    For this Italian brand’s Parcos-exclusive launch, we hosted a full-scale event, creating a launch video that impressed the global team so much that they featured it across their channels.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> The Italian beauty brand’s debut in India.
                        </sub>
                    </p>
                </div>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default HOQ;
