export function renderRepos(repos, parentEl) {

    const fragment = document.createDocumentFragment();

    repos.forEach(r => {

        const aEl = createElement('a', r.full_name, { href: r.html_url });

        const liEl = createElement('li');

        liEl.appendChild(aEl);

        fragment.appendChild(liEl);

    });

    parentEl.appendChild(fragment);

}

function createElement(type, content, attributes) {

    const element = document.createElement(type);

    if (content) {

        element.textContent = content;

    }

    if (attributes) {

        Object
            .entries(attributes)
            .forEach(([k, v]) => element[k] = v);

    }

    return element;

}