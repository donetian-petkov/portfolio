export const Footer = () => {

    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const a_twitter = document.createElement('a');
    const i_twitter = document.createElement('i');
    const a_facebook = document.createElement('a');
    const i_facebook = document.createElement('i');
    const a_instagram = document.createElement('a');
    const i_instagram = document.createElement('i');
    const a_github = document.createElement('a');
    const i_github = document.createElement('i');

    p.textContent = 'Connect with me on: ';
    p2.textContent = 'View my projects on ';

    a_twitter.target = "_blank";
    a_twitter.href = 'https://twitter.com/DonetianP'
    i_twitter.className="fa-brands fa-x-twitter"
    a_twitter.appendChild(i_twitter);

    a_facebook.target = "_blank";
    a_facebook.href = 'https://www.facebook.com/rodger.nicklost';
    i_facebook.className = 'fa-brands fa-facebook'
    a_facebook.appendChild(i_facebook);

    a_instagram.target = "_blank";
    a_instagram.href = 'https://www.instagram.com/dokkyto';
    i_instagram.className = 'fa-brands fa-instagram';
    a_instagram.appendChild(i_instagram);

    a_github.target = "_blank";
    a_github.href = 'https://github.com/donetian-petkov';
    i_github.className = 'fa-brands fa-github';
    a_github.appendChild(i_github);

    p.appendChild(a_twitter);
    p.appendChild(a_facebook);
    p.appendChild(a_instagram);
    p2.appendChild(a_github);

    return [
        p,p2
    ]


}