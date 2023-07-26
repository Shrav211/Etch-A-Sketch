const container = document.querySelector('#container');

function createDiv() {
    var div = document.createElement("div");
    div.className = "box";
    return div;
}

for(let i = 0; i < (16 * 16); i++) {
    container.appendChild(createDiv());
}

container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});