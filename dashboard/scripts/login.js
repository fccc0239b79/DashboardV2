'use strict';

window.addEventListener('load', function() {
  loginPanel();
  labels();
});

/**
 * loginPanel - creates login form elements
 */
function loginPanel() {
    var panel = window.loginForm;

    var h1 = document.createElement("h1");
        h1.id = "loginTitle"
    var form = document.createElement("form");
        form.setAttribute('method', 'post');
        form.setAttribute('action', '#');
        form.setAttribute('target', '_blank');
    var inputUsername = document.createElement("input");
        inputUsername.setAttribute('type', 'text');
        inputUsername.setAttribute('placeholder', 'Username');
    var inputPassword = document.createElement("input");
        inputPassword.setAttribute('type', 'password');
        inputPassword.setAttribute('placeholder', 'Password');
    var loginButton = document.createElement("button");
        loginButton.setAttribute('type', 'submit');
        loginButton.setAttribute('value', 'Login');
        loginButton.innerHTML = "Login";

        panel.appendChild(h1);
        panel.appendChild(form);
        form.appendChild(inputUsername);
        form.appendChild(inputPassword);
        form.appendChild(loginButton);

}

function labels() {
  document.getElementById("loginTitle").innerHTML = "BlackDragon Dashboard";
}
