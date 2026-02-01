// Khai báo biến quản lý slide hiện tại
let currentSlideIndex = 0;

// Lấy danh sách tất cả các slide và các tab điều hướng
const slides = document.querySelectorAll('.slide');
const tabs = document.querySelectorAll('.tab-item');

// Hàm hiển thị slide dựa theo số thứ tự (index)
function showSlide(index) {
    // 1. Ẩn tất cả các slide đang hiện
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // 2. Bỏ trạng thái active của tất cả các tab dưới
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 3. Hiện slide mới
    slides[index].classList.add('active');

    // 4. Active tab mới tương ứng
    if(tabs[index]) {
        tabs[index].classList.add('active');
    }

    // Cập nhật biến hiện tại
    currentSlideIndex = index;
}

// Hàm xử lý khi bấm nút "Next" to đùng
function nextSlide() {
    let nextIndex = currentSlideIndex + 1;
    
    // Nếu hết slide thì quay về slide đầu tiên (0)
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    
    showSlide(nextIndex);
}

// Hàm xử lý khi bấm vào các số 1, 2, 3, 4 ở dưới
function goToSlide(index) {
    showSlide(index);
}

// Khởi chạy slide đầu tiên khi vừa vào trang
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});