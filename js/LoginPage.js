const loginForm = document.querySelector(".form-body");
const usernameInput = document.querySelector(".form-input");
const userPasswordInput = document.querySelector(".form-password");
const inputErrorMessage = document.querySelector(".input-error-message").style.display = "none";
const passwordErrorMessage = document.querySelector(".password-error-message").style.display = "none";
const usernameInputStyle = document.querySelector("#input-styling").style.borderBottom = "none";
const PasswordInputStyle = document.querySelector("#password-styling").style.borderBottom = "none";

function render() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

usernameInput.addEventListener('click', () => {
    usernameInput.addEventListener('blur', () => {
        if (usernameInput.value == "") {
            document.querySelector(".input-error-message").style.display = "block";
            document.querySelector("#input-styling").style.borderBottom = "2px solid #e87c03"
        };
    });
});

userPasswordInput.addEventListener('click', () => {
    userPasswordInput.addEventListener('blur', () => {
        if (userPasswordInput.value == "") {
            document.querySelector(".password-error-message").style.display = "block";
            document.querySelector("#password-styling").style.borderBottom = "2px solid #e87c03"
        };
    });
});

loginForm.addEventListener('submit', e => {
    if (usernameInput.value == "" || userPasswordInput.value == "") {
        e.preventDefault();
        alert("Please fill in your details");
        return;
    }

    function passUserName() {
        const name = usernameInput.value;
        localStorage.setItem('userData', name);
    }

    passUserName();
    render();

    window.location.href = "LandingPage.html"
    e.target = ""
});

