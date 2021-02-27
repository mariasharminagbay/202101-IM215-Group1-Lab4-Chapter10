$(document).ready(function () {
    //populate with the images
    images.forEach(element => {
        var image = $("<img></img>").attr('src', 'images/square/' + element.path).attr('alt', element.title);
        $(".gallery").append(image);
    });


    //mouseenter
    $("img").mouseenter(function () {

        $(this).addClass("gray");
        var divprvw = $("<div></div>").attr('id', 'preview');
        var image = $("<img></img>").attr('src', $(this).attr('src').replace('square', 'medium')).attr('alt', $(this).attr('alt'));
        divprvw.append(image);
        images.forEach(element => {
            if (element.title == $(this).attr('alt')) {
                var p = $("<p></p>").html(element.title + " <br>" + element.city + ", " + element.country + " [" + element.taken + "]");
                divprvw.append(p);
            }
        });

        //step 6
        $("#preview").css('left', event.pageX + 10).css('top', event.pageY + 10);
        // step 7
        $("body").append(divprvw);

    });
    //mouseleave
    $("img").mouseleave(function () {
        $("#preview").remove();
        $(this).removeClass("gray");
    });

    //mousemove
    $("img").mousemove(function (event) {
        $("#preview").css('left', event.pageX + 10).css('top', event.pageY + 10);
    });

});