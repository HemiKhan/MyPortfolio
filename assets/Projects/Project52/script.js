$(".btnloginpage").click(function () {
    $("#card").css("transform", "rotateY(0deg)");
    $(".card-front").removeClass("hiddenfrontcard");
});

$(".btnsignuppage").click(function () {
    $("#card").css("transform", "rotateY(-180deg)");
    $(".card-front").addClass("hiddenfrontcard");
});

$('.toggleCheckbox').click(function () {
    if ($(this).is(':checked')) {
        $(".Dark").addClass("Light").removeClass("Dark");
        $("body").css("background", "#ecf0f3");
    }
    else {
        $(".Light").addClass("Dark").removeClass("Light");
        $("body").css("background", "#2a2b2f");
    }
});

$("#btnsignup").click(function () {
    localStorage.setItem('label-data', 'show');
});

$(window).on('load', function () {
    if (localStorage.getItem('label-data') != "hide") {
        if ($(".lbl").hasClass("lbl")) {
            $(".btnsignuppage").click();

            setTimeout(function () {
                $(".lbl").hide();
                localStorage.setItem('label-data', 'hide');
            }, 5000);
        }
    }
    else {
        $(".lbl").hide();
    }
});