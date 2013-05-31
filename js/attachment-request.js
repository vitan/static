function attachment_post() {
  //Pseudo ajax post for file uploading
  $('.add-attachment').iframePostForm({
    json: true,
    complete: function(response) {
      if( response.rc == 0 ) {
        alert(response.data.success);
      } else {
      }
    }
  })
};

function attachment_delete(selector) {
  $.ajax({
    url: $(selector).attr('href'),
    type: 'POST',
    dataType: 'json',
    success: function (response) {
      if ( response.rc == 0 ) {
        alert(response.data.success);
      } else {
      }
    }
  });
};

function attachment_init() {
        attachment_post();
        $('.attachment-delete').live('click', function() {
            event.preventDefault();
            attachment_delete($(this));
    });
}
