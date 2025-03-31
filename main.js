


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        spedd:1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                addButtonListeners(); // добавляем обработчики после инициализации
            },
            slideChange: function () {
                addButtonListeners(); // повторно навешиваем обработчики после смены слайдов
            }
        }
    });

    function addButtonListeners() {
        document.querySelectorAll(".more-btn").forEach((btn) => {
            btn.onclick = function () {
                const text = this.previousElementSibling;
                if (text) {
                    text.classList.toggle("hidden");
                    this.textContent = text.classList.contains("hidden") ? "Подробнее" : "Скрыть";
                }
            };
        });
    }
});