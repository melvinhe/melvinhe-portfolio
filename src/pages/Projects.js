import React from 'react';
import NavBar from '../components/NavBar';
import ProjectBlock from './ProjectBlock';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import Section from './Section';
import Title from './Title';
import SkillsBlock from './SkillsBlock';

export default function Projects() {
    return (
        <div className="space-y-24">
            <NavBar />
            <Title
                title="Projects"
                quote="The best way to predict the future is to invent it."
                author="Alan Kay"
            />
            <Section>
                <ProjectBlock projects={projects} />
            </Section>
            <Section title="Skills">
                <SkillsBlock skills={skills}/>
            </Section>
        </div>
    );
}

