export default function getDOMElements() {

    const inputEl = document.querySelector('#username');

    const ulEl = document.querySelector('#repos');

    return { inputEl, ulEl };

}