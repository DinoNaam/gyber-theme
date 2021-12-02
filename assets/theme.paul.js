// Here is Paul's Modified Script!
document.addEventListener('page:loaded', function() {
  console.log("theme inited");

  // 所有的 paul-testimonial-section 模块都给我设置一个轮播
  document.querySelectorAll(".paul-testimonial-section").forEach(item => {
    const swiper = new Swiper("." + item.classList[1] + " .swiper", {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  })
});
