const sidebar_back = document.getElementById('modal-back');
const sidebar = document.getElementById('sidebar-container');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggle, false);
sidebar_back.addEventListener('click', toggle, false);

function toggle() {
    console.log('hello');
    sidebar_back.classList.toggle('show');
    sidebar.classList.toggle('show');

    
    // sidebar_back.style.right = '0';
    // sidebar.style.right = 'null';
    // sidebar.style.left = '0';
}