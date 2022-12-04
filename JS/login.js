const loginForm = document.querySelector("#login-part");
const loginInput = document.querySelector("#login-form input");
const loginMessage = document.querySelector("#loginMessage");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintloginMessages(username);
}

function paintloginMessages(username) {
    loginMessage.classList.remove(HIDDEN_CLASSNAME);
    loginMessage.innerText = `Hello, ${username}.`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintloginMessages(savedUsername);
}