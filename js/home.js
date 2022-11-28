const toggleMenu = (e) => {
    
    if(e.target.id === 'open-menu') {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        document.getElementById("close-menu").classList.remove('inactive');
        document.getElementById("close-menu").classList.add('active');
        document.getElementById("menu-list").style.display= 'flex';
    }
    else {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        document.getElementById("open-menu").classList.remove('inactive');
        document.getElementById("open-menu").classList.add('active');
        document.getElementById("menu-list").style.display= 'none';
    }
   
   
    
}
document.querySelector("#open-menu").addEventListener('click', toggleMenu);
document.querySelector("#close-menu").addEventListener('click', toggleMenu);