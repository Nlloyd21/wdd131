let title = document.querySelector('h1');
console.log(title)

title.textContent = "Web Page Componenets";

let topic_title = document.getElementById('topics')
topic_title.style.color = 'purple';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let paragraph = document.querySelector('p');


/*two different ways to change the background color */

paragraph.classList.add('background');
//paragraph.style.backgroundColor = ('#000');

let image = document.querySelector('img');
image.setAttribute('src','images/Logohtml.png');
// image.src = 'images/Logohtml.png';


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'red';
})

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with JavaScript';
document.body.appendChild(newParagraph);
                
