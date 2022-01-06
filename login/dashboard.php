<div class="dashboard">
    <div class="log">
    <?php
    if (isset($_SESSION['username'])) {
        echo "Welcome  " . $_SESSION['username'];
    ?>
    </div>     
    <!-- <div>
        <a href="logout.php"><input type="button" class="btn-logout" value="Logout"></a>

    </div> -->
    <div>
        <a onclick="location.href='../home.html'"><input type="button" class="btn-home" value="Continue"></a>
    </div>
    <?php
    }
    ?>
</div>


<script>
var variablejs = "<?php echo $_SESSION['username']; ?>" ;
// alert("category = " + variablejs);
// document.getElementById("dashboard").innerHTML = variablejs;
localStorage.userName = variablejs;
</script>