window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector(".navbar-container").style.background = "rgb(20, 20, 20)"
    } else {
        document.querySelector(".navbar-container").style.background = "transparent"
    }
};

document.querySelector('#result').innerHTML = localStorage.getItem('userData');

// Landing Page script
const { createApp } = window.Vue;

const usernameProperty = {
    data() {
        return {
            username: "",
        }
    },
    methods: {
        saveItem() {
            this.username.push(userData.find(newUserData.name))
        }
    },
};

const accountName = createApp(usernameProperty);
window.addEventListener('DOMContentLoaded', () => {
    accountName.mount('#vue-styling')
});