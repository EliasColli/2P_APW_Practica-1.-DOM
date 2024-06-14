const x = document.getElementsByClassName('intro');
console.log(x);

for (let i = 0; i < elementosIntro.length; i++) {
    elementosIntro[i].style.color = 'yellow';
}

for (let i = 0; i < elementosIntro.length; i++) {
    elementosIntro[i].innerHTML = "Este es el párrafo número " + (i + 1) + " con la clase 'intro'.";
}

for (let i = 0; i < elementosIntro.length; i++) {
    elementosIntro[i].classList.remove('intro');
}

for (let i = 0; i < elementosIntro.length; i++  ) {
    elementosIntro[i].style.border = '4px solid blue';
}