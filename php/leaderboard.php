
<?php

  $con = mysqli_connect("localhost", 
		  "root", "", "leaderboard");

  $result = mysqli_query($con, "SELECT userName, 
  marks FROM leaderboard ORDER BY marks DESC");

  $ranking = 1;
	
  /* Fetch Rows from the SQL query */
  if (mysqli_num_rows($result)) {
	  while ($row = mysqli_fetch_array($result)) {
		  echo "<td>{$ranking}</td>
		  <td>{$row['userName']}</td>
		  <td>{$row['marks']}</td>";
		  $ranking++;
	  }
  }
  ?>