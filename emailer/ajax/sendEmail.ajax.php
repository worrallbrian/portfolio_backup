<?php
if (!isset($_SESSION)) {
	session_start();
}

date_default_timezone_set("America/Toronto");

$baddies = ["'", '"', "`", ";", "\0", "\Z"];
$goodies = "/[^0-9.]/";

$email = "";
if (isset($_REQUEST['email']) && !empty($_REQUEST['email'])) {
	$email = str_replace($baddies, "", strip_tags(trim($_REQUEST['email'])));
}

$ip_address = "";
if (isset($_SERVER['HTTP_CLIENT_IP']) && !empty($_SERVER['HTTP_CLIENT_IP'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['HTTP_CLIENT_IP'])));
} elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['HTTP_X_FORWARDED_FOR'])));
} elseif (isset($_SERVER['HTTP_X_FORWARDED']) && !empty($_SERVER['HTTP_X_FORWARDED'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['HTTP_X_FORWARDED'])));
} elseif (isset($_SERVER['HTTP_FORWARDED_FOR']) && !empty($_SERVER['HTTP_FORWARDED_FOR'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['HTTP_FORWARDED_FOR'])));
} elseif (isset($_SERVER['HTTP_FORWARDED']) && !empty($_SERVER['HTTP_FORWARDED'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['HTTP_FORWARDED'])));
} elseif (isset($_SERVER['REMOTE_ADDR']) && !empty($_SERVER['REMOTE_ADDR'])) {
	$ip_address = preg_replace($goodies, "", strip_tags(trim($_SERVER['REMOTE_ADDR'])));
}

if (strlen($ip_address) > 16) {
	$ip_address = substr($ip_address, 0, 16);
}

$browser_info = "";
if (isset($_SERVER['HTTP_USER_AGENT']) && !empty($_SERVER['HTTP_USER_AGENT'])) {
	$browser_info = str_replace($baddies, "", strip_tags(trim($_SERVER['HTTP_USER_AGENT'])));

	if (strlen($browser_info) > 250) {
		$browser_info = substr($browser_info, 0, 250);
	}
}

$data = [];

/* Red herring */
if (isset($_REQUEST['message']) && !empty($_REQUEST['message'])) {
	$data['error'] = "Error: Invalid request attempted.";
} elseif (empty($email)) {
	$data['error'] = "Error: E-Mail address cannot be empty.";
} elseif ((strlen($email) > 250) || (!filter_var($email, FILTER_VALIDATE_EMAIL))) {
	$data['error'] = "Error: Invalid E-Mail address.";
} else {
	$emails_sent = 0;
	$emails_sent_warning = 0;
	$send_email = 1;

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

		if ($emails_sent > 38) {
			if ($emails_sent > 48) {
				$emails_sent_warning = 2;
				$send_email = 0;
			} elseif ($emails_sent == 48) {
				$emails_sent_warning = 2;
			} else {
				$emails_sent_warning = 1;
			}
		}

		$sSQL = "UPDATE email_throttle SET throttled = ".$emails_sent_warning." WHERE throttled != ".$emails_sent_warning;

		$stmt2 = $con->prepare($sSQL);
		$stmt2->execute();
		$stmt2->close();
		$stmt2->free_result();

		$sSQL = "INSERT INTO emails_sent
				(id, email_address, ip_address, browser_info)
				VALUES
				(NULL, \"".$email."\", \"".$ip_address."\", \"".$browser_info."\")";

		$stmt3 = $con->prepare($sSQL);
		$stmt3->execute();
		$stmt3->close();
		$stmt3->free_result();

		mysqli_close($con);

		$data['result'] = "OK";
	} catch (Exception $e) {
		$data['error'] = str_replace($baddies, "", strip_tags(trim($e)));
	}

	if (isset($data['result']) && (!strcmp($data['result'], "OK"))) {
		if ($send_email == 1) {
			$subject = "Fake Sales Receipt from BrianWorrallPortfolio.000webhostapp.com";

			$headers = "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=utf-8\r\n";
			$headers .= "From: webmaster\r\n";
			$headers .= "Reply-To: webmaster\r\n";
			$headers .= "X-Mailer: PHP/".phpversion()."\r\n";

			$transaction_id = "FAKE_".mt_rand(10000000, 99999999);
			$agent_id = mt_rand(1000, 9999);
			$temp = time();
			$date_of_sale = date("l F j, Y", $temp).", <span style=\"white-space:nowrap\">".date("g:i a", $temp)." EST</span>";
			$temp = strtotime("+3 months", $temp);
			$arrival_date = date("l F j, Y", $temp).", <span style=\"white-space:nowrap\">2:00 pm EST</span>";
			$departure_date = date("l F j, Y", strtotime("+7 days", $temp)).", <span style=\"white-space:nowrap\">11:00 am EST</span>";
			$reserv_date1 = date("l F j, Y", strtotime("+2 days", $temp)).", <span style=\"white-space:nowrap\">7:30 pm EST</span>";
			$reserv_date2 = date("l F j, Y", strtotime("+4 days", $temp)).", <span style=\"white-space:nowrap\">6:45 pm EST</span>";
			$reserv_date3 = date("l F j, Y", strtotime("+5 days", $temp)).", <span style=\"white-space:nowrap\">8:00 am EST</span>";
			
$body = "<!DOCTYPE html>\n";
$body .= "<html>\n";
$body .= "<head>\n";
$body .= "<meta charset=\"utf-8\" />\n";
$body .= "<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\n";
$body .= "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n";
$body .= "<title>Fake Sales Receipt from Basics Resort</title>\n";
$body .= "</head>\n";
$body .= "<body style=\"width:100%;max-width:500px;text-align:center;margin:auto\">\n";
$body .= "<div style=\"width:100%;border:1px solid #1F00D5;border-radius:10px\">\n";
$body .= "<table style=\"width:100%;margin-bottom:1.5em\">\n";
	$body .= "<tr>\n";
		$body .= "<td style=\"width:100%;color:#FF0000;font-style:italic;font-size:70%;padding:5px\">*** THIS IS NOT A REAL RECEIPT. DO NOT EXPECT CHARGES OR GOODS DELIVERED. ANY RESEMBLANCE TO ANY BUSINESSES IS PURELY COINCIDENTAL. ***</td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:center;background:#1F00D5;color:#FFF5EE;border:1px solid #000000;padding:25px 10px 25px 10px;font-weight:bold;font-size:150%\">Basics Resort</td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:left;padding:30px 5px 5px 5px\">Thank you for your purchase of a vacation package from Basics Resort. Here are the details of your order:<br /><br /><hr style=\"height:0;border-bottom:1px solid #1F00D5\" /></td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:left;font-weight:bold;padding-top:15px;padding-left:5px\">INVOICE</td>\n";
	$body .= "</tr></tr>\n";
		$body .= "<td style=\"width:100%\"><table style=\"width:100%;border:1px solid #1F00D5;text-align:left\">\n";
			$body .= "<tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Purchase Date</td>\n<td style=\"width:60%;padding:5px\">".$date_of_sale."</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px;background:#EEEEEE\">Transaction ID</td>\n<td style=\"width:60%;padding:5px;background:#EEEEEE\">".$transaction_id."</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Agency</td>\n<td style=\"width:60%;padding:5px\"><a href=\"\" style=\"color:#000000;text-decoration:none;border:none\">Example2.com</a></td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px;background:#EEEEEE\">Agent ID</td>\n<td style=\"width:60%;padding:5px;background:#EEEEEE\">".((($agent_id % 2) == 0) ? "Amy" : "Steve")." ".$agent_id."</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Arrival Date</td>\n<td style=\"width:60%;padding:5px\">".$arrival_date."</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px;background:#EEEEEE\">Departure Date</td>\n<td style=\"width:60%;padding:5px;background:#EEEEEE\">".$departure_date."</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Name</td>\n<td style=\"width:60%;padding:5px\">John Smith</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px;background:#EEEEEE\">Phone</td>\n<td style=\"width:60%;padding:5px;background:#EEEEEE\">555-555-5556</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Address</td>\n<td style=\"width:60%;padding:5px\"><a href=\"\" style=\"color:#000000;text-decoration:none;border:none\">2 Main Street, Toronto, Ontario, Canada <span style=\"white-space:nowrap\">M4E 2V4</span></a></td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px;background:#EEEEEE\">Number of Guests</td>\n<td style=\"width:60%;padding:5px;background:#EEEEEE\">4</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:40%;padding:5px\">Special Care / Diet</td>\n<td style=\"width:60%;padding:5px\">-</td>\n";
			$body .= "</tr>\n";
		$body .= "</table></td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:left;font-weight:bold;padding-top:30px;padding-left:5px\">PURCHASES</td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:left\"><table style=\"width:100%;border:1px solid #1F00D5;text-align:left\">\n";
			$body .= "<tr>\n";
				$body .= "<td style=\"width:60%;padding:5px\">All-Inclusive Villa room @ 7 days</td>\n<td style=\"width:40%;padding:5px;text-align:right\">$3,500.00</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;padding:5px;background:#EEEEEE\">Reservation at Endulge Resto [ 2 ] <br />".$reserv_date1."</td>\n<td style=\"width:40%;padding:5px;background:#EEEEEE;text-align:right\">$79.95</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;padding:5px\">Reservation at Friction Sports Bar & Grill [ 4 ] <br />".$reserv_date2."</td>\n<td style=\"width:40%;padding:5px;text-align:right\">$120.00</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;padding:5px;background:#EEEEEE\">City Tour [ 4 ] <br />".$reserv_date3."</td>\n<td style=\"width:40%;padding:5px;background:#EEEEEE;text-align:right\">$129.25</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;padding:5px;border-top:1px solid #1F00D5\">Subtotal</td>\n<td style=\"width:40%;padding:5px;text-align:right;border-top:1px solid #1F00D5\">$3,829.20</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;padding:5px;border-top:1px solid #1F00D5\">Tax (12%)</td>\n<td style=\"width:40%;padding:5px;text-align:right;border-top:1px solid #1F00D5\">$459.50</td>\n";
			$body .= "</tr><tr>\n";
				$body .= "<td style=\"width:60%;border:2px solid #1F00D5;padding:5px;background:#EEEEEE\">Total</td>\n<td style=\"width:40%;border:2px solid #1F00D5;padding:5px;background:#EEEEEE;text-align:right\">$4,288.70</td>\n";
			$body .= "</tr>\n";
		$body .= "</table><br /><hr style=\"height:0;border-bottom:1px solid #1F00D5\" /></td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:left;padding:15px 5px 15px 5px\">We look forward to honouring your patronage.<br /><br /><span style=\"font-weight:bold;font-size:110%;color:#F28E1C\">Cheers!</span></td>\n";
	$body .= "</tr><tr>\n";
		$body .= "<td style=\"width:100%;text-align:center;background:#1F00D5;color:#FFF5EE;border:1px solid #000000;padding:15px 10px 15px 10px;font-weight:bold;font-size:105%\"><a href=\"\" style=\"color:#FFF5EE;text-decoration:none;border:none\">1 Main Street, Toronto, Ontario, Canada <span style=\"white-space:nowrap\">M4E 2V4</span></a><br />T: 1 555-555-5555<br /><a href=\"\" style=\"color:#FFF5EE;text-decoration:none;border:none\">E: example@example.com</a></td>\n";
	$body .= "</tr>\n";
$body .= "</table>\n";
$body .= "</div>\n";
$body .= "</body>\n";
$body .= "</html>";

			try {
				$mail_res = @mail($email, $subject, $body, $headers);
			} catch (Exception $e) {
				unset($data['result']);
				$data['error'] = str_replace($baddies, "", strip_tags(trim($e)));
			}

			if (isset($data['result']) && (!strcmp($data['result'], "OK"))) {
				$data['msg'] = "Fake Sales Receipt E-Mail has been sent. Please check your inbox, and possibly your spam folder.";
			}
		} else {
			$data['msg'] = "Sorry, E-Mail quota has been reached for this site. Please try again tomorrow.";
		}
	}
}

unset($baddies);

echo json_encode($data);
?>
