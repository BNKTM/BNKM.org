// Добавление наблюдателя Intersection Observer для анимаций при прокрутке

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
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
    } else {
        // Фолбэк для браузеров, не поддерживающих IntersectionObserver
        lazyVideos.forEach(function(video) {
            video.src = video.dataset.src;
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
