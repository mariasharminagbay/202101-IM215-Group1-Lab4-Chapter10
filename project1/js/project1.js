$(document).ready(function() {

    $("#thumbBox").click(function(event) {
        if (event.target && event.target.matches('img')) {
            var Img = event.target.cloneNode();
            Img.src = Img.src.replace('small','medium');
            $('#imgManipulated>img').replaceWith(Img);
            $('figcaption').replaceWith($('<figcaption> <em>' + Img.alt + '</em></br>' + Img.title + '</figcaption>'));
            filters();
        }
    });


$('#sliderOpacity').on('input', function(event) {
    $('#sliderOpacity').attr('value', event.target.value);
    $('#numOpacity').html(event.target.value);
    filters();
});


$('#sliderSaturation').on('input', function(event) {
    $('#sliderSaturation').attr('value', event.target.value);
    var val = event.target.value;
    val = (val / 3000 * 100).toFixed(2);
    $('#numSaturation').html(val);
    filters();
});


$('#sliderBrightness').on('input', function(event) {
    $('#sliderBrightness').attr('value', event.target.value);
    let val = event.target.value;
    val = (val / 300 * 100).toFixed(2);
    $('#numBrightness').html(val);
    filters();
});


$('#sliderHue').on('input', function(event) {
    $('#sliderHue').attr('value', event.target.value);
    $('#numHue').html(event.target.value);
    filters();
});


$('#sliderGray').on('input', function(event) {
    $('#sliderGray').attr('value', event.target.value);
    $('#numGray').html(event.target.value);
    filters();
});


$('#sliderBlur').on('input', function(event) {
    $('#sliderBlur').attr('value', event.target.value);
    $('#numBlur').html(event.target.value);
    filters();
});


function filters()
 {
    var fil = 'opacity(' + $('#sliderOpacity').attr('value') + '%)' +
        'brightness(' + $('#sliderBrightness').attr('value') + '%) ' +
        'saturate(' + $('#sliderSaturation').attr('value') + '%) ' +
        'grayscale(' + $('#sliderGray').attr('value') + '%) ' +
        'blur(' + $('#sliderBlur').attr('value') + 'px)' +
        'hue-rotate(' + $('#sliderHue').attr('value') + 'deg) ';

    $('#imgManipulated>img').css('filter', fil);

}

$('#resetFilters').on('click', function() {
    $('#imgManipulated>img').css('filter',
        'opacity(100%) ' +
        'saturate(100%) ' +
        'brightness(100%) ' +
        'hue-rotate(0deg) ' +
        'grayscale(0%) ' +
        'blur(0px)');
});

});
