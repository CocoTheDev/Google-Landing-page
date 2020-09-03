const sidebar_back = document.getElementById('modal-back');
const sidebar = document.getElementById('sidebar-container');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggle, false);
sidebar_back.addEventListener('click', toggle, false);

function toggle() {
    sidebar_back.classList.toggle('visible');
    sidebar.classList.toggle('show');
}