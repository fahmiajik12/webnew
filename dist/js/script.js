const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

  // Mengambil semua elemen <a> di dalam <li> dalam daftar menu
  var menuItems = document.querySelectorAll('.menu li a');

  // Loop melalui setiap elemen <a>
  menuItems.forEach(function(item) {
    // Menambahkan event listener untuk setiap elemen <a>
    item.addEventListener('click', function(e) {
      // Menghapus kelas "active" dari semua elemen <li> di dalam daftar menu
      menuItems.forEach(function(item) {
        item.parentElement.classList.remove('active');
      });

      // Menambahkan kelas "active" pada elemen <li> yang terkait dengan elemen <a> yang diklik
      e.target.parentElement.classList.add('active');
    });
  });
  
    function toggleActive(element) {
      var boxes = document.querySelectorAll('.box');
      
      boxes.forEach(function(box) {
        box.classList.remove('active');
      });
      
      element.classList.add('active');
    }
