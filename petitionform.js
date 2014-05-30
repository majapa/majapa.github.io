$(function() {
  $(".button").click(function() {
    // validate and process form here

    $('.error').hide();
    var fname = $("input#cons_first_name").val();
      if (fname == "") {
      $("label#first_name_error").show();
      $("input#cons_first_name").focus();
      return false;
    }
    var lname = $("input#cons_last_name").val();
      if (lname == "") {
      $("label#last_name_error").show();
      $("input#cons_last_name").focus();
      return false;
    }
      var email = $("input#cons_email").val();
      if (email == "") {
      $("label#email_error").show();
      $("input#cons_email").focus();
      return false;
    }
      var zip = $("input#cons_zip_code").val();
      if (zip == "") {
      $("label#zip_error").show();
      $("input#cons_zip_code").focus();
      return false;
    }
    var surveyid = $("input#survey_id").val();

         var dataString = 'fname=' + fname + 'lname=' + lname + '&email=' + email + '&zip=' + zip + '&surveyid=' + surveyid;
    //alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "http://www.tfn.org/site/Survey",
      data: dataString,
      success: function() {
        $('#petitionform').html("<div id='message'></div>");
        $('#message').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<i class=\"fa fa-2x fa-check-square-o\"></i>");
        });
      }
    });
    return false;
  });
});
