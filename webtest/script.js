// --- KHAI BÁO BIẾN ---
let currentSlideIndex = 0;

// Tự động đếm số lượng slide
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; 

// --- CÁC HÀM CHỨC NĂNG ---

// 1. Đóng màn hình Intro
function closeIntro() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
}

// 2. Mở lại màn hình Intro (khi bấm logo)
function showIntro() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}

// 3. Đóng Menu Masonry
function closeMenu() {
    goToSlide(2); 
}

// 4. Chuyển Slide
function goToSlide(index) {
    // Kiểm tra an toàn: Nếu index âm thì về 0
    if (index < 0) index = 0;
    // Nếu index gọi tới slide chưa có, quay về 0
    if (index >= totalSlides) index = 0;

    currentSlideIndex = index;

    // Xử lý Slide (Ẩn hết slide cũ, hiện slide mới)
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlideIndex].classList.add('active');

    // Xử lý Tab bên dưới
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Chỉ tô màu Tab nếu nó tồn tại (để tránh lỗi khi mở Menu Fullscreen không có Tab)
    if (tabs[currentSlideIndex]) {
        tabs[currentSlideIndex].classList.add('active');
    }
}

// 5. Nút Next (Slide kế tiếp)
function nextSlide() {
    goToSlide(currentSlideIndex + 1);
}