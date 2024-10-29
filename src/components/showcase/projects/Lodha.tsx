import React from 'react';

import ResumeDownload from '../ResumeDownload';

export interface LodhaProps {}

const Lodha: React.FC<LodhaProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>LODHA</h1>
            <div className="text-block">
                <br />
                <p>
                    With a finance background, I shaped Lodha Group’s digital
                    strategy, diving into all things B2B marketing – Google Ads,
                    video shoots, event coverage, social media buzz,
                    newsletters, you name it. And yes, I got to create some fun,
                    topical content that made even real estate feel fresh in
                    2017.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Meeting Paris Hilton.
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

export default Lodha;
