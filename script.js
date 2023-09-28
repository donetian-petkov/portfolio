import {Home} from "./templates/index.js";
import {About} from "./templates/about.js";
import {Projects} from "./templates/projects.js";
import {Footer} from "./templates/footer.js";

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

function route() {
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');
    const hash = window.location.hash.substring(1);

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
    }

    let element = document.createElement("main");
    switch (hash) {
        case 'home':
            element.appendChild(Home());
            element.appendChild(About());
            element.appendChild(Projects())
            Footer().map(x => footer.appendChild(x));
            break;
        case 'about':
            element.appendChild(About());
            Footer().map(x => footer.appendChild(x));
            break;
        case 'projects':
            element.appendChild(Projects())
            Footer().map(x => footer.appendChild(x));
            break;
        case 'contact':
            Footer().map(x => footer.appendChild(x));
            break;
        default:
            element.appendChild(Home());
            element.appendChild(About());
            element.appendChild(Projects())
            Footer().map(x => footer.appendChild(x));
    }

    content.appendChild(element);
}
