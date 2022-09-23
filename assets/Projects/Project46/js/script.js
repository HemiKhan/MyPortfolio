$(".menutoggle").click(function () {
    $(".sideiconstext").toggleClass("showmenu");
    $(".container-fluid").toggleClass("movecontainer");
});

// Chat 1 Actions Start 
$(".chat1").one('click', function () {
    if ($(".chat1").hasClass("active")) {
        chat1data();
    }
});

$(".chat1").on('click', function () {
    if (!$(".chat1").hasClass("active")) {
        chat1data();
    }
});

function chat1data() {
    $(".chat1").addClass("active");
    $(".chat2").removeClass("active");
    $(".chat3").removeClass("active");
    $(".chat4").removeClass("active");
    $(".chat5").removeClass("active");

    var getchat1img = $(".chatimg1").attr("src");
    var getchat1icon = $(".chaticon1 i").attr("class");
    var getchat1name = $(".chat1name").text();
    var getchat1msg = $(".chat1msg").text();

    $(".chatimage").attr("src", getchat1img);
    $(".userdetail .usertitle i").attr("class", getchat1icon);
    $(".setchatname").text(getchat1name);
    $(".status").text("Online").css("color", "rgb(127, 209, 4)");
    $(".txt1").text(getchat1msg);
    $(".msgimage").attr("src", getchat1img);

    var Chat1Data1 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
        When you have a dream, you've got to grab it and never let go
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">1 day ago</span>`;

    var Chat1Data2 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
        You define your own life. Don’t let other people write your script.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">2 day ago</span>`;

    var Chat1Data3 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
        Life has got all those twists and turns.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">5 day ago</span>`;

    var Chat1Data4 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
    You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">9 day ago</span>`;

    var Chat1Data5 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
    No matter what people tell you, words and ideas can change the world
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">- day ago</span>`;

    var Chat1Data6 = `<div class="chat1msgs message mt-4">
    <img src=` + getchat1img + ` class="msgimage">
    <div class="message-text">
    Not having the best situation, but seeing the best in your situation is the key to happiness.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">- day ago</span>`;

    $('.message-body').append(Chat1Data1, Chat1Data2, Chat1Data3, Chat1Data4, Chat1Data5, Chat1Data6);

    if (!$(".chat2,.chat3,.chat4,.chat5").hasClass("active")) {
        $(".chat2msgs,.chat3msgs,.chat4msgs,.chat5msgs").hide().fadeout("slow");
    }
}
// Chat 1 Actions End 

// Chat 2 Actions Start 
$(".chat2").one('click', function () {
    if ($(".chat2").hasClass("active")) {
        chat2data();
    }
});

$(".chat2").on('click', function () {
    if (!$(".chat2").hasClass("active")) {
        chat2data();
    }
});

function chat2data() {
    $(".chat1").removeClass("active");
    $(".chat2").addClass("active");
    $(".chat3").removeClass("active");
    $(".chat4").removeClass("active");
    $(".chat5").removeClass("active");

    var getchat2img = $(".chatimg2").attr("src");
    var getchat2icon = $(".chaticon2 i").attr("class");
    var getchat2name = $(".chat2name").text();
    var getchat2msg = $(".chat2msg").text();

    $(".chatimage").attr("src", getchat2img);
    $(".userdetail .usertitle i").attr("class", getchat2icon);
    $(".setchatname").text(getchat2name);
    $(".status").text("Online").css("color", "rgb(127, 209, 4)");
    $(".txt1").text(getchat2msg);
    $(".msgimg1").attr("src", getchat2img);

    var Chat2Data1 = `<div class="chat2msgs message mt-4">
    <img src=` + getchat2img + ` class="msgimage">
    <div class="message-text">
    I care about decency and humanity and kindness. Kindness today is an act of rebellion
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">1 day ago</span>`;

    var Chat2Data2 = `<div class="chat2msgs message mt-4">
    <img src=` + getchat2img + ` class="msgimage">
    <div class="message-text">
    Believe you can and you’re halfway there
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">2 day ago</span>`;

    var Chat2Data3 = `<div class="chat2msgs message mt-4">
    <img src=` + getchat2img + ` class="msgimage">
    <div class="message-text">
    Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">5 day ago</span>`;

    var Chat2Data4 = `<div class="chat2msgs message mt-4">
    <img src=` + getchat2img + ` class="msgimage">
    <div class="message-text">
    Silence is the last thing the world will ever hear from me.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">9 day ago</span>`;

    $('.message-body').append(Chat2Data1, Chat2Data2, Chat2Data3, Chat2Data4);

    if (!$(".chat1,.chat3,.chat4,.chat5").hasClass("active")) {
        $(".chat1msgs,.chat3msgs,.chat4msgs,.chat5msgs").hide().fadeout("slow");
    }
}
// Chat 2 Actions End 

// Chat 3 Actions Start
$(".chat3").one('click', function () {
    if ($(".chat3").hasClass("active")) {
        chat3data();
    }
});

$(".chat3").on('click', function () {
    if (!$(".chat3").hasClass("active")) {
        chat3data();
    }
});

function chat3data() {
    $(".chat1").removeClass("active");
    $(".chat2").removeClass("active");
    $(".chat3").addClass("active");
    $(".chat4").removeClass("active");
    $(".chat5").removeClass("active");

    var getchat3img = $(".chatimg3").attr("src");
    var getchat3icon = $(".chaticon3 i").attr("class");
    var getchat3name = $(".chat3name").text();
    var getchat3msg = $(".chat3msg").text();

    $(".chatimage").attr("src", getchat3img);
    $(".userdetail .usertitle i").attr("class", getchat3icon);
    $(".setchatname").text(getchat3name);
    $(".status").text("Online").css("color", "rgb(127, 209, 4)");
    $(".txt1").text(getchat3msg);
    $(".msgimg1").attr("src", getchat3img);

    var Chat3Data1 = `<div class="chat3msgs message mt-4">
    <img src=` + getchat3img + ` class="msgimage">
    <div class="message-text">
    Try to be a rainbow in someone’s cloud.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">1 day ago</span>`;

    var Chat3Data2 = `<div class="chat3msgs message mt-4">
    <img src=` + getchat3img + ` class="msgimage">
    <div class="message-text">
    If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">2 day ago</span>`;

    $('.message-body').append(Chat3Data1, Chat3Data2);

    if (!$(".chat1,.chat2,.chat4,.chat5").hasClass("active")) {
        $(".chat1msgs,.chat2msgs,.chat4msgs,.chat5msgs").hide().fadeout("slow");
    }
}
// Chat 3 Actions End 

// Chat 4 Actions Start 
$(".chat4").one('click', function () {
    if ($(".chat4").hasClass("active")) {
        chat4data();
    }
});

$(".chat4").on('click', function () {
    if (!$(".chat4").hasClass("active")) {
        chat4data();
    }
});

function chat4data() {
    $(".chat1").removeClass("active");
    $(".chat2").removeClass("active");
    $(".chat3").removeClass("active");
    $(".chat4").addClass("active");
    $(".chat5").removeClass("active");

    var getchat4img = $(".chatimg4").attr("src");
    var getchat4icon = $(".chaticon4 i").attr("class");
    var getchat4name = $(".chat4name").text();
    var getchat4msg = $(".chat4msg").text();

    $(".chatimage").attr("src", getchat4img);
    $(".userdetail .usertitle i").attr("class", getchat4icon);
    $(".setchatname").text(getchat4name);
    $(".status").text("Online").css("color", "rgb(127, 209, 4)");
    $(".txt1").text(getchat4msg);
    $(".msgimg1").attr("src", getchat4img);

    var Chat4Data1 = `<div class="chat4msgs message mt-4">
    <img src=` + getchat4img + ` class="msgimage">
    <div class="message-text">
    Try to be a rainbow in someone’s cloud.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">1 day ago</span>`;

    var Chat4Data2 = `<div class="chat4msgs message mt-4">
    <img src=` + getchat4img + ` class="msgimage">
    <div class="message-text">
    If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">2 day ago</span>`;

    $('.message-body').append(Chat4Data1, Chat4Data2);

    if (!$(".chat1,.chat3,.chat2,.chat5").hasClass("active")) {
        $(".chat1msgs,.chat3msgs,.chat2msgs,.chat5msgs").hide().fadeout("slow");
    }
}
// Chat 4 Actions End 

// Chat 5 Actions Start 
$(".chat5").one('click', function () {
    if ($(".chat5").hasClass("active")) {
        chat5data();
    }
});

$(".chat5").on('click', function () {
    if (!$(".chat5").hasClass("active")) {
        chat5data();
    }
});

function chat5data() {
    $(".chat1").removeClass("active");
    $(".chat2").removeClass("active");
    $(".chat3").removeClass("active");
    $(".chat4").removeClass("active");
    $(".chat5").addClass("active");

    var getchat5img = $(".chatimg5").attr("src");
    var getchat5icon = $(".chaticon5 i").attr("class");
    var getchat5name = $(".chat5name").text();
    var getchat5msg = $(".chat5msg").text();

    $(".chatimage").attr("src", getchat5img);
    $(".userdetail .usertitle i").attr("class", getchat5icon);
    $(".setchatname").text(getchat5name);
    $(".status").text("Online").css("color", "rgb(127, 209, 4)");
    $(".txt1").text(getchat5msg);
    $(".msgimg1").attr("src", getchat5img);

    var Chat5Data1 = `<div class="chat5msgs message mt-4">
    <img src=` + getchat5img + ` class="msgimage">
    <div class="message-text">
    Try to be a rainbow in someone’s cloud.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">1 day ago</span>`;

    var Chat5Data2 = `<div class="chat5msgs message mt-4">
    <img src=` + getchat5img + ` class="msgimage">
    <div class="message-text">
    If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.
        <i class="fas fa-check-double"></i>
    </div>
    <span class="message-time">2 day ago</span>`;

    $('.message-body').append(Chat5Data1, Chat5Data2);

    if (!$(".chat1,.chat2,.chat3,.chat4").hasClass("active")) {
        $(".chat1msgs,.chat3msgs,.chat2msgs,.chat4msgs").hide().fadeout("slow");
    }
}
// Chat 5 Actions End 

$(document).on('click', '.Send-Msg', function () {
    var msgdata = $('.Input-Text').val();
    var getimg = $('.chatimage').attr('src');
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10)
        minutes = "0" + minutes;

    var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    var gettime = hours + ":" + minutes + " " + suffix;
    var date = new Date();
    var getdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    if (msgdata == "") {
        alert("Please Write Something..!");
    }
    else {
        var getmsgdata = `<div class="message mt-4">
        <img src=` + getimg + ` class="msgimage">
        <div class="message-text">
        ` + msgdata + `
            <i class="fas fa-check-double"></i>
        </div>
        <span class="message-time">
        ` + gettime + `
        </span>`;
        $('.message-body').append(getmsgdata);
        $('.Input-Text').val('');
    }

});

// pressing Enter key 
$(document).keydown(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        $('.Send-Msg').click();
    }
});
