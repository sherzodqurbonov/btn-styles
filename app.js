"use strict";

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('blue'));
// console.log(btns[0].classList.remove('a'));
// console.log(btns[0].classList.toggle('a'));

btns[0].addEventListener('click', () => {
//     if(!btns[1].classList.contains('blue')){
//         btns[1].classList.add('blue');
//     }else{
//         btns[1].classList.remove('blue');
//     }

        btns[1].classList.toggle('blue');
});


