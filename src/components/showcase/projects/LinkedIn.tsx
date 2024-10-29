import React from 'react';
import me from '../../../assets/pictures/AboutFigure1.png';

import ResumeDownload from '../ResumeDownload';

export interface LinkedInProps { }

const LinkedIn: React.FC<LinkedInProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>LINKEDIN</h1>
            <div className="text-block">
                <br />
                <p>
                    LinkedIn will always be memorable – it was my first pitch win and stretched my skills. From shaping strategy and interpreting data trends to technical writing and managing projects, every element demanded 100% of me (and a lot of coffee). The result? A steady stream of new projects and recognition that fueled my drive.
                </p>
                <br />
                <h2>Coffee Table Book</h2>
                <br />
                <p>
                    This was my brainchild for LinkedIn Talent Solutions: Leaders That Inspire, an annual coffee table book aimed at staffing entrepreneurs. By diving deep into the staffing industry, conducting interviews, and crafting compelling stories, the book became a favourite across LinkedIn India and global teams, generating real leads.
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
                <h2>Pharma Ebook</h2>
                <br />
                <p>
                    I also authored an ebook detailing the Pharma and Biotech industry's performance on LinkedIn. It meant hours interviewing leads, translating industry data and expert insights into a valuable, legally compliant asset.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Influencer Campaigns that raised the creative bar.
                        </sub>
                    </p>
                </div> */}
                <h2>Case Studies</h2>
                <br />
                <p>
                    Crafting case studies was a blend of research, data analysis, and storytelling. Each study was backed by data insights and structured to highlight solutions and results clearly, with a narrative that made complex B2B content engaging. Notably, I led a video case study for a top luxury brand, which included everything from research and guest interviews to video production and editing.
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

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default LinkedIn;
