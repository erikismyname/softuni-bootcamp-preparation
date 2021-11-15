export default function getDOMElements() {

    const inputElUsername = document.querySelector('#username');

    const inputElRepo = document.querySelector('#repo');

    const ulEl = document.querySelector('#commits');

    return { inputElUsername, inputElRepo, ulEl };

}