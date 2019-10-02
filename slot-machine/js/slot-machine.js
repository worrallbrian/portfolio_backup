jQuery(document).ready(function() {
	/* Using HTML5 local storage to hold program variables */
	try {
		var highscorelocal = 0;

		/* Set or Reset kitty and click counter storage variables */
		localStorage.setItem("example_slotmachine_kitty", "500");
		localStorage.setItem("example_slotmachine_numclicks", "0");

		/* High Score */
		var highscorelocal = localStorage.getItem("example_slotmachine_highscore");
		if ((highscorelocal == null) || (highscorelocal == "")) {
			localStorage.setItem("example_slotmachine_highscore", "500");

			highscorelocal = 500;
		} else {
			highscorelocal = parseInt(highscorelocal);
		}

		/* Click Counter */
		var numclickslocal = localStorage.getItem("example_slotmachine_highscore_numclicks");
		if ((numclickslocal == null) || (numclickslocal == "")) {
			localStorage.setItem("example_slotmachine_highscore_numclicks", "0");

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
			kitty = localStorage.getItem("example_slotmachine_kitty");
			numclicks = localStorage.getItem("example_slotmachine_numclicks");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append("<div class=\"program-loading\"></div>");

		neuterButtons(1);

		kitty = parseInt(kitty);
		numclicks = parseInt(numclicks);

		if ((kitty <= 0) || (betamount > kitty)) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display") != "none") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display", "none");
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

			/* Jackpot */
			if (slot[i] < 1) {
				slot[i] = "J";
				rows += "<img alt=\"JACKPOT\" src=\"img/J.png\" class=\"slot-image jackpot\" />";
			}
			/* Bar */
			else if (slot[i] < 7) {
				slot[i] = "B";
				rows += "<img alt=\"BAR\" src=\"img/B.png\" class=\"slot-image bar\" />";
			}
			/* Cherry */
			else if (slot[i] < 13) {
				slot[i] = "C";
				rows += "<img alt=\"CHERRY\" src=\"img/C.png\" class=\"slot-image cherry\" />";
			}
			/* Peach */
			else if (slot[i] < 19) {
				slot[i] = "P";
				rows += "<img alt=\"PEACH\" src=\"img/P.png\" class=\"slot-image peach\" />";
			}
			/* Apple */
			else if (slot[i] < 25) {
				slot[i] = "A";
				rows += "<img alt=\"APPLE\" src=\"img/A.png\" class=\"slot-image apple\" />";
			}
			/* Grape */
			else if (slot[i] < 31) {
				slot[i] = "G";
				rows += "<img alt=\"GRAPE\" src=\"img/G.png\" class=\"slot-image grape\" />";
			}
			/* Zip */
			else {
				slot[i] = "Z";
				rows += "<img alt=\"BLANK\" src=\"img/Z.png\" class=\"slot-image blank\" />";
			}

			rows += "</div>";
		}

		rows += "</div>";

		/* 3 Jackpots */
		if ((slot[0] == "J") && (slot[1] == "J") && (slot[2] == "J")) {
			has_winner = 1;
			winnings = betamount * 500;
			kitty += winnings;
		}
		/* 2 Jackpots */
		else if (((slot[0] == "J") && (slot[1] == "J")) || ((slot[0] == "J") && (slot[2] == "J")) || ((slot[1] == "J") && (slot[2] == "J"))) {
			has_winner = 1;
			winnings = betamount * 300;
			kitty += winnings;
		}
		/* 3 Bars */
		else if ((slot[0] == "B") && (slot[1] == "B") && (slot[2] == "B")) {
			has_winner = 1;
			winnings = betamount * 400;
			kitty += winnings;
		}
		/* 2 Bars */
		else if (((slot[0] == "B") && (slot[1] == "B")) || ((slot[0] == "B") && (slot[2] == "B")) || ((slot[1] == "B") && (slot[2] == "B"))) {
			has_winner = 1;
			winnings = betamount * 250;
			kitty += winnings;
		}
		/* 3 Cherries */
		else if ((slot[0] == "C") && (slot[1] == "C") && (slot[2] == "C")) {
			has_winner = 1;
			winnings = betamount * 250;
			kitty += winnings;
		}
		/* 2 Cherries */
		else if (((slot[0] == "C") && (slot[1] == "C")) || ((slot[0] == "C") && (slot[2] == "C")) || ((slot[1] == "C") && (slot[2] == "C"))) {
			has_winner = 1;
			winnings = betamount * 150;
			kitty += winnings;
		}
		/* 3 Peaches */
		else if ((slot[0] == "P") && (slot[1] == "P") && (slot[2] == "P")) {
			has_winner = 1;
			winnings = betamount * 200;
			kitty += winnings;
		}
		/* 3 Apples */
		else if ((slot[0] == "A") && (slot[1] == "A") && (slot[2] == "A")) {
			has_winner = 1;
			winnings = betamount * 100;
			kitty += winnings;
		}
		/* 3 Grapes */
		else if ((slot[0] == "G") && (slot[1] == "G") && (slot[2] == "G")) {
			has_winner = 1;
			winnings = betamount * 50;
			kitty += winnings;
		}
		/* Nothing. Bet is consumed */

		/* Set Local Storage */
		try {
			localStorage.setItem("example_slotmachine_kitty", ("" + kitty));
			localStorage.setItem("example_slotmachine_numclicks", ("" + numclicks));

			if (has_winner == 1) {
				highscorelocal = localStorage.getItem("example_slotmachine_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("example_slotmachine_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("example_slotmachine_highscore", ("" + highscorelocal));
						localStorage.setItem("example_slotmachine_highscore_numclicks", ("" + numclicks));
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
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display") != "block") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display", "block");
			}

			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));
		} else {
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display") != "none") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display", "none");
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
			kitty = localStorage.getItem("example_slotmachine_kitty");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		kitty = parseInt(kitty);

		if (kitty <= 0) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display") != "none") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("display", "none");
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
