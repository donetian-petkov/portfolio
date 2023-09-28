export const ProjectCard = (project) => {

    const article = document.createElement('article');
    const div_img = document.createElement('div');
    const div_text = document.createElement('div');
    const anchor_img = document.createElement('a');
    const anchor_text = document.createElement('a');
    const img_front = document.createElement('img');
    const img_back = document.createElement('img');
    const title = document.createElement('h2');
    const p = document.createElement('p');

    img_front.id = `${project.id}-img`;
    img_front.className = 'projects__card__img__front';
    img_front.src = project.img;
    img_front.alt = `${project.id}-img`;

    img_back.id = `${project.id}-img-2`;
    img_back.className = 'projects__card__img__back';
    img_back.src = project.img2;
    img_back.alt = `${project.id}-img-2`;

    anchor_img.target = "_blank";
    anchor_img.href = project.link;
    anchor_text.target = "_blank";
    anchor_text.href = project.link;

    p.textContent = project.descr;
    title.textContent = project.title;

    div_text.className = 'projects__card__text';
    div_img.className = 'projects__card__img';

    article.id = project.id;
    article.className = 'projects__card';

    anchor_img.appendChild(img_front);
    anchor_img.appendChild(img_back);
    div_img.appendChild(anchor_img);

    anchor_text.appendChild(title);
    div_text.appendChild(anchor_text);
    div_text.appendChild(p);

    article.appendChild(div_img);
    article.appendChild(div_text);

    return article;

}