<?php
if (!isset($_SESSION)) {
	session_start();
}

$wordcount = 3;
if (isset($_REQUEST['wordcount']) && !empty($_REQUEST['wordcount'])) {
  $wordcount = intval(trim($_REQUEST['wordcount']));
}

if (($wordcount < 3) || ($wordcount > 19)) {
  $wordcount = 3;
}

$data = [];
try {
  $conn = new mysqli("host", "username", "password", "database_name");

  $sSQL = "SELECT DISTINCT word FROM word_list ORDER BY RAND() LIMIT 0, ".$wordcount;

  $rows = $conn->query($sSQL);

  if ($rows->num_rows > 0) {
    $data['words'] = [];

    while ($r = $rows->fetch_assoc()) {
      if (isset($r['word']) && !empty($r['word'])) {
        $data['words'][] = ucfirst(str_replace('"', "", strip_tags(trim($r['word']))));
      }
    }

    unset($rows);
  } else {
    $data['error'] = "No Results Found.";
  }

  $conn->close();
} catch(Exception $e) {
  $data['error'] = "Exception found during database call: ".$e->getMessage();
}

echo json_encode($data);
?>
