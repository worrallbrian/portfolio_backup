<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/infinite-z.css" />
<script type="text/javascript" src="js/infinite-z.js"></script>
<div class="container infinite-z">
  <div class="col-sm-12 preamble-box">
    <span class="preamble">This program outputs random words taken from a database of commonly used English words. May contain explicit language.</span>
  </div>

  <div class="col-sm-12 z-box">
    <img src="img/DrZ.jpg" alt="Ape" class="z-img" />
  </div>

  <div class="form-box">
    <form class="form form-inline justify-content-center">
	  <div class="form-group">
        <div class="input-group">
          <label class="mr-2" for="numwords">Word Count:</label>
	      <select name="numwords" class="form-control mr-2 numwords">
<?php
for ($i = 3; $i < 20; $i++) {
  echo "<option value=\"".$i."\">".$i."</option>";
}
?>
          </select>
	    </div>
      </div>

	  <div class="form-group">
        <div class="input-group">
          <button type="button" class="btn btn-warning activate-button">Activate</button>
	    </div>
      </div>
    </form>
  </div>

  <div class="col-sm-12 stage-box">
    <div class="stage"><div class="begin-div">[ Ready ]</div></div>
  </div>
</div>
