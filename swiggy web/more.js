document.addEventListener('DOMContentLoaded', function() {
    var btnmore = document.getElementById('btnmore');
    var modelmore = document.getElementById('Back');
    var closeBtn = document.querySelector('.close');

    btnmore.addEventListener('click', function() {
        modelmore.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modelmore.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modelmore) {
            modelmore.style.display = 'none';
        }
    });
});
