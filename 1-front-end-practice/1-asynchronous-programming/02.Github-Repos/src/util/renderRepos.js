export default function renderRepos(repos, parentEl) {

    const fragment = preRender(repos, parentEl);

    parentEl.appendChild(fragment);

}

function preRender(repos, parentEl) {

    [...parentEl.children].forEach(c => c.remove());

    const fragment = document.createDocumentFragment();

    repos.map(r => {

        const aEl = createDOMElement('a', r.full_name, { href: r.html_url });

        const liEl = createDOMElement('li');

        liEl.appendChild(aEl);

        fragment.appendChild(liEl);

    });

    return fragment;

}

function createDOMElement(type, content, attributes) {

    const element = document.createElement(type);

    if (content) element.textContent = content;

    if (attributes) {

        Object
            .entries(attributes)
            .forEach(([k, v]) => element[k] = v);

    }

    return element;

}