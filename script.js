console.log(document.getElementById('header-one'));
let headerTitle = document.getElementById('header-one');
let header = document.getElementById('header-two');
//sdf
console.log(headerTitle);
headerTitle.textContent = 'header_one -> hello hatef javeri';
headerTitle.innerText = 'header_one -> goodbye hatef javeri';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>hello hatef javeri</h3>';
header.style.borderBottom = 'solid 3px #000';