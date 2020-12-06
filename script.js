console.log(document.getElementById(1));
let headerTitle = document.getElementById(1);
let header = document.getElementById(2);
console.log(headerTitle);
headerTitle.textContent = 'header_one -> hello hatef javeri';
headerTitle.innerText = 'header_one -> goodbye hatef javeri';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>hello hatef javeri</h3>';
header.style.borderBottom = 'solid 3px #000';