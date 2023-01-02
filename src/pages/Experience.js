import React from 'react';
import NavBar from '../components/NavBar';
import ExperienceBlock from './ExperienceBlock';
import experiences from '../data/experiences.json';
import Section from './Section';
import Title from './Title';

export default function Projects() {
    return (
        <div>
        <NavBar />
        <Title
            title="Experience"
            quote="Experience is the hardest kind of teacher. It gives you the test first and the lesson afterward."
            author="Oscar Wilde"
        />
        <Section title="Experience">
            <ExperienceBlock experiences={experiences}/>
        </Section>
        </div>
    );
}