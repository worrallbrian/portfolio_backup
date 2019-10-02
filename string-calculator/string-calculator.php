<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/string-calculator.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/string-calculator.css" />

<div class="container sevenshifts">
	<div class="row header-row">
		<div class="col-sm-12 form-group header-msg"><h1>String Calculator</h1></div>

		<div class="col-sm-12 form-group subheader-msg">
			<div class="subheader-title">Conditions:</div>

			<ul class="list-group">
				<li class="list-group-item">* Empty strings should return 0.</li>
				<li class="list-group-item">* The return type should be an integer.</li>
				<li class="list-group-item">* The numbers in the string are separated by a comma, or a custom delimiter (IE "//[delimiter]\n[delimiter separated numbers]").</li>
				<li class="list-group-item">* Calling add with a negative number should throw an exception: "Negatives not allowed". The exception should list the number(s) that caused the exception.</li>
				<li class="list-group-item">* Numbers larger than 1000 should be ignored.</li>
				<li class="list-group-item">* Multiple, arbitrary length Delimiters are allowed.</li>
			</ul>
		</div>
	</div>

	<div class="row test-row test1-row">
		<div class="col-sm-12 form-group test1"><h3>Add Function Part 1)</h3></div>

		<div class="col-xs-12 col-sm-6 test-test test1-test">"1,2,5" = </div>
		<div class="col-xs-12 col-sm-6 test-test test1-test">
		<script type="text/javascript">
		var test = Add("1,2,5");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test1-test">"1,20,500" = </div>
		<div class="col-xs-12 col-sm-6 test-test test1-test">
		<script type="text/javascript">
		var test = Add("1,20,500");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test1-test">"1,1,2,3,5,8,13,21,34,55" = </div>
		<div class="col-xs-12 col-sm-6 test-test test1-test">
		<script type="text/javascript">
		var test = Add("1,1,2,3,5,8,13,21,34,55");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test2-row">
		<div class="col-sm-12 form-group test2"><h3>Add Function Part 2)</h3></div>

		<div class="col-xs-12 col-sm-6 test-test test2-test">"1\n,2,3" = </div>
		<div class="col-xs-12 col-sm-6 test-test test2-test">
		<script type="text/javascript">
		var test = Add("1\n,2,3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test2-test">"1,\n2,4" = </div>
		<div class="col-xs-12 col-sm-6 test-test test2-test">
		<script type="text/javascript">
		var test = Add("1,\n2,4");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test2-test">"5\r\n,\r\n1000,25" = </div>
		<div class="col-xs-12 col-sm-6 test-test test2-test">
		<script type="text/javascript">
		var test = Add("5\r\n,\r\n1000,25");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test3-row">
		<div class="col-sm-12 form-group test3"><h3>Add Function Part 3)</h3></div>

		<div class="col-xs-12 col-sm-6 test-test test3-test">"//;\n1;3;4" = </div>
		<div class="col-xs-12 col-sm-6 test-test test3-test">
		<script type="text/javascript">
		var test = Add("//;\n1;3;4");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test3-test">"//$\n1$2$3" = </div>
		<div class="col-xs-12 col-sm-6 test-test test3-test">
		<script type="text/javascript">
		var test = Add("//$\n1$2$3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test3-test">"//@\n2@3@8" = </div>
		<div class="col-xs-12 col-sm-6 test-test test3-test">
		<script type="text/javascript">
		var test = Add("//@\n2@3@8");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test4-row">
		<div class="col-sm-12 form-group test4"><h3>Add Function Part 4)</h3></div>

		<div class="col-xs-12 col-sm-6 test-test test4-test">"//;\n-1;3;4" = </div>
		<div class="col-xs-12 col-sm-6 test-test test4-test">
		<script type="text/javascript">
		var test = Add("//;\n-1;3;4");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test4-test">"//$\n-1$-2$3" = </div>
		<div class="col-xs-12 col-sm-6 test-test test4-test">
		<script type="text/javascript">
		var test = Add("//$\n-1$-2$3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-6 test-test test4-test">"//@\n-2@-3@-8" = </div>
		<div class="col-xs-12 col-sm-6 test-test test4-test">
		<script type="text/javascript">
		var test = Add("//@\n-2@-3@-8");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test5-row">
		<div class="col-sm-12 form-group test5"><h3>Bonus Part 1)</h3></div>

		<div class="col-xs-12 col-sm-8 test-test test5-test">"2,1001" = </div>
		<div class="col-xs-12 col-sm-4 test-test test5-test">
		<script type="text/javascript">
		var test = Add("2,1001");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-8 test-test test5-test">"999,2500,167,250,1111" = </div>
		<div class="col-xs-12 col-sm-4 test-test test5-test">
		<script type="text/javascript">
		var test = Add("999,2500,167,250,1111");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test6-row">
		<div class="col-sm-12 form-group test6"><h3>Bonus Part 2)</h3></div>

		<div class="col-xs-12 col-sm-8 test-test test6-test">"//***\n1***2***3" = </div>
		<div class="col-xs-12 col-sm-4 test-test test6-test">
		<script type="text/javascript">
		var test = Add("//***\n1***2***3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-8 test-test test6-test">"//&&\n11&&22&&33" = </div>
		<div class="col-xs-12 col-sm-4 test-test test6-test">
		<script type="text/javascript">
		var test = Add("//&&\n11&&22&&33");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test7-row">
		<div class="col-sm-12 form-group test7"><h3>Bonus Part 3)</h3></div>

		<div class="col-xs-12 col-sm-8 test-test test7-test">"//$,@\n1$2@3" = </div>
		<div class="col-xs-12 col-sm-4 test-test test7-test">
		<script type="text/javascript">
		var test = Add("//$,@\n1$2@3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-8 test-test test7-test">"//$,@,#\n111#202@3$82" = </div>
		<div class="col-xs-12 col-sm-4 test-test test7-test">
		<script type="text/javascript">
		var test = Add("//$,@,#\n111#202@3$82");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test8-row">
		<div class="col-sm-12 form-group test8"><h3>Bonus Part 4)</h3></div>

		<div class="col-xs-12 col-sm-8 test-test test8-test">"//$,@@\n1$2@@3" = </div>
		<div class="col-xs-12 col-sm-4 test-test test8-test">
		<script type="text/javascript">
		var test = Add("//$,@@\n1$2@@3");
		document.write(test);
		</script>
		</div>

		<div class="col-xs-12 col-sm-8 test-test test8-test">"//$,@@,###\n111###202@@3$82" = </div>
		<div class="col-xs-12 col-sm-4 test-test test8-test">
		<script type="text/javascript">
		var test = Add("//$,@@,###\n111###202@@3$82");
		document.write(test);
		</script>
		</div>
	</div>

	<div class="row test-row test9-row">
		<div class="col-sm-12 form-group test8"><h3>Custom</h3></div>

		<div class="col-xs-12 col-sm-8 form-group test-input-box">
			<input type="input" class="form-input test-input" size="32" value="" />
		</div>

		<div class="col-xs-12 col-sm-4 form-group test-submit-box">
			<button type="button" class="btn btn-primary submit-button">Submit</button>
		</div>

		<div class="col-xs-12 col-sm-8 form-group test9-msg"><span class="msg">Result: </span></div>

		<div class="col-xs-12 col-sm-4 form-group test9-result">--</div>
	</div>
</div>
