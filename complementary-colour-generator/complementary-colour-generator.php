<?php
if (!isset($_SESSION)) {
	session_start();
}
?><script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="js/jscolor.min.js"></script>
<script type="text/javascript" src="js/complementary-colour-generator.js"></script>
<link rel="stylesheet" type="text/css" href="css/complementary-colour-generator.css" />
<div class="container ccg">
  <div class="row title1-row">
    <div class="col-sm-12 title1">Original Colour</div>
  </div>
  <div class="row input-row">
    <div class="col-sm-6 colour-input-box">
      <input class="form-input original-colour-input jscolor {closable:true,closeText:'Close',hash:true,uppercase:true,onFineChange:'javascript:updateColour(this);'}" value="#FFFFFF" />
	</div>
	<div class="col-sm-6 original-colour-box">
	  <div class="original-colour"></div>
	</div>
  </div>
  <div class="row title2-row">
    <div class="col-sm-12 title2">Complementary Colour</div>
  </div>
  <div class="row output-row">
    <div class="col-sm-6 complementary-value-box">
	  <div class="complementary-value">#000000</div>
	</div>
	<div class="col-sm-6 complementary-colour-box">
	  <div class="complementary-colour"></div>
	</div>
  </div>
  <div class="row title3-row">
    <div class="col-sm-12 title3">Preview</div>
  </div>
  <div class="row together-row">
    <div class="col-sm-12 together-box">
	  <div class="together"><span class="together-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ipsum ipsum, vitae sollicitudin ex volutpat nec. Fusce volutpat tincidunt dui, in euismod dui egestas id. Pellentesque at sapien magna. Nunc vitae justo faucibus, pretium eros id, tempor ipsum. Donec at sem a nulla feugiat varius. Aenean at mollis purus. Nam commodo felis a enim suscipit, ut tincidunt risus ultricies. Duis vulputate tellus mattis porta sodales. Curabitur sit amet erat et tellus placerat commodo nec at tortor.</span></div>
	</div>
  </div>
</div>
