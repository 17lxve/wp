<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$phone = $_POST['Phone'];
$major = $_POST['Major'];
$formcontent = "From: $name \n Phone: $phone \n Call Back:
$call \n Website: $website \n Priority: $priority \n Type:
$type \n Message: $message";
$recipient = "kouadiobhegnino@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='textdecoration:none;color:#ff0099;'> Return Home</a>";
?>
