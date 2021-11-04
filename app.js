import { pushLocal, createPlayer } from './utils.js';

const playerData = {
    name: 'noah',
    money: 50,
    img:''
};

pushLocal(playerData);

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (expect) =>{
    expect.preventDefault();
    const formData = new FormData(userForm);

    const userObj = createPlayer(formData);

    pushLocal(userObj);
    window.location.replace('./game');
});
