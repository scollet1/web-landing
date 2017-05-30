var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');

form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Test1");
  // Update button text using innerHTML;
  uploadButton.innerHTML = 'Uploading...';

  // Get the selected files from the input;
  var files = fileSelect.files;
  // Create a new FormData object;
  var formData = new FormData();

  // Check the file type.
  file = files[0];
  if (!file.type.match('\\*\\.jgrv')) {
    alert('Not a valid file type, please use the .jgrv extension');
  }
  else {
    formData.append("file-select", file, file.name);
  }
  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  /**************************************************
  ** TODO : Validate file input for .jgrav extension;
  ** I don't know if this actually works;
  **************************************************/

  // Add the file to the request.
  formData.append('data', file, file.name);
  // Set up the request.
  var xhr = new XMLHttpRequest();
  // Open the connection.
  xhr.open('POST', "file:///nfs/2017/s/scollet/web-landing/handler.php", true); /* ARGUMENTS : HTTP Method=POST, URL Handler=handler.php, Asynchronous request?=true */
  // Set up a handler for when the request finishes.
  xhr.onload = function() {
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
