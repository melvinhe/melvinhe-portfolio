import React from "react";
import NavBar from "../components/NavBar";
import ProjectBlock from "./ProjectBlock";
import projects from "../data/projects.json";
import Section from "./Section";
import Title from "./Title";

export default function About() {
    return (
        <div>
        <NavBar />
        <Title
            title="About"
            quote="The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
            Don't settle. As with all matters of the heart, you'll know when you find it."
            author="Steve Jobs"
        />
        <section id="about" class="content-section">
            <h3 class="line-right"> About Me </h3>
            <div id="my-info">
                <div id="autobiography">
                    <p> Hi! My name is Melvin He, and I'm currently pursuing a B.S. in Computer Science and Applied Mathematics at Brown University.  </p>
                    <p> My primary interests lie in Software Engineering and exploring Mathematics research. </p>
                    <p> Some of my other hobbies and passions include: </p> 
                    <ul>
                        <li> Sentence </li>
                        <li> Sentence </li>
                        <li> Sentence </li>
                        <li> Sentence </li>
                    </ul> 
                </div>            
            </div>
        </section>
        </div>
    );
}
