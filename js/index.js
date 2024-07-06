
let leftMenuWidth = $('.leftMenu').outerWidth(); 
$('.leftMenu').animate({marginLeft: -leftMenuWidth}, 0); 
$('.homeContact, .slider-aside').animate({marginLeft: 0}, 0); 

$('.slider-aside').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: leftMenuWidth}, 500);
    $('.leftMenu').animate({marginLeft: 0}, 500);
});


$('#btnClose').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: 0}, 500);
    $('.leftMenu').animate({marginLeft: -leftMenuWidth}, 500);
});


$('.innerFirst').css('display', 'block');
$('.sliderDown .toggle').on('click', function (e) {

    $('.inner').not($(this).next()).slideUp(500);

    $(e.target).next().slideToggle(500);
});

// Scroll Behavior


$('.scrollbtn').on('click', function () {
    $('html,body').animate({scrollTop: 0}, 750);
});


$(window).on('scroll', function () {
    if (Number($(window).scrollTop()) > 750) {
        $('.scrollbtn').css('display', 'flex');
    }
    if (Number($(window).scrollTop()) < 750) {
        $('.scrollbtn').css('display', 'none').fadeOut(500);
    }
});


$(".leftMenu a").on('click', function (e) {
    var sectionId = $(e.target).attr('href'); 
    var positionOfSection = $(sectionId).offset().top; 
    $('html, body').animate({scrollTop: positionOfSection}, 2000); 
});

// Countdown
window.onload = function() {
    countDownToTime("25 December 2024 9:56:00"); 
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime() / 1000; 
    let now = new Date().getTime() / 1000; 
    let timeDifference = futureDate - now; 

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * 24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
    let secs = Math.floor(timeDifference - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

    
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`);

    setInterval(function() {
        countDownToTime(countTo);
    }, 1000); 
}

// Contact
$('textarea').keydown(function (e) {
    let lengths = this.value; 
    console.log(lengths.length);

    if (lengths.length < 100) {
        $('#remchar').html(`${100 - lengths.length}`); 
    }
    if (lengths.length > 100) {
        $('#remchar').html(`Your available characters finished 0`); 
    }
});
