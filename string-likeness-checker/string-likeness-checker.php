<?php
if (!isset($_SESSION)) {
	session_start();
}

$IfNew = 0;
$input1 = 0;
$input2 = 0;

if (isset($_POST['input1']) && !empty($_POST['input1'])) {
	$input1 = str_replace('"', "", stripslashes(strip_tags(trim($_POST['input1']))));

	if (empty($input1)) {
		$input1 = "";
	} else {
		$IfNew = 1;
	}
}

if (isset($_POST['input2']) && !empty($_POST['input2'])) {
	$input2 = str_replace('"', "", stripslashes(strip_tags(trim($_POST['input2']))));

	if (empty($input2)) {
		$input2 = "";
	} else {
		$IfNew = 1;
	}
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/string-likeness-checker.css" />

<div class="container slc-box">
<?php
if ($IfNew == 1) {
  echo "<div class=\"row\">Final Comparison. Redefine?</div>";
} else {
  echo "<div class=\"row\">This program compares two strings using the following string concurrency algorithms: strcmp, strcasecmp, similiar_text, levenshtein, soundex, and metaphone.</div>";
}
?>
	<form method="post" action="string-likeness-checker.php" class="form slc-form">
		<div class="form-group col-sm-12">
			<input type="text" name="input1" size="32" value="<?php if ($IfNew == 1) { echo $input1; } ?>" placeholder="EG) Test1" class="form-input text_input text_input-1" />
		</div>

		<div class="form-group col-sm-12 text_input2-group">
			<input type="text" name="input2" size="32" value="<?php if ($IfNew == 1) { echo $input2; } ?>" placeholder="EG) Test2" class="form-input text_input text_input-2" />
		</div>

		<div class="form-group submit_btn-group">
			<input type="submit" value="Compare Strings" class="btn btn-primary" />
		</div>
	</form>

<?php
if ($IfNew == 1) { ?>
	<div class="result_box">
		<hr />
		<div class="result_equals">Results</div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">strcmp(input1, input2)</div>
		<div class="col-sm-12"><?php echo ((!strcmp($input1, $input2)) ? "EQUAL" : "NOT EQUAL"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">strcasecmp(input1, input2)</div>
		<div class="col-sm-12"><?php echo ((!strcasecmp($input1, $input2)) ? "EQUAL" : "NOT EQUAL"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">similar_text(input1, input2)</div>
		<div class="col-sm-12"><?php
		$st_val = similar_text($input1, $input2);
		echo ((isset($st_val) && (strcmp($st_val, "") != 0)) ? $st_val : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">levenshtein(input1, input2)</div>
		<div class="col-sm-12"><?php
		$l_val = levenshtein($input1, $input2);
		echo ((isset($l_val) && (strcmp($l_val, "") != 0)) ? $l_val : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">soundex(input1)</div>
		<div class="col-sm-12"><?php
		$s_val_1 = soundex($input1);
		echo ((isset($s_val_1) && (strcmp($s_val_1, "") != 0)) ? $s_val_1 : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">soundex(input2)</div>
		<div class="col-sm-12"><?php
		$s_val_2 = soundex($input2);
		echo ((isset($s_val_2) && (strcmp($s_val_2, "") != 0)) ? $s_val_2 : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">soundex(input1) == soundex(input2)</div>
		<div class="col-sm-12"><?php echo ((!strcmp($s_val_1, $s_val_2)) ? "EQUAL" : "NOT EQUAL"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">metaphone(input1)</div>
		<div class="col-sm-12"><?php
		$m_val_1 = metaphone($input1);
		echo ((isset($m_val_1) && (strcmp($m_val_1, "") != 0)) ? $m_val_1 : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">metaphone(input2)</div>
		<div class="col-sm-12"><?php
		$m_val_2 = metaphone($input2);
		echo ((isset($m_val_2) && (strcmp($m_val_2, "") != 0)) ? $m_val_2 : "''"); ?></div>
	</div>

	<div class="row headers-box">
		<div class="col-sm-12 headers-value">metaphone(input1) == metaphone(input2)</div>
		<div class="col-sm-12"><?php echo ((!strcmp($m_val_1, $m_val_2)) ? "EQUAL" : "NOT EQUAL"); ?></div>
	</div>
<?php
}
?>
</div>
