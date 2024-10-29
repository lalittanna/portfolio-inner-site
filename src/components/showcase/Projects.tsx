import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import project from '../../assets/pictures/projects/project-icon.gif';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <p>
                Click on one of the areas below to check out some of my favorite
                projects I've done in that field. I spent a lot of time to
                include a lot of visuals and interactive media to showcase each
                project. Enjoy!
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="3M"
                    subtitle=""
                    route="/projects/3m"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="BACCAROSE"
                    subtitle=""
                    route="/projects/baccarose"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="PARCOS"
                    subtitle=""
                    route="/projects/parcos"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="LINKEDIN"
                    subtitle=""
                    route="/projects/linkedin"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="NIRAV MODI"
                    subtitle=""
                    route="/projects/niravmodi"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="LODHA"
                    subtitle=""
                    route="/projects/lodha"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="KAYA"
                    subtitle=""
                    route="/projects/kaya"
                />
                <ProjectBox
                    icon={project}
                    iconStyle={styles.computerIcon}
                    title="HOUSE OF QUADRI"
                    subtitle=""
                    route="/projects/hoq"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 56,
        height: 56,
    },
    musicIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 21 * 2,
        height: 37 * 2,
    },
};

export default Projects;
