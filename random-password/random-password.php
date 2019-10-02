<?php
if (!isset($_SESSION)) {
	session_start();
}
?><link rel="stylesheet" type="text/css" href="css/random-password.css" />
<?php
$IfNew = 0;

if (!isset($_POST["Lower"])) {
  $Lower = "0";
} else {
  if (!empty($_POST["Lower"])) {
    $Lower = 1;
    $IfNew = 1;
  } else {
    $Lower = 0;
  }
}

if (!isset($_POST["Upper"])) {
  $Upper = "0";
} else {
  if (!empty($_POST["Upper"])) {
    $Upper = 1;
    $IfNew = 1;
  } else {
    $Upper = 0;
  }
}

if (!isset($_POST["Numbers"])) {
  $Numbers = "0";
} else {
  if (!empty($_POST["Numbers"])) {
    $Numbers = 1;
    $IfNew = 1;
  } else {
    $Numbers = 0;
  }
}

if (!isset($_POST["Symbols"])) {
  $Symbols = "0";
} else {
  if (!empty($_POST["Symbols"])) {
    $Symbols = 1;
    $IfNew = 1;
  } else {
    $Symbols = 0;
  }
}

if (!isset($_POST["Length"])) {
  $Length = "0";
} else {
  $Length = intval(trim($_POST["Length"]));
  $IfNew = 1;
}

if ($IfNew) {
  $NumAtt = 0;
  $PSMaker = [];

  if (($Upper + $Lower + $Numbers + $Symbols) < 1) {
    for ($i = 0; $i < $Length; $i++) {
      $PSMaker[$NumAtt] = chr(48);
      $NumAtt++;
    }
  }

  if ($Lower == 1) {
    for ($i = 97; $i < 123; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }
  }

  if ($Upper == 1) {
    for ($i = 65; $i < 91; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }
  }

  if ($Numbers == 1) {
    for ($i = 48; $i < 58; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }
  }

  if ($Symbols == 1) {
    for ($i = 32; $i < 60; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }

    for ($i = 58; $i < 65; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }

    for ($i = 91; $i < 97; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }

    for ($i = 123; $i < 127; $i++) {
      $PSMaker[$NumAtt] = chr($i);
      $NumAtt++;
    }
  }

  $DoLoop = 1;
  while ($DoLoop) {
    shuffle($PSMaker);

    $IfLower = 0;
    $IfUpper = 0;
    $IfNumbers = 0;
    $IfSymbols = 0;

    for ($i = 0; $i < $Length; $i++) {
      if ($Lower == 1) {
        for ($j = 97; $j < 123; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 123;
            $IfLower = 1;
          }
        }
      } else {
        $IfLower = 1;
      }

      if ($Upper == 1) {
        for ($j = 65; $j < 91; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 91;
            $IfUpper = 1;
          }
        }
      } else {
        $IfUpper = 1;
      }

      if ($Numbers == 1) {
        for ($j = 48; $j < 58; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 58;
            $IfNumbers = 1;
          }
        }
      } else {
        $IfNumbers = 1;
      }

      if ($Symbols == 1) {
        for ($j = 32; $j < 60; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 60;
            $IfSymbols = 1;
          }
        }

        for ($j = 58; $j < 65; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 65;
            $IfSymbols = 1;
          }
        }

        for ($j = 91; $j < 97; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 97;
            $IfSymbols = 1;
          }
        }

        for ($j = 123; $j < 127; $j++) {
          if (!strcmp($PSMaker[$i], (chr($j)))) {
            $j = 127;
            $IfSymbols = 1;
          }
        }
      } else {
        $IfSymbols = 1;
      }
    }

    if (($IfLower == 1)&&($IfUpper == 1)&&($IfNumbers == 1)&&($IfSymbols == 1)) {
      $DoLoop = 0;
    }
  }

  echo "Your New Password is: \"";

  for ($i = 0; $i < $Length; $i++) {
    echo $PSMaker[$i];
  }

  echo "\".";
} else {
  echo "<p>[ Ready ]</p>";
}
?><p class="desc_p">Include:</p>

<form method="POST" action="random-password.php">
<p><input type="checkbox" name="Lower" value="1" <?php if ($Lower == 1){ echo "checked"; } ?> /><strong>Lowercase (a-z)</strong></p>
<p><input type="checkbox" name="Upper" value="1" <?php if ($Upper == 1){ echo "checked"; } ?> /><strong>Uppercase (A-Z)</strong></p>
<p><input type="checkbox" name="Numbers" value="1" <?php if ($Numbers == 1){ echo "checked"; } ?> /><strong>Numbers (0-9)</strong></p>
<p><input type="checkbox" name="Symbols" value="1" <?php if ($Symbols == 1){ echo "checked"; } ?> /><strong>Symbols ( -/,:-@,[-`,{-~)</strong></p>
<p><strong>Length: </strong>
<select name="Length">
<?php
for ($i = 5; $i < 36; $i++) {
  echo "<option value=\"".$i."\"";

  if ($i == $Length) {
    echo " selected";
  }

  echo ">".$i."</option>";
}
?>
</select>
</p>
<input type="submit" value="Generate Password" />
</form>
