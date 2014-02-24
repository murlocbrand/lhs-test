  $(document).ready(function () {
    $('.manifesto-item p').hide(); //hide initialy

    $('.manifesto-item').click(function () {
        var $this = $(this);

        $(this).children('.manifesto-item p').slideToggle(200);
    });
});