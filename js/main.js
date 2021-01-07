/* Hamburger menu:
mostrare / nascondere il menu principale
Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS */


$(document).ready(function(){
    // Il click viene fatto su i perchè altrimenti su un qualsiasi tag a si aprirebbe il menù;
    $('.header-right a i').click(function(){
        $('.hamburger-menu').show();
    });

    $('.hamburger-menu a i').click(function(){
        $('.hamburger-menu').hide();
    });

});



// Modo alternatico con fadeIn&Out

/* $(document).ready(function(){
    // Il click viene fatto su i perchè altrimenti su un qualsiasi tag a si aprirebbe il menù;
    $('.header-right a i').click(function(){
        $('.hamburger-menu').fadeIn(800);
    });

    $('.hamburger-menu a i').click(function(){
        $('.hamburger-menu').fadeOut(800);
    });

}); */