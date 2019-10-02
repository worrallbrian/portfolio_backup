<?php
if (!isset($_SESSION)) {
	session_start();
}

$jtStartIndex = 0;
if (isset($_REQUEST['jtStartIndex']) && (strcmp($_REQUEST['jtStartIndex'], "") != 0)) {
	$jtStartIndex = intval(trim($_REQUEST['jtStartIndex']));
}

$jtPageSize = 10;
if (isset($_REQUEST['jtPageSize']) && (strcmp($_REQUEST['jtPageSize'], "") != 0)) {
	$jtPageSize = intval(trim($_REQUEST['jtPageSize']));
}

$baddies = "/[^0-9a-zA-Z ]/";

$jtSorting = "A.id ASC";
if (isset($_REQUEST['jtSorting']) && !empty($_REQUEST['jtSorting'])) {
	$jtSorting = preg_replace($baddies, "", strip_tags(trim($_REQUEST['jtSorting'])));

	if (in_array(strtolower($jtSorting), ["id asc", "id desc", "team asc", "team desc"])) {
		$jtSorting = "A.".$jtSorting;
	} elseif (!strcasecmp($jtSorting, "league asc")) {
		$jtSorting = "B.name_short ASC";
	} elseif (!strcasecmp($jtSorting, "league desc")) {
		$jtSorting = "B.name_short DESC";
	} else {
		$jtSorting = "A.id ASC";
	}
}

$team = "";
if (isset($_REQUEST['team']) && !empty($_REQUEST['team'])) {
	$team = preg_replace($baddies, "", strip_tags(trim($_REQUEST['team'])));
}

$sport = "";
if (isset($_REQUEST['sport']) && !empty($_REQUEST['sport'])) {
	$sport = preg_replace($baddies, "", strip_tags(trim($_REQUEST['sport'])));
}

$league = "";
if (isset($_REQUEST['league']) && !empty($_REQUEST['league'])) {
	$league = preg_replace($baddies, "", strip_tags(trim($_REQUEST['league'])));
}

$section = "";
if (isset($_REQUEST['section']) && !empty($_REQUEST['section'])) {
	$section = preg_replace($baddies, "", strip_tags(trim($_REQUEST['section'])));
}

$division = "";
if (isset($_REQUEST['division']) && !empty($_REQUEST['division'])) {
	$division = preg_replace($baddies, "", strip_tags(trim($_REQUEST['division'])));
}

$city = "";
if (isset($_REQUEST['city']) && !empty($_REQUEST['city'])) {
	$city = preg_replace($baddies, "", strip_tags(trim($_REQUEST['city'])));
}

$province = "";
if (isset($_REQUEST['province']) && !empty($_REQUEST['province'])) {
	$province = preg_replace($baddies, "", strip_tags(trim($_REQUEST['province'])));
}

$country = "";
if (isset($_REQUEST['country']) && !empty($_REQUEST['country'])) {
	$country = strtoupper(preg_replace($baddies, "", strip_tags(trim($_REQUEST['country']))));
}

unset($baddies);

$where = "";
$hasfilter = 0;

if (!empty($team) || !empty($sport) || !empty($league) || !empty($section) || !empty($division) || !empty($city) || !empty($province) || !empty($country)) {
	$where = " WHERE ";

	if (!empty($team)) {
		$where .= "A.team LIKE \"%".$team."%\"";
		$hasfilter = 1;
	}

	if (!empty($sport)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "E.name LIKE \"%".$sport."%\"";
		$hasfilter = 1;
	}

	if (!empty($league)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "(
		(B.name_short LIKE \"%".$league."%\")
		OR
		(B.name_long LIKE \"%".$league."%\")
		)";
		$hasfilter = 1;
	}

	if (!empty($section)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "C.name LIKE \"%".$section."%\"";
		$hasfilter = 1;
	}

	if (!empty($division)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "D.name LIKE \"%".$division."%\"";
		$hasfilter = 1;
	}

	if (!empty($city)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "REPLACE(F.name, '.', '') LIKE \"%".$city."%\"";
		$hasfilter = 1;
	}

	if (!empty($province)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "(
		(REPLACE(G.name_short, '.', '') LIKE \"%".$province."%\")
		OR
		(REPLACE(G.name_long, '.', '') LIKE \"%".$province."%\")
		)";
		$hasfilter = 1;
	}

	if (!empty($country)) {
		if ($hasfilter == 1) {
			$where .= " AND ";
		}
		$where .= "UPPER(H.name_short) = \"".$country."\"";
	}
}

$data = [];
$data['TotalRecordCount'] = 0;
$data['Records'] = [];

try {
	$con = mysqli_connect("host", "username", "password", "database_name") or die("Failed to connect to database.");

	$sSQL = "SELECT COUNT(A.id) AS numrows
			FROM sports_teams AS A
			LEFT JOIN sports_leagues AS B ON B.id = A.league
			LEFT JOIN sports_sections AS C ON C.id = A.section
			LEFT JOIN sports_divisions AS D ON D.id = A.division
			LEFT JOIN sports_types AS E ON E.id = A.sport
			LEFT JOIN cities AS F ON F.id = A.city
			LEFT JOIN provinces AS G ON G.id = A.province
			LEFT JOIN countries AS H ON H.id = A.country
			".$where;

	$stmt = $con->prepare($sSQL);
	$stmt->execute();

	$result = $stmt->get_result();
	$r = $result->fetch_assoc();

	if (isset($r) && !empty($r) && isset($r['numrows']) && !empty($r['numrows'])) {
		$data['TotalRecordCount'] = intval($r['numrows']);
	}

	if (isset($r)) {
		unset($r);
	}

	$stmt->close();
	$stmt->free_result();
	mysqli_free_result($result);

	$sSQL = "SELECT A.id,
			A.team,
			E.name AS sport,
			B.name_short AS league,
			C.name AS section,
			D.name AS division,
			CONCAT(F.name, ', ', G.name_long, ', ', H.name_long) AS hometown
			FROM sports_teams AS A
			LEFT JOIN sports_leagues AS B ON B.id = A.league
			LEFT JOIN sports_sections AS C ON C.id = A.section
			LEFT JOIN sports_divisions AS D ON D.id = A.division
			LEFT JOIN sports_types AS E ON E.id = A.sport
			LEFT JOIN cities AS F ON F.id = A.city
			LEFT JOIN provinces AS G ON G.id = A.province
			LEFT JOIN countries AS H ON H.id = A.country
			".$where."
			ORDER BY ".$jtSorting."
			LIMIT ".$jtStartIndex.", ".$jtPageSize;

	$stmt2 = $con->prepare($sSQL);
	$stmt2->execute();

	$result2 = $stmt2->get_result();
	$r2 = null;
	$numrows = 0;

	while ($r2 = $result2->fetch_assoc()){
		if (isset($r2['id']) && !empty($r2['id'])) {
			$data['Records'][$numrows] = [];
			$data['Records'][$numrows]['id'] = intval(trim($r2['id']));
			$data['Records'][$numrows]['team'] = ((isset($r2['team']) && !empty($r2['team'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['team']))) : "");
			$data['Records'][$numrows]['sport'] = ((isset($r2['sport']) && !empty($r2['sport'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['sport']))) : "");
			$data['Records'][$numrows]['league'] = ((isset($r2['league']) && !empty($r2['league'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['league']))) : "");
			$data['Records'][$numrows]['section'] = ((isset($r2['section']) && !empty($r2['section'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['section']))) : "");
			$data['Records'][$numrows]['division'] = ((isset($r2['division']) && !empty($r2['division'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['division']))) : "");
			$data['Records'][$numrows]['hometown'] = ((isset($r2['hometown']) && !empty($r2['hometown'])) ? str_replace(['"', "`"], "", strip_tags(trim($r2['hometown']))) : "");

			$numrows++;
		}
	}

	if (isset($r2)) {
		unset($r2);
	}

	$stmt2->close();
	$stmt2->free_result();
	mysqli_free_result($result2);
	mysqli_close($con);

	$data['Result'] = "OK";
} catch (Exception $e) {
	$data['Result'] = "ERROR";
	$data['error_message'] = str_replace(['"', "`"], "", strip_tags(trim($e)));
}

echo json_encode($data);
?>
