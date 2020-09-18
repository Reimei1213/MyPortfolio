$(function() {
    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html, body').animate({
            'scrollTop' : position
        }, 500);
    });

    $("#contactForm").validate({
        rules: {
            name: {
                required: "*お名前を入力してください", // 入力必須チェック
                rangelength: [1, 50], // 最小１文字、最大５０文字
            },
            email: {
                required: "*メールアドレスを入力してください", // 入力必須チェック
                email: "*正しいメールアドレス形式で入力してください", // メールアドレス形式チェック
            },
            message: {
                required: "*メッセージを入力してください" // 入力必須チェック
            }
        }
    });

    $('.hamburger-menu').on('click', function (){
        $('nav').addClass('is-opened');
        $('.header-shadow').addClass('is-enable');
    });

    $('.header-shadow').on('click', function (){
        $('nav').removeClass('is-opened');
        $(this).removeClass('is-enable');
    });
});
