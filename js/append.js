// practice:01

//where to add
const   placesList = document.getElementById("places-container");
// what to be add 
const li = document.createElement('li')
li.innerText = 'pahartoli bon';
// add the child 
placesList.appendChild(li)

// practice :02 
const froutsList = document.getElementById("frouts-item");
const li1 = document.createElement('li');
li1.innerText= 'asdfghjkl-lkjhgfdsasdfghjgfds';

froutsList.appendChild(li1)
// practice:03
const domDerebeda = document.getElementById('hijibiji999');
const li2 = document.createElement('li');
li2.innerText = 'dom dom doma dom dom';

domDerebeda.appendChild(li2)
// * * * * * * * added a seciton
//where to be addded
const mainContainer = document.getElementById("main-container");
// what to added
const section = createElement('section')
const h1 = createElement('h1')
h1.innerText = 'hijibijib SECtion er header';
section.appendChild(h1);
mainContainer.appendChild(section);



