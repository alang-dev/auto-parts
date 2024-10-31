

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.newheader');
    var navbar1 = document.querySelector('.header');
    
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled'); 
        navba1r.classList.add('display-none'); 
    } else {
        navbar.classList.remove('scrolled'); 
        navbar1.classList.remove('display-none'); 
    }
});

// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) { 
//         navbar.classList.add('scrolled'); 
//     } else {
//         navbar.classList.remove('scrolled'); 
//     }
// });

// Mảng chứa các đường dẫn đến ảnh nền
const images = [
    './img/slider-1.jpg',
    './img/slider-3.jpg'
];

let currentIndex = 0; // Bắt đầu từ ảnh đầu tiên
const header = document.getElementById('header');

// Hàm thay đổi ảnh nền
function changeBackgroundImage() {
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Lặp lại khi hết mảng
}

// Thay đổi ảnh nền mỗi 5 giây
setInterval(changeBackgroundImage, 5000);

// Khởi động slide bằng cách thiết lập ảnh đầu tiên
changeBackgroundImage();
