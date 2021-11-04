import { pushLocal, createPlayer } from './utils.js';

const story = document.getElementById('story-intro');
const userForm = document.getElementById('user-form');
const main = document.getElementById('main-section');
const wizard = document.getElementById('wizard');

setTimeout(() => {
    story.classList.remove('hidden'); 
    story.classList.add('unhidden');
}, 2000);

setTimeout(() => {
    story.classList.remove('unhidden'); 
    story.classList.add('hidden'); 
    main.classList.remove('hidden');
    main.classList.add('unhidden');
}, 10000);

setTimeout(() => {
    wizard.classList.remove('hidden');
    wizard.classList.add('unhidden');
}, 1000);

userForm.addEventListener('submit', (expect) =>{
    expect.preventDefault();
    const formData = new FormData(userForm);

    const userObj = createPlayer(formData);

    pushLocal(userObj);
    window.location.replace('./game');
});

