import React from 'react';
import NavBar from '../components/NavBar';
import ProjectBlock from './ProjectBlock';
import projects from '../data/projects.json';
import Section from './Section';

export default function Projects() {
    return (
        <div>
            <NavBar />
            {/*Projects section*/}
            <Section title="Projects">
                <ProjectBlock projects={projects}/>
            </Section>
        </div>
    );
}