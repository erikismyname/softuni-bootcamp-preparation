import resolveURL from './config/resolveURL.js';
import getRepos from './api/request.js';
import getDOMElements from './util/getDOMElements.js';
import renderRepos from './util/renderRepos.js';

attachEventListener();

function attachEventListener() {

    document
        .querySelector('#load-btn')
        .addEventListener('click', onButtonClick);

}

async function onButtonClick() {

    const { inputEl, ulEl } = getDOMElements();

    const username = inputEl.value.trim();

    if (!username) return alert('Please provide a username!');

    try {

        const url = resolveURL(username);

        const repos = await getRepos(url);

        renderRepos(repos, ulEl);


    } catch (err) {

        alert(err);

    }

}