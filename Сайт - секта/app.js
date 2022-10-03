$(function() {
    /* Fixed Header */
    let header = $("#header");

    let intro = $("#intro");
    let introH = intro.innerHeight(); // Возвращает высоту элемента, включая внутренние отступы, в пикселях. работаем с параграфами
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

        $(window).on("scroll resize", function() {
            introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();

            checkScroll(scrollPos, introH);
        });

        function checkScroll(scrollPos, introH) {
            if( scrollPos > introH ) {header.addClass("fixed");}
            else {header.removeClass("fixed");}    
    }



    /* scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll'); //позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или Node.setUserData().
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({scrollTop: elementOffset - 70}, 700);

    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});
