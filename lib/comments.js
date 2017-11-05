'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here


function hideErrors(){
  $("#com-name-error").hide()
  $("#com-email-error").hide()
  $("#comment-error").hide()
}

function hideForm(){
  $("#add-comment").hide()
}

function addCommentListener(){
  $("#show-comment-form").click(function()
    {
      $("#add-comment").show()
    }
  ) 
}

function cancelListener(){
  $("#cancel").click(function(){
    hideForm();
  })
}

function validateName(){
  var name = $("#comment-name").val()
  if (name.length < 3){
    $("#com-name-error").show();
    return false
  }
}

function validateEmail(){
  var email = $("#com-email").val()
  if (email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null){
    $("#com-email-error").show()
    return false
  }
}

function validateComment(){
  var comment = $("#comment").val()
  if (comment == ""){
    $("#comment-error").show()
    return false
  }
}

function submitCommentListener(){
  $("#add-comment").submit(function(e)
  {
    e.preventDefault();
    if (validateName() == false || validateEmail() == false || validateComment() == false){
      return
    }
    else {
      $("#posts").append(
      '<div class="newcomment"><span class="name">'

      + $("#comment-name").val() + 

      '</span><span class="email">'

      + $("#com-email").val() + 

      '<span class="date">'

      + (new Date).toDateString() + 

      '</span><p class="comment">'

      + $("#comment").val() + 

      '</p></div>')
    }
  })
}

