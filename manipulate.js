var Options = ["Nam", "Nữ", "Khác"];
var Options_id = ["#Male", "#Female", "#Other"];
// khi bat dau an la no se xuat phat tu phan tu ngoai cung
var now_down = -1, now_up = 4;

// hien combobox
$(document).ready(function () {
    $(".combobox_button").click(function () {
        if ($("#btn").hasClass("arrowup")) {
            $("#Male").removeClass("no_appear");
            $("#Female").removeClass("no_appear");
            $("#Other").removeClass("no_appear");
            $("#btn").removeClass("arrowup");
            $("#btn").addClass("arrowdown");
        }
        else
        {
            $("#Male").addClass("no_appear");
            $("#Female").addClass("no_appear");
            $("#Other").addClass("no_appear");
            $("#btn").removeClass("arrowdown");
            $("#btn").addClass("arrowup");
        }
    });
});

// lay so be hon

function min(a, b) {
    return (a < b) ? a : b;
}

// kiem tra xem a co phai la chuoi con cua b khong

function check_substring(a, b) {
    if (a == "")
        return false;
    for (let i = 0; i < min(a.length, b.length); i++)
    {
        if (a[i] == b[i] || a[i] == b[i].toUpperCase()) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

// chuyen mui ten len tren

function up_button() {
    if ($("#btn").hasClass("arrowup")) {
        $("#btn").removeClass("arrowup");
        $("#btn").addClass("arrowdown");
    }
}

// chuyen mui ten xuong duoi

function down_button() {
    if ($("#btn").hasClass("arrowdown")) {
        $("#btn").removeClass("arrowdown");
        $("#btn").addClass("arrowup");
    }
}

// dong option

function close_option() {
    if (!$("#Other").hasClass("no_appear")) {
        $("#Other").addClass("no_appear");
    }
    if (!$("#Male").hasClass("no_appear")) {
        $("#Male").addClass("no_appear");
    }
    if (!$("#Female").hasClass("no_appear")) {
        $("#Female").addClass("no_appear");
    }
}

// hien vien do neu nhap sai

function fix_border_input(check) {
    console.log(2);
    if (check == true) {
            console.log(3);
            $(".myinput").css("border-color", "red");
    }
    else {
        $(".myinput").css("border-color", "black");
    }
}

// xu ly chi 1 option duoc chon cung 1 luc

function selected_option(optionId) {
    for (let i = 0; i < Options.length; i++) {
        if (Options_id[i] == optionId)
            $(Options_id[i]).css("background-color", "red");
        else
            $(Options_id[i]).css("background-color", "#7575e6");
    }
}

// xu ly input

$(".myinput").on("input", function () {
    var s = $(".myinput").val();
    let check = 0;
    //console.log(s);
    var male = "nam";
    var female = "nữ";
    var other = "khác";
    if (check_substring(s, male) == true) {
        if ($("#Male").hasClass("no_appear")) {
            $("#Male").removeClass("no_appear");
        }
        check++;
    }
    else {
        if (!$("#Male").hasClass("no_appear")) {
            $("#Male").addClass("no_appear");
        }
    }
    if (check_substring(s, female) == true) {
        if ($("#Female").hasClass("no_appear")) {
            $("#Female").removeClass("no_appear");
        }
        check++;
    }
    else {
        if (!$("#Female").hasClass("no_appear")) {
            $("#Female").addClass("no_appear");
        }
    }
    if (check_substring(s, other) == true) {
        if ($("#Other").hasClass("no_appear")) {
            $("#Other").removeClass("no_appear");
        }
        check++;
    }
    else {
        if (!$("#Other").hasClass("no_appear")) {
            $("#Other").addClass("no_appear");
        }
    }
    if (check > 0) {
        up_button();
        fix_border_input(false);
    }
    else {
        console.log(1);
        down_button();
        fix_border_input(true);
    }
});

// click option

$("#Male").click(function () {
    close_option();
    $(".myinput").val("Nam");
    down_button();
});

$("#Female").click(function () {
    close_option();
    $(".myinput").val("Nữ");
    down_button();
});

$("#Other").click(function () {
    close_option();
    $(".myinput").val("Khác");
    down_button();
});

// hover option

$("#Male").hover(function () {
    $(".myinput").val("Nam");   
    selected_option("#Male");
});

$("#Female").hover(function () {
    $(".myinput").val("Nữ");
    selected_option("#Female");
});

$("#Other").hover(function () {
    $(".myinput").val("Khác");
    selected_option("#Other");
});

// kiem tra xem co dang hien option khong

function check_show() {
    if (!$("#Female").hasClass("no_appear") || !$("#Male").hasClass("no_appear") || !$("#Other").hasClass("no_appear"))
        return true;
    return false;
}

// khi an phim enter

$('.myinput').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // an enter
    {
        close_option();
        down_button();
    }
});   

// khi an di xuong

$(function () {
    $(document).keydown(function (e) {
        key = e.which;
        if (check_show()) {
            if (key == 40) // di xuong
            {
                if (now_down == Options.length - 1)
                    now_down = 0;
                else
                    now_down = now_down + 1;
                $(".myinput").val(Options[now_down]);
                selected_option(Options_id[now_down]);
            }
            if (key == 38) // di len
            {
                if (now_up == 0)
                    now_up = Options.length - 1;
                else
                    now_up = now_up - 1;
                $(".myinput").val(Options[now_up]);
                selected_option(Options_id[now_up]);
            }
        }
    });  
});  

// click chuot ra ngoai

window.addEventListener('click', function (event) {
    var _input = document.getElementById('genderInput');
    var _btn = document.getElementById('btn');
    var _option = document.getElementById('combobox');
    if (event.target != _input && event.target != _btn && event.target != _option) {
        console.log(check_show());
        if (check_show()) {
            close_option();
            down_button();
        }
    }
});
