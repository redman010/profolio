

$(function(){
    $('a').click(function(){
        var selected = $(this);
        $('a').removeClass('.active');
        $(selected).addClass('.active');
    });

var $a = $('.a'),
$b =$('.b'),
$c =$('.c'),
$d =$('.d'),
$home =$('.home'),
$aboutus =$('.aboutus');
$gallery  =$('.gallery');
$contact  =$('.contact');

$(document).ready(function() {
    $home.fadeOut();
    $aboutus.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    });

$('.a').on('click', function(event){
    $home.fadeIn();
    $aboutus.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    });


$('.b').on('click', function(event){
    $home.fadeOut();
    $aboutus.fadeIn();
    $gallery.fadeOut();
    $contact.fadeOut();
});
$('.c').on('click', function(event){
    $home.fadeOut();
    $aboutus.fadeOut();
    $gallery.fadeIn();
    $contact.fadeOut();
});
$('.d').on('click', function(event){
    $home.fadeOut();
    $aboutus.fadeOut();
    $gallery.fadeOut();
    $contact.fadeIn();
});
});

