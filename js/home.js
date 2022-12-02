const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    //autoHeight:true,
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });
  const swiperFoodMenu = new Swiper('.swiper--food-menu', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  const swiperRoom = new Swiper('.swiper--room', {
    direction: 'horizontal',
      loop: true,
      // If we need pagination
      //autoHeight:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
   
  const swiperRooms = new Swiper('.roomsSwiper', {
    autoHeight:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
 const swiperFood = new Swiper('.swiper--food', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  var swiper2 = new Swiper(".mySwiper", {
    autoHeight:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
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