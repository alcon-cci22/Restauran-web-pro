document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.getElementById('testimonials');
    const testimonialBoxes = document.querySelectorAll('#testimonials .testimonial-box');

    function checkVisibility() {
        testimonialBoxes.forEach((box, index) => {
            const bounding = box.getBoundingClientRect();
            const offset = window.innerHeight / 2;

            if (
                bounding.top <= window.innerHeight - offset &&
                bounding.bottom >= offset
            ) {
                box.classList.add('visible', 'animate'); // Agrega 'animate'
            } else {
                box.classList.remove('visible', 'animate');
            }
        });
    }

    function handleScroll() {
        checkVisibility();
    }

    window.addEventListener('scroll', handleScroll);
    // Ejecutar la función al cargar la página
    checkVisibility();
});
