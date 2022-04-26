$("section.start").on("click", function () {
    $("div.puck, .one, .two, .info").toggleClass("play");
    $(".press").toggleClass("show");
})