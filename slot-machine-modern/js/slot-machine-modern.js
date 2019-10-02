jQuery(document).ready(function() {
	/* Using HTML5 local storage to hold program variables */
	try {
		var highscorelocal = 0;

		/* Set or Reset kitty and click counter storage variables */
		localStorage.setItem("example_slotmachinemodern_kitty", "500");
		localStorage.setItem("example_slotmachinemodern_numclicks", "0");

		/* High Score */
		var highscorelocal = localStorage.getItem("example_slotmachinemodern_highscore");
		if ((highscorelocal == null) || (highscorelocal == "")) {
			localStorage.setItem("example_slotmachinemodern_highscore", "500");

			highscorelocal = 500;
		} else {
			highscorelocal = parseInt(highscorelocal);
		}

		/* Click Counter */
		var numclickslocal = localStorage.getItem("example_slotmachinemodern_highscore_numclicks");
		if ((numclickslocal == null) || (numclickslocal == "")) {
			localStorage.setItem("example_slotmachinemodern_highscore_numclicks", "0");

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
		kitty = -1,
		numclicks = -1,
		i = 0,
		has_winner = 0,
		winnings = 0,
		highscorelocal = -1,
		slot = {},
		betamount = parseInt(bet);

		if (betamount <= 0) {
			return;
		}

		try {
			kitty = localStorage.getItem("example_slotmachinemodern_kitty");
			numclicks = localStorage.getItem("example_slotmachinemodern_numclicks");
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

			neuterButtons(0);
			return;
		}

		/* Run Slots */
		kitty -= betamount;
		numclicks++;

		rows = "<div class=\"slots-con\">";

		for (i = 0; i < 3; i++) {
			slot[i] = Math.floor(Math.random() * 64);
		}

		for (i = 0; i < 3; i++) {
			rows += "<div class=\"slot-con\">";

			/* 6 */
			if (slot[i] < 1) {
				slot[i] = "6";
				rows += "<img alt=\"SIX\" src=\"img/6.png\" class=\"slot-image slot-number" + i + " six\" />";
			}
			/* 5 */
			else if (slot[i] < 7) {
				slot[i] = "5";
				rows += "<img alt=\"FIVE\" src=\"img/5.png\" class=\"slot-image slot-number" + i + " five\" />";
			}
			/* 4 */
			else if (slot[i] < 13) {
				slot[i] = "4";
				rows += "<img alt=\"FOUR\" src=\"img/4.png\" class=\"slot-image slot-number" + i + " four\" />";
			}
			/* 3 */
			else if (slot[i] < 19) {
				slot[i] = "3";
				rows += "<img alt=\"THREE\" src=\"img/3.png\" class=\"slot-image slot-number" + i + " three\" />";
			}
			/* 2 */
			else if (slot[i] < 25) {
				slot[i] = "2";
				rows += "<img alt=\"TWO\" src=\"img/2.png\" class=\"slot-image slot-number" + i + " two\" />";
			}
			/* 1 */
			else if (slot[i] < 31) {
				slot[i] = "1";
				rows += "<img alt=\"ONE\" src=\"img/1.png\" class=\"slot-image slot-number" + i + " one\" />";
			}
			/* 0 */
			else {
				slot[i] = "0";
				rows += "<img alt=\"ZERO\" src=\"img/Z.png\" class=\"slot-image slot-number" + i + " zero\" />";
			}

			rows += "</div>";
		}

		rows += "</div>";

		/* 3 6s */
		if ((slot[0] == "6") && (slot[1] == "6") && (slot[2] == "6")) {
			has_winner = 1;
			winnings = betamount * 500;
			kitty += winnings;
		}
		/* 3 5s */
		else if ((slot[0] == "5") && (slot[1] == "5") && (slot[2] == "5")) {
			has_winner = 1;
			winnings = betamount * 400;
			kitty += winnings;
		}
		/* 3 4s */
		else if ((slot[0] == "4") && (slot[1] == "4") && (slot[2] == "4")) {
			has_winner = 1;
			winnings = betamount * 250;
			kitty += winnings;
		}
		/* 3 3s */
		else if ((slot[0] == "3") && (slot[1] == "3") && (slot[2] == "3")) {
			has_winner = 1;
			winnings = betamount * 200;
			kitty += winnings;
		}
		/* 3 2s */
		else if ((slot[0] == "2") && (slot[1] == "2") && (slot[2] == "2")) {
			has_winner = 1;
			winnings = betamount * 100;
			kitty += winnings;
		}
		/* 3 1s */
		else if ((slot[0] == "1") && (slot[1] == "1") && (slot[2] == "1")) {
			has_winner = 1;
			winnings = betamount * 50;
			kitty += winnings;
		}
		/* 3 0s */
		else if ((slot[0] == "0") && (slot[1] == "0") && (slot[2] == "0")) {
			has_winner = 1;
			winnings = betamount * 2;
			kitty += winnings;
		}
		/* Nothing. Bet is consumed */

		/* Set Local Storage */
		try {
			localStorage.setItem("example_slotmachinemodern_kitty", ("" + kitty));
			localStorage.setItem("example_slotmachinemodern_numclicks", ("" + numclicks));

			if (has_winner == 1) {
				highscorelocal = localStorage.getItem("example_slotmachinemodern_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("example_slotmachinemodern_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("example_slotmachinemodern_highscore", ("" + highscorelocal));
						localStorage.setItem("example_slotmachinemodern_highscore_numclicks", ("" + numclicks));
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
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "visible");
			}

			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));
		} else {
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}
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
			kitty = localStorage.getItem("example_slotmachinemodern_kitty");
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
