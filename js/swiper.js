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
      slidesPerView: 1,
      breakpoints: {
        1000: {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 40,
        }
      },
      // If we need pagination
      //autoHeight:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
  const swiperRooms2 = new Swiper('.swiper--rooms', {
    direction: 'horizontal',
      loop: true,
      // If we need pagination
      //autoHeight:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
  const swiperRooms = new Swiper('.swiper--rooms2', {
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
