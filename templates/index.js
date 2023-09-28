export const Home = () => {

    const hero = document.createElement('hero');
    const img = document.createElement('img');
    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    hero.className = 'hero';
    hero.id = 'hero';
    img.className = 'hero__image';
    img.src = 'https://www.donetianpetkov.com/wp-content/uploads/2023/09/hero.png';
    img.alt = 'hero-image';
    article.className = 'hero__text';
    h1.textContent = `Hey, Donnie here!`;
    p1.textContent = 'Traveller in spirit';
    p2.textContent = 'Geek in mind';
    p3.textContent = 'Cinephile by heart';

    article.appendChild(h1);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    hero.appendChild(img);
    hero.appendChild(article);

    return hero;

}