// Here is Paul's Modified Script!
document.addEventListener('page:loaded', function() {
  console.log("theme inited");

  // 所有的 paul-testimonial-section 模块都给我设置一个轮播
  document.querySelectorAll(".paul-testimonial-section, .paul-product-testimonial-section").forEach(item => {
    const swiper = new Swiper("." + item.classList[1] + " .swiper", {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  });

  // 所有的 paul-collection-and-products-section 都要有轮播
  document.querySelectorAll(".paul-collection-and-products-section").forEach(item => {
    let slideNames = item.querySelectorAll(".grid");

    const swiper = new Swiper("." + item.classList[1] + " .swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          console.log('<span class="' + className + '">' + (slideNames[index].dataset.name || "No Name") + "</span>")
          return '<span class="' + className + '">' + (slideNames[index].dataset.name || "No Name") + "</span>";
        },
      },
    });
  });
});
