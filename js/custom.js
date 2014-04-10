jQuery(document).ready(function () {

    /* ---------------------------------------------------------------------- */
    /*	Custom Functions
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $logo = $('#logo');

    // Show logo
    $('.tab-resume,.tab-portfolio,.tab-contact').click(function () {
        $logo.fadeIn('slow');
    });
    // Hide logo
    $('.tab-profile').click(function () {
        $logo.fadeOut('slow');
    });

    /* ---------------------------------------------------------------------- */
    /*	Menu
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $content = $("#content");

    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: "> .menu > ul > li",
        tabActiveClass: 'active',
    });

    // Hover menu effect
    $content.find('.tabs li a').hover(
        function () {
            $(this).stop().animate({ marginTop: "-7px" }, 200);
        }, function () {
            $(this).stop().animate({ marginTop: "0px" }, 300);
        }
    );
    /* ---------------------------------------------------------------------- */
    /*	Portfolio
     /* ---------------------------------------------------------------------- */

    // Needed variables
    var $container = $('#portfolio-list');
    var $filter = $('#portfolio-filter');

    // Run Isotope
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    // Isotope Filter
    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    // Portfolio image animation
    $container.find('img').adipoli({
        'startEffect': 'transparent',
        'hoverEffect': 'boxRandom',
        'imageOpacity': 0.6,
        'animSpeed': 100,
    });

    // Copy categories to item classes
    $filter.find('a').click(function () {
        var currentOption = $(this).attr('data-filter');
        $filter.find('a').removeClass('current');
        $(this).addClass('current');
    });

    /* ---------------------------------------------------------------------- */
    /*	Fancybox
     /* ---------------------------------------------------------------------- */
    $container.find('a').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 200,
        'speedOut': 200,
        'overlayOpacity': 0.6
    });

    /* ---------------------------------------------------------------------- */
    /*	Contact Form
     /* ---------------------------------------------------------------------- */

    $(document).ready(function () {
        // validate signup form on keyup and submit
        var validator = $("#contactform").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 2
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Por favor ingrese su nombre",
                    minlength: jQuery.format("Su nombre debera tener por lo menos {0} caracteres")
                },
                email: {
                    required: "Por favor ingrese una direccion de email valida",
                    minlength: "Por favor ingrese una direccion de email valida"
                },
                subject: {
                    required: "Por favor indique el motivo del mensaje",
                    minlength: jQuery.format("El motivo debera tener por lo menos {0} caracteres")
                },
                message: {
                    required: "Por favor ingrese su mensaje",
                    minlength: jQuery.format("El mensaje debera tener por lo menos {0} caracteres")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function (form) {
                $("#send").append('<img src="../images/sending-email.png" alt="sending" id="sending">');
                $(form).ajaxSubmit({
                    success: function (responseText, statusText, xhr, $form) {
                        $(form).slideUp("fast");
                        $("#response").html(responseText).hide().slideDown("fast");
                    }
                });
                return false;
            }
        });
    });
    /* ---------------------------------------------------------------------- */
    /*	Style switcher
     /* ---------------------------------------------------------------------- */

    $('.bg-switcher').click(
        function () {
            var bgNumber = $(this).attr("value");
            $('body').css("background-image", "url(images/bg" + bgNumber + ".png)");
        });
});	