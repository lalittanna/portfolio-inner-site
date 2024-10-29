import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Window from '../os/Window';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';

import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

import ThreeM from '../showcase/projects/3M';
import Baccarose from '../showcase/projects/Baccarose';
import Parcos from '../showcase/projects/Parcos';
import LinkedIn from '../showcase/projects/LinkedIn';
import NiravModi from '../showcase/projects/NiravModi';
import Lodha from '../showcase/projects/Lodha';
import Kaya from '../showcase/projects/Kaya';
import HOQ from '../showcase/projects/HOQ';

export interface ShowcaseExplorerProps extends WindowAppProps { }

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Ruchika Jashnani - Showcase 2024"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Ruchika Jashnani'}
        >
            <BrowserRouter>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects/3m" element={< ThreeM />} />
                        <Route path="/projects/baccarose" element={<Baccarose />} />
                        <Route path="/projects/parcos" element={<Parcos />} />
                        <Route path="/projects/linkedin" element={<LinkedIn />} />
                        <Route path="/projects/linkedin" element={<LinkedIn />} />
                        <Route path="/projects/niravmodi" element={<NiravModi />} />
                        <Route path="/projects/lodha" element={<Lodha />} />
                        <Route path="/projects/kaya" element={<Kaya />} />
                        <Route path="/projects/hoq" element={<HOQ />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Window>
    );
};

export default ShowcaseExplorer;
