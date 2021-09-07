$('.welcome div div a').click(function(e){
    console.log("working");
    $('.active').removeClass('active');
    $(this).addClass('active');
});