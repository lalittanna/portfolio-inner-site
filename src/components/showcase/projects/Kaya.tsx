import React from 'react';

import ResumeDownload from '../ResumeDownload';

export interface KayaProps {}

const Kaya: React.FC<KayaProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>KAYA</h1>
            <br />
            <h2>#WishWearFlaunt</h2>
            <p>
                Awarded Best Digital Integrated Campaign, Drivers of Digital
                Awards 2017
            </p>
            <div className="text-block">
                <br />
                <p>
                    When it came to repositioning Kaya's Laser Hair Removal, I
                    used data-backed strategy and insights to develop a
                    two-phase campaign. The pre-launch was all about seeding
                    intrigue, while the launch phase integrated influencers with
                    a challenge, #DropTheHassle, to get people talking. This
                    challenge generated high-impact traffic organically, leading
                    to a live event.
                </p>
                <br />
                <p>
                    The data spoke for itself: the launch video achieved a
                    42.42% engagement rate and 1.3M views on Facebook alone:
                    Watch on Facebook
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> From digital buzz to on-ground impact.
                        </sub>
                    </p>
                </div> */}
                <h2>Kaya Product Videos</h2>
                <br />
                <p>
                    Coordinating over 20 product videos for Kaya’s e-commerce
                    channels and social platforms was a marathon. Each video was
                    tailored to increase click-through rates and conversions,
                    making sure our creative approach aligned seamlessly with
                    the campaign's goals.
                </p>
                <br />
                <p>Video links:</p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Influencer Campaigns that raised the creative bar.
                        </sub>
                    </p>
                </div> */}
                <h2>The BlackBook</h2>
                <br />
                <p>
                    To ensure Kaya’s brand story had lasting impact, I created a
                    BlackBook – a comprehensive guide to the brand’s ethos,
                    tone, and values. This wasn’t just for our clients; it
                    became a strategic asset for our team, designed to foster
                    continuity and insight-driven training. It was the brand’s
                    blueprint, ensuring the whole team worked from the same
                    playbook.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> The Italian beauty brand’s debut in India.
                        </sub>
                    </p>
                </div> */}
            </div>
            <ResumeDownload />
        </div>
    );
};

// const styles: StyleSheetCSS = {
//     video: {
//         width: '100%',
//         padding: 12,
//     },
//     caption: {
//         width: '80%',
//     },
// };

export default Kaya;
