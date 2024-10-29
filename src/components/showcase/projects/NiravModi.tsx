import React from 'react';
import me from '../../../assets/pictures/AboutFigure1.png';

import ResumeDownload from '../ResumeDownload';

export interface NiravModiProps { }

const NiravModi: React.FC<NiravModiProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>NIRAV MODI</h1>
            <div className="text-block">
                <br />
                <p>
                    That time I channeled my inner Shakespeare and pulled off a Valentine’s Day campaign that surprised even me. Normally, romance novels aren’t my scene, but this campaign took a memorable twist. Headlined by Priyanka Chopra, it was a rare chance to work with a brand that merged high-end appeal with mainstream reach. Here are a few of my favourite creatives from this project.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Bringing luxury to romance.
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

export default NiravModi;
