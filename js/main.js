// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

// Initiate the wow.js animation library
new WOW().init();

// Fixed Navbar
$(window).scroll(function () {
    if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-white shadow');
        } else {
            $('.fixed-top').removeClass('bg-white shadow');
        }
    }
});

// Skills tab functionality
function toggleTab(tabId) {
    // Remove active class from all tabs and hide all content
    document.querySelectorAll('.tab-content > div').forEach(div => {
        div.classList.add('hidden');
    });
    document.querySelectorAll('.flex.rounded-lg.border-2 button').forEach(button => {
        button.classList.remove('active', 'bg-primary', 'text-white');
        button.classList.add('hover:bg-primary/10');
    });

    // Show selected tab content and highlight selected tab
    const selectedTab = document.getElementById(tabId);
    const selectedButton = event.currentTarget;
    selectedTab.classList.remove('hidden');
    selectedButton.classList.add('active', 'bg-primary', 'text-white');
    selectedButton.classList.remove('hover:bg-primary/10');
}

// Typed Initiate
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}

// Back to top button functionality
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});
