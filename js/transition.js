$(window).on('load',function () {
    endLoading();
});
setTimeout('endLoading()', 10000);

function endLoading(){
    $('.is-loading').fadeOut(1000, function(){
        $('.loading').fadeOut(800);
    });
}