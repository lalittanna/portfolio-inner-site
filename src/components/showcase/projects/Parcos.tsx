import React from 'react';
import me from '../../../assets/pictures/AboutFigure1.png';

import ResumeDownload from '../ResumeDownload';

export interface ParcosProps { }

const Parcos: React.FC<ParcosProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>PARCOS</h1>
            <div className="text-block">
                <br />
                <p>
                    Parcos needed a fresh digital edge, so I led with strategy and creative direction to bring its offline dominance online. Using insights from offline data and web analytics, I led our team to organically quadruple engagement, crafting content pillars [that is shareable and savable] that intuitively connected with the audience. I orchestrated everything – from coordinating influencers and creative teams to leading product shoots, managing brand vendors, and training our junior team members.
                </p>
                <br />
                <h2>Lipstick Day Campaign</h2>
                <br />
                <p>
                    The time my search history turned into lipstick heaven. For this campaign, three influencers sported vintage looks with a modern twist. The contrast between their bold styles and vintage-inspired copy made a statement, connecting each shade to a unique mood. The result? A 47% spike in traffic and a 41% increase in sessions over the campaign period.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A vintage vibe with a modern twist.
                        </sub>
                    </p>
                </div> */}
                <h2>Parcos Gold Rush Sale</h2>
                <br />
                <p>
                    Creating Parcos’ first sale IP on tight timelines and budgets was a challenge. The strategy was data-driven, adapted by real-time insights across Google ads and MARCOM. “The Bolt” – our lightning-fast deal icon—became a recognizable symbol for the sale’s urgency, making every flash offer unmistakably Parcos.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Flash deals meet fast moves.
                        </sub>
                    </p>
                </div> */}
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

export default Parcos;
