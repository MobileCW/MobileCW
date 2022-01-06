<?php 
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="login-registration.js"></script>     
</head>
<body>
    <div class="lo-container">
        <?php 
            require_once "login-form.html";
        ?>
    </div>
</body>
</html>