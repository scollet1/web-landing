var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');

form.onsubmit = submission_handler(event) {
  event.preventDefault();

  // Update button text.
  uploadButton.innerHTML = 'Uploading...';

  // Get the selected files from the input.
  var files = fileSelect.files;
  // Create a new FormData object.
  var formData = new FormData();

  // Check the file type.
  if (!file.type.match('*.jgrv')) {
    alert('Not a valid file type, please use the .jgrv extension');
    continue ;
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  /**************************************************
  // TODO : Validate file input for .jgrav extension;
  **************************************************/

  // Add the file to the request.
  formData.append('data', file, file.name);
  // Set up the request.
  var xhr = new XMLHttpRequest();
  // Open the connection.
  xhr.open('POST', 'handler.php', true); /* ARGUMENTS : HTTP Method=POST, URL Handler=handler.php, Asynchronous request?=true */
  // Set up a handler for when the request finishes.
  xhr.onload = load_handler() {
    if (xhr.status === 200) {
      // File(s) uploaded.
      uploadButton.innerHTML = 'Upload';
    } else {
      alert('An error occurred!');
    }
  };
  // Send the Data.
  xhr.send(formData);
}
