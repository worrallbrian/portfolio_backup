<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/address-mapper.css" />
<script type="text/javascript" src="js/address-mapper.js"></script>
<div class="container address-mapper">
  <div class="col-sm-12 preamble-box">
    <span class="preamble">This Program queries Google Maps API to display a given address</span>
  </div>

  <div class="form-box">
	<div class="form-group">
      <div class="input-group">
        <label for="address">Enter Address</label><input type="text" class="form-input address" name="address" value="" placeholder="EG) 1 Main Street Toronto ON" />
	  </div>
    </div>

	<div class="form-group row">
	  <div class="col-sm-6 form-group">
	    <label for="maptype">Map Type</label>
        <select name="maptype" class="form-control maptype">
          <option value="roadmap">Road Map</option>
          <option value="satellite">Satellite</option>
          <option value="terrain">Terrain</option>
          <option value="hybrid" selected="selected">Hybrid</option>
        </select>
	  </div>

	  <div class="col-sm-6 form-group">
		<label for="zoomlevel">Zoom Level</label>
        <select name="zoomlevel" class="form-control zoomlevel">
<?php
for ($i = 1; $i< 21; $i++) {
  echo "<option value=\"".$i."\"".(($i == 14) ? " selected=\"selected\"" : "").">".$i."</option>";
}
?>
        </select>
	  </div>
	</div>

	<div class="form-group">
      <div class="input-group">
        <button type="button" class="btn btn-success find-button">Find</button>
	  </div>
    </div>
  </div>

  <div class="col-sm-12 stage-box">
    <div class="stage"><div class="begin-div">[ Map Ready ]</div></div>
  </div>
</div>
