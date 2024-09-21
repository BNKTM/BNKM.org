// Плавный скролл к якорям
document.querySelectorAll('nav a[href^="#"], .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Кнопка "Наверх"
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Автообновление года в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Lazy Loading видео
document.addEventListener("DOMContentLoaded", function() {
    let lazyVideos = [].slice.call(document.querySelectorAll("iframe"));

    if ("IntersectionObserver" in window) {
        let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    video.target.src = video.target.dataset.src;
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(video) {
            lazyVideoObserver.observe(video);
        });
    }
});

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Простая валидация формы
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        // Показать сообщение об успешной отправке
        document.getElementById('form-message').textContent = 'Спасибо! Ваше сообщение отправлено.';
        this.reset();
    } else {
        // Показать сообщение об ошибке
        document.getElementById('form-message').textContent = 'Пожалуйста, заполните все поля.';
    }
});
