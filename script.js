const navItems =document.querySelector('.nav_items');
const openNavBtn =document.querySelector('#open_nav-btn');
const closeNavBtn =document.querySelector('#close_nav-btn');

// opens nav dropdown

const openNav =() => {
    navItems.style.display ='flex'
    openNavBtn.style.display ='none'
    closeNavBtn.style.display ='inline-block';
}

// closes nav dropdown
const closeNav =() => {
    navItems.style.display ='none'
    openNavBtn.style.display ='inline-block'
    closeNavBtn.style.display ='none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



const sidebar =document.querySelector('aside');
const showSidebarBtn =document.querySelector('#show_sidebar-btn');
const hideSidebarBtn =document.querySelector('#hide_sidebar-btn');

// show sidebar on small devices

const showsidebar =() => {
    sidebar.style.left='0';
    showSidebarBtn.style.display='none';
    hideSidebarBtn.style.display='inline-block';
}
// hide sidebar on small devices

const hidesidebar =() => {
    sidebar.style.left='-100%';
    showSidebarBtn.style.display='inline-block';
    hideSidebarBtn.style.display='none';
}

showSidebarBtn.addEventListener('click', showsidebar);
hideSidebarBtn.addEventListener('click', hidesidebar);