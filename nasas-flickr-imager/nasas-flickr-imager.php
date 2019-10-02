<?php
if (!isset($_SESSION)) {
	session_start();
}

$pageno = 1;
if (isset($_REQUEST['pageno']) && !empty($_REQUEST['pageno'])) {
  $pageno = intval(trim($_REQUEST['pageno']));
  
  if ($pageno < 1) {
    $pageno = 1;
  }
}

$perpage = 3;
if (isset($_REQUEST['perpage']) && !empty($_REQUEST['perpage'])) {
  $perpage = intval(trim($_REQUEST['perpage']));
  
  if (!in_array($perpage, array(3, 5, 10))) {
    $perpage = 3;
  }
}

$selected_text = " selected=\"selected\"";

/* Required JS, CSS */ ?>
<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/nasas-flickr-imager.css" />
<script type="text/javascript" src="js/nasas-flickr-imager.js"></script>

<?php /* Filters */ ?>
<div class="filter-box">
  <form method="GET" action="nasas-flickr-imager.php">
	<div class="filter-tbl">
	  <div class="filter-tbl-tr">
	    <?php /* Page Number */ ?>
	    <div class="form-group filter-pageno-box">
          <label for="pageno">Page</label>
          <input type="number" name="pageno" size="4" class="form-control pageno_input" value="<?php echo $pageno; ?>" />
        </div>

		<?php /* Query Amount */ ?>
        <div class="form-group filter-perpage-box">
          <label for="perpage">Amount</label>
          <select name="perpage" class="form-control perpage_select">
            <option value="3"<?php if ($perpage == 3) { echo $selected_text; } ?>>3</option>
            <option value="5"<?php if ($perpage == 5) { echo $selected_text; } ?>>5</option>
            <option value="10"<?php if ($perpage == 10) { echo $selected_text; } ?>>10</option>
          </select>
        </div>

		<?php /* Filter button */ ?>
		<div class="form-group filter-submit-box">
          <input type="submit" class="filter-submit" value="FILTER" />
        </div>
	  </div>
	</div>
</form>
</div>

<?php /* Owner link, Owner name, License */ ?>
<div class="owner-box">
  <div class="flickr-owner">By <a href="https://www.flickr.com/people/24662369@N07/" target="_blank" class="owner-anchor">24662369@N07</a></div>
  <div class="flickr-owner-name">NASA Goddard Space Flight Center</div>
  <div class="flickr-license"><a href="https://wiki.creativecommons.org/wiki/Public_domain" target="_blank" class="public-domain">*Public Domain</a></div>
</div>

<?php /* Imager */ ?>
<div class="flickr-imager">
  <div class="flickr-loading"></div>
</div>

<?php /* Pager */ ?>
<div class="flickr-pager" data-perpage="<?php echo $perpage; ?>" data-pageno="<?php echo $pageno; ?>"><div class="flickr-pager-text">LOAD PAGE <span class="pageno-text"><?php echo $pageno; ?></span></div></div>
