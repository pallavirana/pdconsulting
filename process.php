<?php

$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$message=$_POST["message"];

$recipient = "pallavi@ucreate.co.in";


        // Set the email subject.
        $subject = "Someone contact you";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {

            echo 1;
        } else {

            echo "Oops! Something went wrong and we couldn't send your message.";
        }



 ?>
