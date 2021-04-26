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

function check_substring(a, b) {
    if (a == "")
        return false;
    for (let i = 0; i < a.length; i++)
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

function up_button() {
    if ($("#btn").hasClass("arrowup")) {
        $("#btn").removeClass("arrowup");
        $("#btn").addClass("arrowdown");
    }
}

function down_button() {
    if ($("#btn").hasClass("arrowdown")) {
        $("#btn").removeClass("arrowdown");
        $("#btn").addClass("arrowup");
    }
}

function fix_border_input(check) {
    console.log(2);
    if (check == true) {
        if (!$(".myinput").hasClass("error_input")) {
            console.log(3);
            $(".myinput").addClass("error_input");
        }
    }
    else {
        if ($(".myinput").hasClass("error_input")) {
            $(".myinput").removeClass("error_input");
        }
    }
}

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

$('.myinput').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
        close_option();
        down_button();
    }
});   

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

$(document).mouseup(function (e) {
    var container = $("#combobox");

    // if the target of the click isn't the container nor a descendant of the container
    if (!$("#Other").hasClass("no_appear") || !$("#Male").hasClass("no_appear") || !$("#Female").hasClass("no_appear")) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(4);
            close_option();
            down_button();
        }
    }
});