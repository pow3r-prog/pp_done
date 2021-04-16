
// let plane_1 = 1;
// let plane_2 = 2;
// let plane_3 = 3;



// console.log(plane_1);

// setTimeout(() => {
//     console.log(plane_2);
// }, 1000)

// console.log(plane_3);


// function f1() {
//     fetch('js/plane_1.js')
//         .then(data => {
//             return data.text()
//         })
//         .then(data => {
//             console.log(data);
//         })
// }

// function f2() {
//     fetch('js/plane_2.txt')
//         .then(data => {
//             return data.text()
//         })
//         .then(data => {
//             console.log(data);
//         })
// }


// function f3() {
//     fetch('js/plane_3.php')
//         .then(data => {
//             return data.text()
//         })
//         .then(data => {
//             console.log(data);
//         })
// }


// f1();
// f2();
// f3();

// async function f1() {
//     let plane_1 = await fetch('js/plane_1.js');
//     return plane_1.text();
// }

// async function f2() {
//     let plane_2 = await fetch('js/plane_2.txt');
//     return plane_2.text();
// }

// async function f3() {
//     let plane_3 = await fetch('js/plane_3.php');
//     return plane_3.text();
// }

// async function go() {
//     let a = await f1();
//     console.log(a);
//     let b = await f2();
//     console.log(b);
//     let c = await f3();
//     console.log(c);
// }

// go();