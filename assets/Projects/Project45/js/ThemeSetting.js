

$(document).ready(function () {
    if (localStorage.getItem('dark-mode') == "Dark") {
        // if the above is 'dark' then apply .dark to the body
        $('.Light').removeClass('Light').addClass('Dark');
        $('.BackgroundLight').removeClass('BackgroundLight').addClass('BackgroundDark');
        $('.fleck-light').removeClass('fleck-light').addClass('fleck-dark');
        $('.Darktheme').removeClass('Darktheme').addClass('Lighttheme');
        $(".DarkLightTheme").toggleClass("active");
    };

    if (localStorage.getItem('dark-mode') == 'Light') {
        // if the above is 'Light' then apply .dark to the body
        $('.Dark').removeClass('Dark').addClass('Light');
        $('.BackgroundDark').removeClass('BackgroundDark').addClass('BackgroundLight');
        $('.fleck-dark').removeClass('fleck-dark').addClass('fleck-light');
        $('.Lighttheme').removeClass('Lighttheme').addClass('Darktheme');
    }
});



$('.DarkLightTheme').click(function () {

    $(".DarkLightTheme").toggleClass("active");

    if ($(".DarkLightTheme").hasClass("active")) {
        $('.Light').removeClass('Light').addClass('Dark');
        $('.BackgroundLight').removeClass('BackgroundLight').addClass('BackgroundDark');
        $('.fleck-light').removeClass('fleck-light').addClass('fleck-dark');
        $('.Darktheme').removeClass('Darktheme').addClass('Lighttheme');
        localStorage.setItem('dark-mode', 'Dark');
    }
    else {
        $('.Dark').removeClass('Dark').addClass('Light');
        $('.BackgroundDark').removeClass('BackgroundDark').addClass('BackgroundLight');
        $('.fleck-dark').removeClass('fleck-dark').addClass('fleck-light');
        $('.Lighttheme').removeClass('Lighttheme').addClass('Darktheme');

        localStorage.setItem('dark-mode', 'Light');
    }
});

// Theme Setting Start
$('.settingiconmove').click(function () {
    $('.settingicon').toggleClass('move');
    $('.Settingmenu').toggleClass('move');
    $('.DarkLightTheme').toggleClass('show');

    $(".btnmenu").removeClass("active").removeClass("clickcolorfill");
    $(".togglebarmove").css("height", "0");
    $(".togglebarmove .wrapper").css("height", "0");

    $(".btncategory").removeClass("clickcolorfill");
    $('.sidebarmove').css('width', '0');
    $('.sidebarnav .wrapper').css('width', '0');
    $('.contentmove').css('margin-left', '0');
    $(".btncategory,.txtshopcategories,.closest").removeClass("active");

    $(".Account").removeClass("showaccount");
    $(".btnsigninup").removeClass("clickcolorfill");

    $('.secondheader ul li .home-show').removeClass('active');
    $('.secondheader .homeactive').removeClass('active');

});

$('.choosetemplet-drop').click(function () {
    $('.choosetemplet-list').toggleClass('show');
});

// Icon span active script start
$(".choosetheme1").click(function () {
    $(".choosetheme1").addClass("active");
    $(".choosetheme2").removeClass("active");
    $(".choosetheme3").removeClass("active");
});

$(".choosetheme2").click(function () {
    $(".choosetheme2").addClass("active");
    $(".choosetheme3").removeClass("active");
    $(".choosetheme1").removeClass("active");

    $(".choosetheme span").css("color", "#fff")
});

$(".choosetheme3").click(function () {
    $(".choosetheme3").addClass("active");
    $(".choosetheme1").removeClass("active");
    $(".choosetheme2").removeClass("active");
    $(".choosetheme span").css("color", "#fff")
});
// Icon span active script End

// ChooseTheme Start

$('.choosetheme1').click(function () {
    $('.Dark').removeClass('Dark').addClass('Light');
    $('.royal-blue').removeClass('royal-blue').addClass('Light');

    $('.bgdark').removeClass('bgdark').addClass('bglight');
    $('.bgroyal-blue').removeClass('bgroyal-blue').addClass('bglight');

    $('.backgroundhere').removeClass('backgroundhere').addClass('bglight');

    $('.BackgroundDark').removeClass('BackgroundDark');
    $('.BackgroundLight').removeClass('BackgroundLight');
});

$('.choosetheme2').click(function () {
    $('.Light').removeClass('Light').addClass('Dark');
    $('.royal-blue').removeClass('royal-blue').addClass('Dark');

    $('.bglight').removeClass('bglight').addClass('bgdark');
    $('.bgroyal-blue').removeClass('bgroyal-blue').addClass('bgdark');

    $('.backgroundhere').removeClass('backgroundhere').addClass('bgdark');

    $('.BackgroundDark').removeClass('BackgroundDark');
    $('.BackgroundLight').removeClass('BackgroundLight');
});

$('.choosetheme3').click(function () {
    $('.Light').removeClass('Light').addClass('Dark royal-blue');
    $('.Dark').removeClass('Dark').addClass('Dark royal-blue');

    $('.bglight').removeClass('bglight').addClass('bgroyal-blue');
    $('.bgdark').removeClass('bgdark').addClass('bgroyal-blue');

    $('.backgroundhere').removeClass('backgroundhere').addClass('bgroyal-blue');

    $('.BackgroundDark').removeClass('BackgroundDark');
    $('.BackgroundLight').removeClass('BackgroundLight');
});
// ChooseTheme End

// ChooseCard Start

$('.choosecard1').click(function () {
    $('.secondcard').removeClass('secondcard').addClass('firstcard');
    $('.thirdcard').removeClass('thirdcard').addClass('firstcard');
});

$('.choosecard2').click(function () {
    $('.firstcard').removeClass('firstcard').addClass('secondcard');
    $('.thirdcard').removeClass('thirdcard').addClass('secondcard');
});

$('.choosecard3').click(function () {
    $('.firstcard').removeClass('firstcard').addClass('thirdcard');
    $('.secondcard').removeClass('secondcard').addClass('thirdcard');
});
// ChooseCard End

// Theme Setting End

