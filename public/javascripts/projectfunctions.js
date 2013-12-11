  $(document).ready(function () {
    $('.manifesto.desc').hide(); //hide initialy

    $('.manifesto.item').click(function () {
        var $this = $(this);

        $(this).children('.manifesto.desc').slideToggle(200, function () {
          
        });
    });
});