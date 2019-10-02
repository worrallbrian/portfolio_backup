<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/fantasy-pool-picker.css" />
<?php
$iffirst = 1;
$ifsecond = 0;
$ifthird = 0;
$league = "";
$numgames = 0;
$pick3 = 0;
$pick4 = 0;
$pick5 = 0;
$supreme = 0;
$iore = 0;
$league_array = [];
$table_name = "";
$team = [];
$opp = [];
$overunder = [];

if (isset($_POST['league']) && (strcmp($_POST['league'], "") != 0)) {
  $iffirst = 0;
  $ifsecond = 1;

  $league = str_replace(["'", '"', "`", ";", "\0", "\Z"], "", strip_tags(trim($_POST['league'])));
  $numgames = intval(trim($_POST['numgames']));

  if (isset($_POST['pick3']) && (!strcmp($_POST['pick3'], "1"))) {
    $pick3 = 1;
  }

  if (isset($_POST['pick4']) && (!strcmp($_POST['pick4'], "1"))) {
    $pick4 = 1;
  }

  if (isset($_POST['pick5']) && (!strcmp($_POST['pick5'], "1"))) {
    $pick5 = 1;
  }

  if (isset($_POST['supreme']) && (!strcmp($_POST['supreme'], "1"))) {
      $supreme = 1;
  }

  if (isset($_POST['iore']) && (!strcmp($_POST['iore'], "1"))) {
      $iore = 1;
  }

  if (!strcmp($league, "AHL")) {
    $table_name = "ahl_teams";
  } elseif (!strcmp($league, "CFL")) {
    $table_name = "cfl_teams";
  } elseif (!strcmp($league, "FIFA")) {
    $table_name = "fifa_teams";
  } elseif (!strcmp($league, "MLB")) {
    $table_name = "mlb_teams";
  } elseif (!strcmp($league, "NBA")) {
    $table_name = "nba_teams";
  } elseif (!strcmp($league, "NCAA")) {
    $table_name = "ncaa_teams";
  } elseif (!strcmp($league, "NFL")) {
    $table_name = "nfl_teams";
  } elseif (!strcmp($league, "NHL")) {
    $table_name = "nhl_teams";
  } elseif (!strcmp($league, "Premier League")) {
    $table_name = "pl_teams";
  } else {
    $numgames=0;
  }

  if (!empty($table_name)) {
    $mydb = new wpdb("username", "password", "database_name", "host");

	$sSQL = "SELECT name FROM ".$table_name." ORDER BY name ASC";

    $rows = $mydb->get_results($sSQL);

    if (isset($rows) && !empty($rows)) {
      foreach ($rows as $r) {
        if (isset($r->name) && !empty($r->name)) {
          $league_array[] = str_replace('"', "", strip_tags(trim($r->name)));
        }
      }

      unset($rows);
    }

	$mydb->close();
  }
} elseif (isset($_POST['league2']) && (strcmp($_POST['league2'], "") != 0)) {
  $iffirst = 0;
  $ifthird = 1;

  $league = str_replace(array("'", '"'), "", strip_tags(trim($_POST['league2'])));
  $numgames = intval(trim($_POST['numgames2']));
  $pick3 = intval(trim($_POST['pick3b']));
  $pick4 = intval(trim($_POST['pick4b']));
  $pick5 = intval(trim($_POST['pick5b']));
  $supreme = intval(trim($_POST['supreme2']));
  $iore = intval(trim($_POST['iore2']));

  for ($i = 0; $i < $numgames; $i++) {
    if (isset($_POST['t'.$i]) && (strcmp($_POST['t'.$i], "") != 0)) {
      $team[] = str_replace('"', "", strip_tags(trim($_POST['t'.$i])));
    }

    if (isset($_POST['o'.$i]) && (strcmp($_POST['o'.$i], "") != 0)) {
      $opp[] = str_replace('"', "", strip_tags(trim($_POST['o'.$i])));
    }

    if (isset($_POST['ou'.$i]) && (strcmp($_POST['ou'.$i], "") != 0)) {
      $overunder[$i] = intval(strip_tags(trim($_POST['ou'.$i])));
    } else {
      $overunder[$i] = 0;
    }
  }

  if (($numgames != count($team)) || ($numgames != count($opp))) {
    $numgames = min(count($team), count($opp));
  }
}

if ($iffirst == 1) {
?>
<div class="container">
  <form class="form form-part1" method="POST" action="fantasy-pool-picker.php">
    <div class="form-group row">
	  <div class="col-sm-6 league-box">
	   <label for="league">League</label>
	   <select name="league" class="form-control">
		  <option value="AHL">AHL</option>
          <option value="CFL">CFL</option>
          <option value="FIFA">FIFA</option>
          <option value="MLB">MLB</option>
          <option value="NBA">NBA</option>
          <option value="NCAA">NCAA</option>
          <option value="NFL">NFL</option>
          <option value="NHL">NHL</option>
          <option value="Premier League">Premier League</option>
        </select>
	  </div>

	  <div class="col-sm-6 numgames-box">
	    <label for="numgames">Number of Matchups</label>
	    <select name="numgames" class="form-control">
<?php
for ($i = 1; $i < 31; $i++) {
  echo "<option value=\"".$i."\">".$i."</option>";
}
?>
        </select>
	  </div>
	</div>

	<div class="form-group row">
	  <legend>Pick Options</legend>

	  <div class="col-sm-4 form-check form-group">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" name="pick3" value="1" /><span>Pick 3</span></label>
	  </div>

	  <div class="col-sm-4 form-check form-group">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" name="pick4" value="1" /><span>Pick 4</span></label>
	  </div>

	  <div class="col-sm-4 form-check form-group">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" name="pick5" value="1" /><span>Pick 5</span></label>
	  </div>

	  <div class="col-sm-4 form-check form-group">
        <label class="form-check-label"><input type="checkbox" class="form-check-input" name="supreme" value="1" /><span>Supreme</span></label>
	  </div>
	</div>

	<div class="form-group row">
	  <legend>Pick Strategy</legend>

	  <div class="col-sm-6 form-check form-group">
          <label class="form-check-label" title="Only Winners will appear in the Picks"><input class="form-check-input" type="radio" name="iore" id="iore" value="0" checked="checked" /> <span>Inclusive</span></label>
      </div>

	  <div class="col-sm-6 form-check form-group">
          <label class="form-check-label" title="All Teams will be considered in the Picks"><input class="form-check-input" type="radio" name="iore" id="iore" value="1" /> <span>Exclusive</span></label>
      </div>
    </div>

	<div class="form-group divider-box">
	  <hr />
	</div>

	<div class="form-group submit-box">
	  <input type="submit" value="Submit" />
	</div>
  </form>
</div>
<?php
} elseif ($ifsecond == 1) { ?>
<div class="container">
  <form class="form form-part2" method="POST" action="fantasy-pool-picker.php">
    <legend>Select Your Matchups</legend>
<?php
for ($j = 0; $j < $numgames; $j++) { ?>
<div class="form-group row matchup">
  <div class="col-sm-12 competitor">
	 <select name="t<?php echo $j; ?>" class="form-control">
<?php
foreach ($league_array as $t) {
  echo "<option value=\"".$t."\">".$t."</option>";
}
?>
	 </select>
  </div>

  <div class="col-sm-12 vs-box">
    <span class="vs_span">-= VS =-</span>
  </div>

  <div class="col-sm-12 opponent">
    <select name="o<?php echo $j; ?>" class="form-control">
<?php
foreach ($league_array as $t) {
  echo "<option value=\"".$t."\">".$t."</option>";
}
?>
	</select>
  </div>

  <div class="col-sm-12 over-under">
    <div class="form-check">
	  <label class="form-check-label"><input type="checkbox" class="form-check-input" name="ou<?php echo $j; ?>" value="1" /><span>Over/Under</span></label>
	</div>
  </div>
</div>
<?php
}
?>
    <div class="hidden-div">
	  <input type="hidden" name="numgames2" value="<?php echo $numgames; ?>" />
      <input type="hidden" name="league2" value="<?php echo $league; ?>" />
      <input type="hidden" name="pick3b" value="<?php echo $pick3; ?>" />
      <input type="hidden" name="pick4b" value="<?php echo $pick4; ?>" />
      <input type="hidden" name="pick5b" value="<?php echo $pick5; ?>" />
      <input type="hidden" name="supreme2" value="<?php echo $supreme; ?>" />
      <input type="hidden" name="iore2" value="<?php echo $iore; ?>" />
    </div>

	<div class="form-group submit-box">
      <input type="submit" value="Submit" />
	</div>
  </form>

  <form class="form form-part3" method="POST" action="fantasy-pool-picker.php">
    <div class="form-group reset-box">
      <input type="submit" value="RESET" />
	</div>
  </form>
</div>
<?php
} elseif ($ifthird == 1) { ?>
<script type="text/javascript">
jQuery(document).ready(function() {
  jQuery(".finale .winner-box").click(function() {
    if (jQuery(this).hasClass("slashed")) {
	  jQuery(this).removeClass("slashed");
	} else {
	  jQuery(this).addClass("slashed");
	}
  });
  jQuery(".finale .pickx-results-box .pickx-results .pickx-result").click(function() {
    if (jQuery(this).hasClass("slashed")) {
	  jQuery(this).removeClass("slashed");
	} else {
	  jQuery(this).addClass("slashed");
	}
  });
});
</script>
<div class="container finale">
  <div class="col-sm-12 league-results">
    <h3 class="results"><?php echo $league; ?> Results</h3>
  </div>
<?php
$winners = [];

for ($i = 0; $i < $numgames; $i++) {
  $randnum = rand();

  echo "<div class=\"col-sm-12 winner-box\">";

  if (fmod($randnum, 2) == 0) {
    echo "<span class=\"winner\">".$team[$i]."</span> wins over ".$opp[$i];
    $winners[] = $team[$i];
  } else {
    echo "<span class=\"winner\">".$opp[$i]."</span> wins over ".$team[$i];
    $winners[] = $opp[$i];
  }

  if ($overunder[$i] == 1) {
    $randnum = rand();

    if (fmod($randnum, 2) == 0) {
	  echo "<div class=\"over-under\"> [ OVER ]</div>";
    } else {
	  echo "<div class=\"over-under\"> [ UNDER ]</div>";
    }
  }

  echo "</div>";
}

$picks = [];
if ($iore == 0) {
  shuffle($winners);

  $variance = ($numgames > 5) ? 5 : $numgames;

  for ($i = 0; $i < $variance; $i++) {
    $picks[$i] = $winners[$i];
  }
} elseif ($iore == 1) {
  for ($i = 0; $i < count($team); $i++) {
    $picks[] = $team[$i];

	if (isset($opp[$i])) {
      $picks[] = $opp[$i];
	}
  }

  shuffle($picks);
}

if (($pick3 == 1) && ($numgames >= 3)) {
  echo "<div class=\"col-sm-12 pickx-header\">Pick 3</div>";
  echo "<div class=\"col-sm-12 pickx-results-box\"><ul class=\"list-group pickx-results\">";
  for ($i = 0; $i < 3; $i++) {
    echo "<li class=\"list-group-item pickx-result\">".$picks[$i]."</li>";
  }
  echo "</ul></div>";
}

if (($pick4 == 1) && ($numgames >= 4)) {
  echo "<div class=\"col-sm-12 pickx-header\">Pick 4</div>";
  echo "<div class=\"col-sm-12 pickx-results-box\"><ul class=\"list-group pickx-results\">";
  for ($i = 0; $i < 4; $i++) {
    echo "<li class=\"list-group-item pickx-result\">".$picks[$i]."</li>";
  }
  echo "</ul></div>";
}

if (($pick5 == 1) && ($numgames >= 5)) {
  echo "<div class=\"col-sm-12 pickx-header\">Pick 5</div>";
  echo "<div class=\"col-sm-12 pickx-results-box\"><ul class=\"list-group pickx-results\">";
  for ($i = 0; $i < 5; $i++) {
    echo "<li class=\"list-group-item pickx-result\">".$picks[$i]."</li>";
  }
  echo "</ul></div>";
}

if ($supreme == 1) {
  shuffle($picks);

  echo "<div class=\"col-sm-12 pickx-header\">Supreme</div>";
  echo "<div class=\"col-sm-12 pickx-results-box\"><ul class=\"list-group pickx-results\">";
  echo "<li class=\"list-group-item pickx-result\">".$picks[0]."</li>";
  echo "</ul></div>";
}
?>
  <form class="form form-part3" method="POST" action="fantasy-pool-picker.php">
    <div class="form-group reset-box">
      <input type="submit" value="RESET" />
	</div>
  </form>
</div>
<?php
}
?>