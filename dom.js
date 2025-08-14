// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// // document.all[8].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);



// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 4px #fff'
// header.style.borderBottom = 'solid 4px #000'


// GETELEMENTBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4'

// for (let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'yellow';
// }


// GETELEMENTSBYTAGNAME //
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'red';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4'

// for (let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow';
// }


// QUERYSELECTOR //

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 8px #ccc';

// let input = document.querySelector('input');
// input.value = 'hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';


// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// QUERYSELECTORALL //

// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent =  'hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc'
// }