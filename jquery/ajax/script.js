
$(function() {

  $('#loginForm').submit(function(e) {
    e.preventDefault();

    var username = $('#username').val();
    var password = $('#password').val();

    console.log(username);
    console.log(password);

    // debugger;

    $.post('http://localhost:3000/login', {
      username: username,
      password: password
    })
    .success(function(data) {
      console.log('success');

      $('#message')
        .removeClass('error')
        .addClass('success')
        .show()
        .text('yeah well done')
        .delay(1000)
        .fadeOut('slow');

    })
    .fail(function(err) {
      console.log('fail');

      $('#message')
        .removeClass('success')
        .addClass('error')
        .show()
        .text('oh no')
        .delay(1000)
        .fadeOut('slow');

    });

  });

});
