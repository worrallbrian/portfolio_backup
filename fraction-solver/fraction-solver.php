<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/fraction-solver.css" />
<?php
$IfNew = 0;
$Numerator = 0;
$Denominator = 0;

if (isset($_POST["Numerator"]) && !empty($_POST["Numerator"])) {
  $Numerator = intval(trim($_POST["Numerator"]));

  if (($Numerator < 0) || ($Numerator > 999999)) {
    $Numerator = 0;
  } else {
    $IfNew = 1;
  }
}

if (isset($_POST["Denominator"]) && !empty($_POST["Denominator"])) {
  $Denominator = intval(trim($_POST["Denominator"]));

  if (($Denominator < 0) || ($Denominator > 999999)) {
    $Denominator = 0;
  } else {
    $IfNew = 1;
  }
}

$Numer = 0;
$Denom = 0;

if ($IfNew == 1) {
  $Numer = $Numerator;
  $Denom = $Denominator;

  if (($Denom != 0) && ($Numer != 0)) {
    $i = min($Numer, $Denom);
    $DoLoop = 1;

    while ($DoLoop) {
      if (((fmod($Numer, $i) == 0) && (fmod($Denom, $i) == 0)) && ($i > 1)) {
        $Numer = ($Numer)/($i);
        $Denom = ($Denom)/($i);
        $i = min($Numer, $Denom);
      } elseif ($i <= 1) {
        $DoLoop = 0;
      } else {
        $i -= 1;
      }
    }
  }
}
?><div class="container fs">
<?php
if ($IfNew == 1) {
  echo "<div class=\"row\">Final Comparison. Redefine?</div>";
} else {
  echo "<div class=\"row\">This program simplifies fractions into lowest terms and will output the result. Discover which fractions are computional difficult!</div>";
}
?>
<form method="post" action="fraction-solver.php" class="form fs-form">
<div class="form-group col-sm-12">
<?php
echo "<input type=\"number\" name=\"Numerator\" size=\"6\" min=\"0\" value=\"".(($IfNew == 1) ? $Numerator : "")."\" placeholder=\"Numerator\" />";
?>
</div>

<div class="form-group col-sm-12 denom-group">
<?php
echo "<input type=\"number\" name=\"Denominator\" size=\"6\" min=\"0\" value=\"".(($IfNew == 1) ? $Denominator : "")."\" placeholder=\"Denominator\" />";
?>
</div>

<div class="form-group submit_btn-group">
<input type="submit" value="Solve It!" class="btn btn-primary" />
</div>
</form>

<?php
if ($IfNew == 1) {
  echo "<div class=\"container result_box\">";
  echo "<div class=\"result_equals\">=</div>";
  echo "<div class=\"values_box\"><div>".($Numer)."</div><hr class=\"separator_hr\" /><div>".($Denom)."</div></div>";
  echo "</div>";
}
?>
</div>
