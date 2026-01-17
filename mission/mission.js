
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#313338';
        document.querySelector('#content').style.color = 'white';
        const contentElement = document.getElementById('content');
        contentElement.style.borderColor = "white";
        logo.src = 'photo/byui-logo-white.png';

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.querySelector('#content').style.color = 'black';
        const contentElement = document.getElementById('content');
        contentElement.style.borderColor = "black";
        logo.src = 'byui-logo.webp';

    }
}           
                    