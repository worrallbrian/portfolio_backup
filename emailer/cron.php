<?php
if (!isset($_SESSION)) {
	session_start();
}

$emails_sent = 0;
$emails_sent_warning = 0;

try {
	$con = mysqli_connect("host", "username", "password", "database_name") or die("Failed to connect to database.");

	$sSQL = "SELECT COUNT(id) AS numrows
			FROM emails_sent
			WHERE created BETWEEN UNIX_TIMESTAMP(CONCAT(DATE_FORMAT(NOW(), '%Y-%m-01'), ' 00:00:00')) AND NOW()";

	$stmt = $con->prepare($sSQL);
	$stmt->execute();

	$result = $stmt->get_result();
	$r = $result->fetch_assoc();

	if (isset($r) && !empty($r) && isset($r['numrows']) && !empty($r['numrows'])) {
		$emails_sent = intval($r['numrows']);
	}

	if (isset($r)) {
		unset($r);
	}

	$stmt->close();
	$stmt->free_result();
	mysqli_free_result($result);

	if ($emails_sent > 48) {
		$emails_sent_warning = 2;
	} elseif ($emails_sent > 38) {
		$emails_sent_warning = 1;
	}

	$sSQL = "UPDATE email_throttle SET throttled = ".$emails_sent_warning." WHERE throttled != ".$emails_sent_warning;

	$stmt2 = $con->prepare($sSQL);
	$stmt2->execute();
	$stmt2->close();
	$stmt2->free_result();

	mysqli_close($con);

	echo "OK";
} catch (Exception $e) {
	echo str_replace(["'", '"', "`"], "", strip_tags(trim($e)));
}
?>
