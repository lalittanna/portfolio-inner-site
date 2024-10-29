import React from 'react';
import image1 from '../../../assets/pictures/projects/3M/3M_1.png';
import image2 from '../../../assets/pictures/projects/3M/3M_2.png';
import image3 from '../../../assets/pictures/projects/3M/3M_3.png';
import image4 from '../../../assets/pictures/projects/3M/3M_4.png';
import image5 from '../../../assets/pictures/projects/3M/3M_5.png';

import ResumeDownload from '../ResumeDownload';

export interface ThreeMProps {}

const ThreeM: React.FC<ThreeMProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>3M</h1>
            <div className="text-block">
                <br />
                <p>
                    In 3M’s Safety and Industrial Business Group (61% of 3M’s
                    global business), I led B2B industrial marketing across five
                    divisions in APAC. Industrial adhesives may not make
                    headlines, but they’re the glue that holds everything
                    together.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image1} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> How I contributed to SIBG’s
                            success.
                        </sub>
                    </p>
                </div>
                <h2>My Creative Scorecard</h2>
                <br />
                <p>
                    I balanced strategy and execution to localise campaigns and
                    optimise user flows with data insights across 12 markets. By
                    collaborating closely with country leads, I strategically
                    fine-tuned briefs and ensured timely execution, all while
                    working with cross-functional teams to prioritise web (UX)
                    improvements.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image2} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Navigating campaigns, one swing at
                            a time.
                        </sub>
                    </p>
                </div>
                <h2>Happy User Journeys</h2>
                <br />
                <p>
                    By mapping user journeys on Axure and running A/B tests, we
                    boosted conversions by 57% and improved email open rates
                    from 12% to 35%, peaking at 99% for one campaign.
                    Personalisation, dynamic content, and a bit of GIF magic
                    were key – all while staying true to 3M’s clear, no-nonsense
                    tone.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image3} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> Journey from clicks to conversion.
                        </sub>
                    </p>
                </div>
                <h2>Creative Showcase</h2>
                <br />
                <p>
                    Email automations, social media, Google ads, product videos
                    – I did it all. I also helped build a team and every new
                    hire stepped into an environment where creative thinking was
                    encouraged and execution was spot on.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image4} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> Swipe to see more samples of our
                            work.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    The campaigns were great, but the team was greater. At 3M, I
                    worked with a group that made the toughest projects fun.
                    Together, we created something that will stick – in more
                    ways than one.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image5} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 5:</b> The team that kept it all together.
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

export default ThreeM;
