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

$(".myinput").on("input", function () {
    var s = $(".myinput").val();
    //console.log(s);
    var male = "nam";
    var female = "nữ";
    var other = "khác";
    if (check_substring(s, male) == true) {
        if ($("#Male").hasClass("no_appear")) {
            $("#Male").removeClass("no_appear");
        }
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
    }
    else {
        if (!$("#Other").hasClass("no_appear")) {
            $("#Other").addClass("no_appear");
        }
    }
});