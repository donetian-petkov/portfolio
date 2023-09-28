import {projects} from "./projectList.js";

import {ProjectCard} from "./projectCard.js";

export const Projects = () => {

    const section = document.createElement('section');
    section.id = "projects";
    section.className = "projects"

    projects.map(project => section.appendChild(ProjectCard(project)))

    return section;

}


