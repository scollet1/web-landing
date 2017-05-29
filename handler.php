<?php
$target_dir = "testdata/";
$target_file = $target_dir . basename($_FILES['userfile']['name']);
$uploadOk = 1;
$fileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image

/*
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES['userfile']['tmp_name']);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
*/



// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES['userfile']['size'] > 500000) { /* Some number we get to set */
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($fileType != "jgrv") {
    echo "Files must be uploaded with .jgrv extension";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
/*
  foreach ($_FILES['userfile']['error'] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
      $tmp_name = $_FILES['userfile']["tmp_name"][$key];
      // basename() may prevent filesystem traversal attacks;
      // further validation/sanitation of the filename may be appropriate
      $name = basename($_FILES["uploadData"]["name"][$key]);
      move_uploaded_file($tmp_name, "data/$name");
  }
}*/
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $target_file)) {
        echo "The file ". basename( $_FILES['userfile']['name']). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
/*foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
        // basename() may prevent filesystem traversal attacks;
        // further validation/sanitation of the filename may be appropriate
        $name = basename($_FILES["pictures"]["name"][$key]);
        move_uploaded_file($tmp_name, "data/$name");
    }
}*/

?>
