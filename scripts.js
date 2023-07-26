let gridNumber = prompt("Enter the number of the grid");

const container = document.querySelector('#container');

function createDiv() {
    var div = document.createElement("div");
    div.className = "box";
    return div;
}

for(let i = 0; i < (gridNumber*gridNumber); i++) {
    container.appendChild(createDiv());
}

container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});

container.style["grid-template-columns"] = `repeat(${gridNumber}, 1fr`;
container.style["grid-template-rows"] = `repeat(${gridNumber}, 1fr)`;
document.body.appendChild(container);