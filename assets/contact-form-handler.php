<?php
    $name = $_POST['email'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'weileen.chen@nyu.edu';
    $email_subject = 'WEBSITE: New Email';
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";
    
    $to = "weileen.chen@nyu.edu";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: contact.html");

?>