const x = document.querySelectorAll("p.intro");

const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

const h1Element = document.querySelectorAll("h1");
console.log(h1Element);

const list = document.querySelectorAll(".list");
console.log(list);

const listaDeElementos = document.querySelectorAll("ul > li");

listaDeElementos.forEach((item) => {
console.log(item);
});

const h1 = document.querySelector("h1");
h1.style.color = "blue";
