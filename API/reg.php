<?php

$result = 'fail';


if (
	isset($_POST['p_name'] ) &&
	isset($_POST['p_surname']) &&
isset($_POST['p_age']) &&
isset($_POST['p_email']) &&
isset($_POST['p_city']) &&
isset($_POST['p_arrive_method'])
)
{
$p_name = $_POST['p_name'];
$p_surname = $_POST['p_surname'];
$p_age = $_POST['p_age'];
$p_email = $_POST['p_email'];
$p_city = $_POST['p_city'];
$p_arrive_method = $_POST['p_arrive_method'];
	
	
$servername = "localhost";
$username = "test";
$password = "sqapa";
$dbname = "usb_reg";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($conn, "utf8");
$conn->set_charset("utf8");

$sql = "INSERT INTO `reg_list`(`p_name`, `p_surname`, `p_age`, `p_email`, `p_city`, `p_arrive_method`) VALUES ('".$p_name."','".$p_surname."','".$p_age."','".$p_email."','".$p_city."','".$p_arrive_method."')";

if ($conn->query($sql) === TRUE) {    
	$result = 'success';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	

}






echo $result;



?>