let items = document.getElementsByClassName('nav');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hatef javer slide 5';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for(let i = 0; i < items.length; i++){
  items[i].style.backgroundColor = '#f4367c';
}