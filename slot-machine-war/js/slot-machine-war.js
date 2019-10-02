jQuery(document).ready(function() {
	/* Using HTML5 local storage to hold program variables */
	try {
		var highscorelocal = 0;

		/* Set or Reset kitty and click counter storage variables */
		localStorage.setItem("example_slotmachinewar_kitty", "500");
		localStorage.setItem("example_slotmachinewar_numclicks", "0");

		/* High Score */
		var highscorelocal = localStorage.getItem("example_slotmachinewar_highscore");
		if ((highscorelocal == null) || (highscorelocal == "")) {
			localStorage.setItem("example_slotmachinewar_highscore", "500");

			highscorelocal = 500;
		} else {
			highscorelocal = parseInt(highscorelocal);
		}

		/* Click Counter */
		var numclickslocal = localStorage.getItem("example_slotmachinewar_highscore_numclicks");
		if ((numclickslocal == null) || (numclickslocal == "")) {
			localStorage.setItem("example_slotmachinewar_highscore_numclicks", "0");

			numclickslocal = 0;
		} else {
			numclickslocal = parseInt(numclickslocal);
		}

		jQuery(".score-dialog .score-dialog-body .high-score-local-box .high-score-local .score").text(("" + highscorelocal));
		jQuery(".score-dialog .score-dialog-body .numspins-local-box .spins-local .spins").text(("" + numclickslocal));
	} catch (e) {
		alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine");
		return;
	}

	function neuterButtons(doIt) {
		if (parseInt(doIt) == 1) {
			jQuery(".slots .buttons-row .buttons-box .op-button").each(function(i, o) {
				if (!jQuery(this).hasClass("disabled")) {
					jQuery(this).addClass("disabled");
				}
			});
		} else {
			jQuery(".slots .buttons-row .buttons-box .op-button").each(function(i, o) {
				if (jQuery(this).hasClass("disabled")) {
					jQuery(this).removeClass("disabled");
				}
			});
		}
	}

	function runSlots(bet) {
		if ((bet == null) || (bet == "")) {
			return;
		}

		var rows = "",
		rows_house = "",
		rows_player = "",
		housecard = null,
		playercard = null,
		kitty = -1,
		numclicks = -1,
		has_winner = 0,
		has_draw = 0,
		winnings = 0,
		highscorelocal = -1,
		house = -1,
		player = -1,
		diff = 0,
		betamount = parseInt(bet);

		if (betamount <= 0) {
			return;
		}

		try {
			kitty = localStorage.getItem("example_slotmachinewar_kitty");
			numclicks = localStorage.getItem("example_slotmachinewar_numclicks");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		rows = "<div class=\"program-loading-box\"><span class=\"program-loading p-l0\"></span><span class=\"program-loading p-l1\"></span><span class=\"program-loading p-l2\"></span></div>";

		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

		neuterButtons(1);

		kitty = parseInt(kitty);
		numclicks = parseInt(numclicks);

		if ((kitty <= 0) || (betamount > kitty)) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}

			neuterButtons(0);
			return;
		}

		/* Run War Slots */
		kitty -= betamount;
		numclicks++;

		rows = "<div class=\"slots-con\">";

		house = Math.floor(Math.random() * 52);
		player = Math.floor(Math.random() * 52);

		housecard = new Card(house),
		playercard = new Card(player);

		rows_house = drawCard(housecard.getOrig(), 1);

		rows_player = drawCard(playercard.getOrig(), 0);

		diff = parseInt(housecard.getValue()) - parseInt(playercard.getValue());

		/* Player Wins */
		if (diff < 0) {
			has_winner = 1;
			winnings = betamount * 2;
			kitty += winnings;
		}
		/* Draw */
		else if (diff == 0) {
			has_draw = 1;
			winnings = betamount;
			kitty += winnings;
		}
		/* House Wins */

		rows += rows_player + "</div>";
		rows += drawVR();
		rows += rows_house + "</div></div>";

		housecard = null;
		playercard = null;

		/* Set Local Storage */
		try {
			localStorage.setItem("example_slotmachinewar_kitty", ("" + kitty));
			localStorage.setItem("example_slotmachinewar_numclicks", ("" + numclicks));

			if ((has_winner == 1) || (has_draw == 1)) {
				highscorelocal = localStorage.getItem("example_slotmachinewar_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("example_slotmachinewar_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("example_slotmachinewar_highscore", ("" + highscorelocal));
						localStorage.setItem("example_slotmachinewar_highscore_numclicks", ("" + numclicks));
						jQuery(".score-dialog .score-dialog-body .high-score-local-box .high-score-local .score").text(("" + highscorelocal));
						jQuery(".score-dialog .score-dialog-body .numspins-local-box .spins-local .spins").text(("" + numclicks));
					}
				}
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		/* Set stage elements */
		if (has_winner == 1) {
			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "visible");
			}

			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));
		} else if (has_draw == 1) {
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "visible");
			}

			jQuery(".slots .stage-row .stage-box .stage .slots-draw .winnings").empty().append(("" + winnings));
		} else {
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "visible");
			}

			jQuery(".slots .stage-row .stage-box .stage .slots-loser .winnings").empty().append(("" + betamount));
		}

		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));
		jQuery(".slots .stage-row .stage-box .stage .num-plays-box .num-plays").empty().append(("" + numclicks));

		neuterButtons(0);
	}

	jQuery(".slots .buttons-row .buttons-box .bet-button").on("click", function() {
		var betamount = jQuery(this).attr("data-bet");

		if ((betamount != null) && (betamount != "")) {
			betamount = parseInt(betamount);

			if (betamount > 0) {
				runSlots(betamount);
			}
		}
	});

	jQuery(".slots .buttons-row .buttons-box .go-button").click(function() {
		var betamount = jQuery(".slots .buttons-row .buttons-box .bet-custom").val();

		if ((betamount != null) && (betamount != "")) {
			betamount = parseInt(betamount);

			if (betamount > 0) {
				runSlots(betamount);
			}
		}
	});

	jQuery(".slots .buttons-row .buttons-box .rand-button").click(function() {
		var betamount = 0,
		kitty = -1,
		rows = "";

		try {
			kitty = localStorage.getItem("example_slotmachinewar_kitty");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		kitty = parseInt(kitty);

		if (kitty <= 0) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}

			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}

			return;
		}

		betamount = Math.floor(Math.random() * (kitty - 1)) + 1;

		jQuery(".slots .buttons-row .buttons-box .bet-custom").val(("" + betamount));

		runSlots(betamount);
	});

	jQuery(".slots .buttons-row .buttons-box .bet-custom").on("change", function() {
		var val = jQuery(this).val();

		if ((val == null) || (val == "")) {
			jQuery(this).val("250");
		} else {
			val = parseInt(val);

			if (val <= 0) {
				jQuery(this).val("250");
			}

			jQuery(this).val(("" + val));
		}
	});

	jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").click(function() {
		jQuery(".score-dialog").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					jQuery(this).dialog("close");
				}
			}
		});
	});

	/* Enable buttons */
	neuterButtons(0);

	if (jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").hasClass("disabled")) {
		jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").removeClass("disabled");
	}
});
