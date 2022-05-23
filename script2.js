
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Script de deslizar hacia arriba
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Remover el smooth scroll momentaneamente
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Aplicar nuevamente el smooth scroll en los items del menu
        $('html').css("scrollBehavior", "smooth");
    });

    // Activar el script menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Script de animaciones de tipado
    var typed = new Typed(".typing", {
        strings: ["Trainee Developer.", "Developer.", "FrontEnd Developer.", "Designer."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Trainee Developer.", "Developer.", "Diseñador.", "FrontEnd Developer.", "Designer."],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});