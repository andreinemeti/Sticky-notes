$(document).ready(function() {

    $("#addBtn").click(function() {
        shoppingList();
    });
    $("#removeBtn").click(function() {
        removeList();
    });

    $("#orange").click(function() {
        clickedOrangeBackground();
    });

    $("#blue").click(function() {
        clickedBlueBackground();
    });

    $("#red").click(function() {
        clickedRedBackground();
    });

    $("#pin").click(function() {
        dropAnimation();
    });

    $(function() {                      // *************************** DRAGGABLE DIV CONTAINER **************
    $("#container").draggable();
    });


    $('input').keypress(function(e) {  //when user presses return key
        if (e.which == 13) {
           shoppingList();
        }
    });


    function shoppingList() {
        var writtenItem = $("#writtenItem").val();
        var info = $(".info");
        if (writtenItem == 0) {
            info.addClass("error");
            info.removeClass("correct");
            info.removeClass("remove");
            info.html("");
        } else if ($("li").length > 6) {
            info.html("Too many list items. Grab another sticky note!");
            info.removeClass("correct");
        }else {
            AddSettings();
        }
    }

    function AddSettings() {
        var info = $(".info");
        var writtenItem = $("#writtenItem").val();
        $("ul").append("<li>" + writtenItem + "</li>");
        $("ul li").addClass("list-item");
        info.html(writtenItem + ' <i class="fa fa-check" aria-hidden="true"></i>');
        info.removeClass("error");
        info.removeClass("remove");
        info.addClass("correct");
        $('input[type="text"').val('');
        }


    function removeList() {
        if ($("li").length > 0) {
            $(".info").html($("li:last").text() + ' <i class="fa fa-times-circle" aria-hidden="true"></i>');
            $("li:last").remove();
            $(".info").addClass("remove");
            $(".info").removeClass("correct");
            $(".info").removeClass("error");
        } else {
            $(".info").removeClass("remove").html("");
        }
    }

    function clickedOrangeBackground() {
        $("#container").removeClass("blue");
        $("#container").removeClass("red");
        $("#container").addClass("orange");
        $("li").remove();
        $(".info").html("");
    }

    function clickedBlueBackground() {
        $("#container").removeClass("orange");
        $("#container").removeClass("red");
        $("#container").addClass("blue");
        $("li").remove();
        $(".info").html("");
    }

    function clickedRedBackground() {
        $("#container").removeClass("orange");
        $("#container").removeClass("blue");
        $("#container").addClass("red");
        $("li").remove();
        $(".info").html("");
    }


    function dropAnimation() {
        $("#container").toggleClass("animation");
        $("#pin").toggleClass("disappear");
        $("body").css('overflow', 'hidden')
        setTimeout(function () { 
            $('body').css('overflow', 'visible');
            }, 3350);
    }
    });

