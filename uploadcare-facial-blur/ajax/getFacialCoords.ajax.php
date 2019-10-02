<?php
if (!isset($_SESSION)) {
	session_start();
}

$public_key = "GetYourOwnUploadCarePublicKey";
$secret_key = "GetYourOwnUploadCareSecretKey";
$target_uuid = "GetYourOwnUploadCareHostedImage";

$data = [];

$curl_handle = curl_init();

$curlurl = "https://ucarecdn.com/".$target_uuid."/detect_faces/";

curl_setopt($curl_handle, CURLOPT_URL, $curlurl);
curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 25);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
$headers = [
	"Content-Type: application/json",
    "Authorization: Basic ". base64_encode("$public_key:$secret_key")
];
curl_setopt($curl_handle, CURLOPT_HTTPHEADER, $headers);
$buffer = curl_exec($curl_handle);
curl_close($curl_handle);

if (empty($buffer)) {
	$data['error'] = "Failed to connect to UploadCare.com.";
} else {
	$data['result'] = json_decode($buffer, true);
}

echo json_encode($data);
?>
