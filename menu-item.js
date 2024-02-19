document.addEventListener("DOMContentLoaded", function() {
    const foodMenuItems = document.querySelectorAll('.food-menu-item');

    function checkVisibility() {
        foodMenuItems.forEach(item => {
            const bounding = item.getBoundingClientRect();
            if (bounding.top < window.innerHeight && bounding.bottom > 0) {
                item.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    // Ejecutar la función al cargar la página
    checkVisibility();
});





