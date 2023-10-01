const words = ['apple', 'banana', 'orange', 'lemon', 'watermelon', 'kiwi'];
const divWord = document.querySelector('.word');

  
function showRandomWord() {
    let currentWord = words[Math.floor(Math.random() * words.length)];
    divWord.textContent = "";
    const fragment = new DocumentFragment();
    currentWord.split("").forEach(item => {
    const letter = document.createElement("span");
    letter.textContent = item;
    fragment.append(letter);
});

    divWord.append(fragment);
}

showRandomWord();

let i = 0;

document.addEventListener('keydown', function(event) {
const element = divWord.querySelectorAll('span');
if (event.key === element[i].textContent) {
element[i].className = "c";
i++;
if (i === element.length) {
    i = 0; 
    showRandomWord();
}
} else {
element[i].className = "w";
}
});
