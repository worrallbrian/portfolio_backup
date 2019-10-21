<?php
if (!isset($_SESSION)) {
	session_start();
}

$perpage = 3;
if (isset($_REQUEST['perpage']) && !empty($_REQUEST['perpage'])) {
  $perpage = intval(trim($_REQUEST['perpage']));
}

$pageno = 1;
if (isset($_REQUEST['pageno']) && !empty($_REQUEST['pageno'])) {
  $pageno = intval(trim($_REQUEST['pageno']));
}

/* Fail on bad values */
if (($perpage < 1) || ($pageno < 1)) {
  exit();
}

$flickr_api_key = "GetYourOwnFlickrAPIKey";
$nasa_user_id = "24662369@N07";

$data = [];

/* Curl Flickr getPublicPhotos */
$curl_handle = curl_init();

$curlurl = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=".$flickr_api_key."&user_id=".$nasa_user_id."&format=json&nojsoncallback=1&per_page=".$perpage."&page=".$pageno;

curl_setopt($curl_handle, CURLOPT_URL, $curlurl);
curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
$buffer = curl_exec($curl_handle);
curl_close($curl_handle);

if (empty($buffer)) {
  $data['error'] = "Flickr account pull failed";
} else {
  $res = json_decode($buffer, true);

  if (isset($res) && !empty($res)) {
    $data['photos'] = [];
	$data['total'] = 0;

    if (isset($res['photos']) && !empty($res['photos']) && isset($res['photos']['photo']) && !empty($res['photos']['photo'])) {
	  if (isset($res['photos']['total']) && !empty($res['photos']['total'])) {
	    $data['total'] = intval($res['photos']['total']);
	  }

	  /* All photos should be public anyways, but nevertheless, the ispublic flag is honoured.

	     Parse photos */
      foreach ($res['photos']['photo'] as $r) {
	    if (!isset($r['ispublic']) || (isset($r['ispublic']) && (intval($r['ispublic']) == 1))) {
          $id = (isset($r['id']) && !empty($r['id'])) ? str_replace('"', "", strip_tags(trim($r['id']))) : "";
          $farm = (isset($r['farm']) && !empty($r['farm'])) ? str_replace('"', "", strip_tags(trim($r['farm']))) : "";
          $serveid = (isset($r['server']) && !empty($r['server'])) ? str_replace('"', "", strip_tags(trim($r['server']))) : "";
          $secret = (isset($r['secret']) && !empty($r['secret'])) ? str_replace('"', "", strip_tags(trim($r['secret']))) : "";
          $ntitle = (isset($r['title']) && !empty($r['title'])) ? str_replace('"', "", strip_tags(trim($r['title']))) : "";

          if (!empty($id) && !empty($farm) && !empty($serveid) && !empty($secret)) {
		    $data['photos'][] = ["id" => $id, "farm" => $farm, "serveid" => $serveid, "secret" => $secret, "title" => $ntitle];
          }
		}
      }
    } elseif (isset($res['error']) && !empty($res['error'])) {
      $data['error'] = $res['error'];
    }
  }
}

/* Echo result */
echo json_encode($data);
?>
