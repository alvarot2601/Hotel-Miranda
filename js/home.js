const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

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