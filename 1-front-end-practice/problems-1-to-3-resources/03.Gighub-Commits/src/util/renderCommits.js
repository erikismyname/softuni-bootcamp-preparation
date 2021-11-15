export default function renderCommits(commits, parentEl) {

    const fragment = preRender(commits, parentEl);

    parentEl.appendChild(fragment);

}

function preRender(commits, parentEl) {

    [...parentEl.children].forEach(c => c.remove());

    const fragment = document.createDocumentFragment();

    commits.map(c => {

        const author = c.commit.author.name;

        const message = c.commit.message;

        const liEl = createDOMElement('li', `${author}; ${message}`)

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