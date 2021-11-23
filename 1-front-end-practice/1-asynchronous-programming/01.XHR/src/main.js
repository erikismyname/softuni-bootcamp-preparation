import { URL_STRING } from './config/constants.js';
import { getRepos } from './api/api.js';
import { renderRepos } from './util/renderRepos.js';

startApp();

function startApp() {

    const ulEl = document.querySelector('ul');

    document
        .querySelector('button')
        .addEventListener('click', ev => onButtonClick(ev, ulEl));

}

async function onButtonClick(ev, ulEl) {

    try {

        const repos = await getRepos(URL_STRING);

        renderRepos(repos, ulEl);

        ev.target.disabled = true;

    } catch (err) {

        alert(err.message);

    }

}