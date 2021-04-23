$(document).ready(function () {
    $(".combobox_button").click(function () {
        if ($("#combobox").hasClass("no_appear")) {
            $("#combobox").removeClass("no_appear");
            $("#btn").removeClass("arrowup");
            $("#btn").addClass("arrowdown");
        }
        else
        {
            $("#combobox").addClass("no_appear");
            $("#btn").removeClass("arrowdown");
            $("#btn").addClass("arrowup");
        }
    });
});