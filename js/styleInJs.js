// practice:01
/**
const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.border= "1px solid steelblue";
    section.style.marginTop = '5px';
    section.style.borderRadius= '5px';
    section.style.paddingLeft= '10px'
};
// const placesContainer = document.getElementById('places-container')
// placesContainer.style.backgroundColor = 'yellow';
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-color');


// practice:02
const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.backgroundColor = 'yellow'
    // section.style.textAlign = 'center'
    section.style.border = '1px solid lightblue';
    section.style.marginTop = '10px';
    section.style.borderRadius = '7px'
    section.style.paddingLeft = '10px'
}
const fruitsContainer = document.getElementById('fruits-container')
fruitsContainer.style.backgroundColor = 'tomato';
fruitsContainer.classList.add('text-align');
// fruitsContainer.classList.remove('text-align');

*/
// practice:03
const sections = document.querySelectorAll('section');
for (const section of sections) {
    console.log('section');
    section.style.backgroundColor = 'yellow';
    section.style.border = '1px solid red';
    section.style.borderRadius = '5px';
    section.style.marginTop = '5px';
    section.style.paddingLeft = '20px'
}
const documentContainer = document.getElementById('document-container')
documentContainer.classList.add('text-align');
documentContainer.classList.remove('text-align')