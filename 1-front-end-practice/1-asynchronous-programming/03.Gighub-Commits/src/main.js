import resolveUrl from './config/resolveUrl.js';
import request from './api/request.js';
import getDOMElements from './util/getDOMElements.js';
import renderCommits from './util/renderCommits.js';

attachEventListener();

function attachEventListener() {

    document
        .querySelector('#load-btn')
        .addEventListener('click', onButtonClick);

}

async function onButtonClick() {

    const { inputElUsername, inputElRepo, ulEl } = getDOMElements();

    const username = inputElUsername.value.trim();

    const repo = inputElRepo.value.trim();

    if (!username || !repo) return alert('Both username and repo are required!');

    const url = resolveUrl(username, repo);

    try {

        const commits = await request(url);

        renderCommits(commits, ulEl);

    } catch (err) {

        alert(err);

    }

}