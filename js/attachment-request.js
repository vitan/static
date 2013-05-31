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
}
