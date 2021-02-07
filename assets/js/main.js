/*
Авторизация
 */



$('.login-btn').click(function (event) {
    event.preventDefault();

    let login = $('input[name="login"]').val(),
        password = $('input[name="password"]').val();

    $.ajax({
        url: 'vendor/signin.php',
        type: 'POST',
        dataType: 'json',
        data: {
            login: login,
            password: password
        },
        success : function(data) {
            console.log(data);
            $('.msg').removeClass('none').text(data);
        }
    });


});

