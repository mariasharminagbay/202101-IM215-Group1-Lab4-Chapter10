$(document).ready(function() {

    $("#thumbBox").click(function(event) {
        if (event.target && event.target.matches('img')) {
            var Img = event.target.cloneNode();
            Img.src = Img.src.replace('small','medium');
            $('#imgManipulated>img').replaceWith(Img);
            $('figcaption').replaceWith($('<figcaption> <em>' + Img.alt + '</em></br>' + Img.title + '</figcaption>'));
           // applyFilters();
        }
    })
});
