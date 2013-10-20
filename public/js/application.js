$(document).ready(function() {
  $('.edit-button').click(function(event){
    event.preventDefault();
    console.log('in edit button');
    $(this).closest('.editable').append('<button id="update-button"> Update </button>');
    $(this).closest('.editable').append('<input type="text" placeholder="title" class="pop-up">');
  });

  $('ul').on('click', '#update-button', function(event){  // EVENT DELAGATION/PROPAGATION
    event.preventDefault();
    console.log('in update button');
    var new_title = $('.pop-up').val();
    var current_id = $(this).closest('li').val();
    var title_area = $(this).closest('li');
    console.log(current_id);
    // console.log(new_title);
    $.ajax({
      url: "test",
      type: "post",
      data: {title: new_title, id: current_id},
      dataType: 'json'
    }).done(function(){
      title_area.text(new_title);
    });
  });













  // function getNewInput() {
  //   return $('<input type="text" />').attr({
  //       placeholder: 'title',
  //       class: 'pop-up'
  //     }).on('click', function() {
  //       console.log(123)
  //     })
  // }
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});



    // $.ajax({
    //   url: "test",
    //   type: "post",
    //   data: $('form').serialize(),
    //   dataType: 'json'
    // }).done(function(result) {

    // });