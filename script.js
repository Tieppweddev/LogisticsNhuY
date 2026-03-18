// Cuộn mượt khi click vào Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Xử lý form gửi đi (giả lập)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Yêu cầu của bạn đã được gửi đi. Tôi sẽ liên hệ lại sớm nhất.');
    form.reset();
});