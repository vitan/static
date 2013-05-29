function attachment_post() {
  //Pseudo ajax post for file uploading
  $('#add-requirement').iframePostForm({
    json: true,
    complete: function(response) {
      if ( response.rc ) {
      } else {
      }
    }
  })
}
