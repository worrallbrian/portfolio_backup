jQuery(document).ready(function() {
	/* Using HTML5 local storage to hold program variables */
	try {
		var highscorelocal = 0;

		/* Set or Reset kitty and click counter storage variables */
		localStorage.setItem("bwportfolio_slotmachinevideopoker_kitty", "500");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_numclicks", "0");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_inprogress", "0");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_bet", "0");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_PC0", "-1");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_PC1", "-1");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_PC2", "-1");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_PC3", "-1");
		localStorage.setItem("bwportfolio_slotmachinevideopoker_PC4", "-1");

		/* High Score */
		var highscorelocal = localStorage.getItem("bwportfolio_slotmachinevideopoker_highscore");
		if ((highscorelocal == null) || (highscorelocal == "")) {
			localStorage.setItem("bwportfolio_slotmachinevideopoker_highscore", "500");

			highscorelocal = 500;
		} else {
			highscorelocal = parseInt(highscorelocal);
		}

		/* Click Counter */
		var numclickslocal = localStorage.getItem("bwportfolio_slotmachinevideopoker_highscore_numclicks");
		if ((numclickslocal == null) || (numclickslocal == "")) {
			localStorage.setItem("bwportfolio_slotmachinevideopoker_highscore_numclicks", "0");

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

	function hideSlotsOutputRows() {
		if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
			jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
		}
	}

	function showSlotsOutputRowResult(val) {
		if (parseInt(val) == 0) {
			/* WIN */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "visible");
			}
		} else {
			/* LOSE */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}
		}
	}

	function disableGame() {
		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep").each(function() {
			if (!jQuery(this).hasClass("disabled")) {
				jQuery(this).addClass("disabled");
			}
		});

		if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
			jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").addClass("disabled");
		}

		hideSlotsOutputRows();

		jQuery(".slots .stage-row .stage-box .stage .slots-players-con .slots-score .score .floater").text("--");
	}

	function setCurrentPlayerScore(val) {
		var v = ((val != null) ? val.replace('"', "").replace(/((<([^>]+)>)&!(<br( )?(\/)?>))/ig, "") : "Nothing");
		jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-score .score .floater").html("" + v);
	}

	function setLoading() {
		var v = "<div class=\"program-loading-box\"><span class=\"program-loading p-l0\"></span><span class=\"program-loading p-l1\"></span><span class=\"program-loading p-l2\"></span></div>";
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(v);
	}

	function neuterHitButtons(val) {
		if (parseInt(val) == 1) {
			/* Disable Keep Indicators */
			jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep .slot-keep-button").each(function() {
				if (!jQuery(this).hasClass("disabled")) {
					jQuery(this).addClass("disabled");
				}
			});

			if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").addClass("disabled");
			}
		} else {
			/* Enable Keep Indicators */
			jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep").each(function() {
				if (jQuery(this).hasClass("disabled")) {
					jQuery(this).removeClass("disabled");
				}
			});

			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").removeClass("disabled");
			}
		}
	}

	function naughty() {
		var rows = "<div class=\"insufficient-credits\">BUMP</div>";
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

		disableGame();

		jQuery(".slots .stage-row .stage-box .stage .slots-players-con .slots-score .score .floater").text("TILT");
	}

	function doKeepButtonToggle(me) {
		if (me == null) {
			return;
		}

		if (jQuery(me).hasClass("disabled")) {
			return;
		}

		if (jQuery(me).find(".slot-keep-icon").text() == "H"){
			jQuery(me).find(".slot-keep-icon").text("D");
		} else if (jQuery(me).find(".slot-keep-icon").text() == "D") {
			jQuery(me).find(".slot-keep-icon").text("H");
		}
	}

	function toggleKeepButtonHandlers() {
		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep .slot-keep-button").each(function() {
			jQuery(this).off("click");
		});

		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-image").each(function() {
			jQuery(this).off("click");
		});

		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep .slot-keep-button").on("click", function() {
			doKeepButtonToggle(this);
		});

		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-image").on("click", function() {
			doKeepButtonToggle(jQuery(this).closest(".img-box").find(".slot-keep .slot-keep-button"));
		});
	}

	function runPoker(bet) {
		if ((bet == null) || (bet == "")) {
			return;
		}

		var rows = "",
		rows_player = "",
		playerscore = "",
		playercard = [-1, -1, -1, -1, -1],
		deck = {},
		pokerscore = null,
		kitty = -1,
		numclicks = -1,
		i = 0,
		j = 0,
		temp = 0,
		inprogress = 0,
		betamount = parseInt(bet);

		if (betamount <= 0) {
			return;
		}

		try {
			kitty = localStorage.getItem("bwportfolio_slotmachinevideopoker_kitty");
			numclicks = localStorage.getItem("bwportfolio_slotmachinevideopoker_numclicks");
			inprogress = localStorage.getItem("bwportfolio_slotmachinevideopoker_inprogress");

			localStorage.setItem("bwportfolio_slotmachinevideopoker_bet", "0");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_PC0", "-1");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_PC1", "-1");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_PC2", "-1");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_PC3", "-1");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_PC4", "-1");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		if (parseInt(inprogress) != 0) {
			naughty();
			return;
		}

		setLoading();

		neuterButtons(1);

		kitty = parseInt(kitty);

		if ((kitty <= 0) || (betamount > kitty)) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			disableGame();
			neuterButtons(0);
			return;
		}

		/* Run Video Poker */
		kitty -= betamount;
		numclicks++;

		/* Populate deck */
		for (i = 0; i < 52; i++) {
			deck[i] = i;
		}

		/* Shuffle deck */
		for (i = 51; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = deck[i];
			deck[i] = deck[j];
			deck[j] = temp;
		}

		/* Pull 5 new cards from deck */
		for (i = 0; i < 5; i++) {
			playercard[i] = new Card(deck[i]);
		}

		deck = null;

		/* Set Local Storage */
		try {
			localStorage.setItem("bwportfolio_slotmachinevideopoker_inprogress", "1");
			localStorage.setItem("bwportfolio_slotmachinevideopoker_bet", "" + betamount);
			localStorage.setItem("bwportfolio_slotmachinevideopoker_numclicks", ("" + numclicks));
			localStorage.setItem("bwportfolio_slotmachinevideopoker_kitty", "" + kitty);
			for (i = 0; i < 5; i++) {
				localStorage.setItem("bwportfolio_slotmachinevideopoker_PC"+i, "" + (playercard[i]).getOrig());
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		rows = "<div class=\"slots-con\">";
		rows_player = "<div class=\"slot-con\">";

		for (i = 0; i < 5; i++) {
			rows_player += drawCard((playercard[i]).getOrig(), 0, 0, 0);
		}

		rows += rows_player + "</div>";
		rows += drawVR();
		rows += "</div>";

		/* Get poker score message */
		pokerscore = new PokerScore(playercard);

		if (pokerscore != null) {
			playerscore = pokerscore.getText();
		} else {
			playerscore = "--";
		}

		pokerscore = null;

		neuterHitButtons(0);
		hideSlotsOutputRows();
		setCurrentPlayerScore(playerscore);

		jQuery(".slots .stage-row .stage-box .stage .num-plays-box .num-plays").empty().append(("" + numclicks));
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

		toggleKeepButtonHandlers();
	}

	function runPoker_stand() {
		if ((jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").length == 0) || (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").hasClass("disabled"))) {
			return;
		}

		var rows = "",
		rows_player = "",
		playerscore = "",
		pcard = [-1, -1, -1, -1, -1, -1],
		playercard = [-1, -1, -1, -1, -1],
		playercard_orig = [-1, -1, -1, -1, -1],
		heldcard = [0, 0, 0, 0, 0],
		deck = {},
		pokerscore = null,
		kitty = -1,
		numclicks = -1,
		i = 0,
		j = 0,
		k = 0,
		isunique = 0,
		has_winner = 0,
		winnings = 0,
		highscorelocal = -1,
		player = -1,
		inprogress = 0;

		try {
			kitty = localStorage.getItem("bwportfolio_slotmachinevideopoker_kitty");
			betamount = localStorage.getItem("bwportfolio_slotmachinevideopoker_bet");
			inprogress = localStorage.getItem("bwportfolio_slotmachinevideopoker_inprogress");
			numclicks = localStorage.getItem("bwportfolio_slotmachinevideopoker_numclicks");
			for (i = 0; i < 5; i++) {
				pcard[i] = localStorage.getItem("bwportfolio_slotmachinevideopoker_PC"+i);
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		if ((inprogress == null) || (parseInt(inprogress) != 1) || (betamount == null) || (parseInt(betamount) <= 0) || (kitty == null) || (parseInt(kitty) < 0)) {
			naughty();
			return;
		}

		kitty = parseInt(kitty);

		neuterHitButtons(1);

		/* Determine which cards are being Held */
		jQuery(".slots .stage-row .stage-box .stage .slots-result .slots-con .slot-con .img-box .slot-keep .slot-keep-button").each(function(i, v) {
			if (i > 4) {
				return false;
			}

			if ((jQuery(this).find(".slot-keep-icon").text() == "H")  && (heldcard[i] != null)) {
				heldcard[i] = 1;
			}
		});

		setLoading();

		/* Get original player's cards */
		for (i = 0; i < 5; i++) {
			playercard_orig[i] = new Card(pcard[i]);
		}

		pcard = null;

		/* Populate deck with cards not in player's hand */
		for (i = 0; i < 52; i++) {
			isunique = 1;

			for (j = 0; j < 5; j++) {
				if ((heldcard[j] == 1) && (i == parseInt((playercard_orig[j]).getOrig()))) {
					isunique = 0;
					break;
				}
			}

			if (isunique == 1) {
				deck[k] = i;
				k++;
			}
		}

		/* Shuffle deck */
		for (i = k; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = deck[i];
			deck[i] = deck[j];
			deck[j] = temp;
		}

		/* Keep Held cards, swap out not Held cards */
		for (i = 0; i < 5; i++) {
			if ((heldcard[i] != 1) && (deck[i] != null)) {
				playercard[i] = new Card(deck[i]);
			} else {
				playercard[i] = new Card(parseInt((playercard_orig[i]).getOrig()));
			}
		}

		playercard_orig = null;
		heldcard = null;
		deck = null;

		rows = "<div class=\"slots-con\">";
		rows_player = "<div class=\"slot-con\">";

		for (i = 0; i < 5; i++) {
			rows_player += drawCard((playercard[i]).getOrig(), 0, 0, 1);
		}

		rows += rows_player + "</div>";
		rows += drawVR();
		rows += "</div>";

		/* Get poker score message and multiplier */
		pokerscore = new PokerScore(playercard);

		if (pokerscore != null) {
			playerscore = pokerscore.getText();
			player = parseInt(pokerscore.getValue());

			/* Player has Pair or better, Player WINS */
			if (player > 0) {
				has_winner = 1;
				winnings = betamount * player;
				kitty += winnings;
			}
		} else {
			playerscore = "--";
		}

		pokerscore = null;

		/* Set Local Storage */
		try {
			localStorage.setItem("bwportfolio_slotmachinevideopoker_inprogress", "0");
			for (i = 0; i < 5; i++) {
				localStorage.setItem("bwportfolio_slotmachinevideopoker_PC"+i, "" + (playercard[i]).getOrig());
			}

			localStorage.setItem("bwportfolio_slotmachinevideopoker_kitty", ("" + kitty));

			if (has_winner == 1) {
				highscorelocal = localStorage.getItem("bwportfolio_slotmachinevideopoker_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("bwportfolio_slotmachinevideopoker_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("bwportfolio_slotmachinevideopoker_highscore", ("" + highscorelocal));
						localStorage.setItem("bwportfolio_slotmachinevideopoker_highscore_numclicks", ("" + numclicks));
						jQuery(".score-dialog .score-dialog-body .high-score-local-box .high-score-local .score").text(("" + highscorelocal));
						jQuery(".score-dialog .score-dialog-body .numspins-local-box .spins-local .spins").text(("" + numclicks));
					}
				}
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		setCurrentPlayerScore(playerscore);

		/* Set stage elements */
		if (has_winner == 1) {
			showSlotsOutputRowResult(0);
			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));
		} else {
			showSlotsOutputRowResult(1);
		}

		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

		neuterHitButtons(1);
		neuterButtons(0);
	}

	jQuery(".slots .buttons-row .buttons-box .bet-button").on("click", function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}

		var betamount = jQuery(this).attr("data-bet");

		if ((betamount != null) && (betamount != "")) {
			betamount = parseInt(betamount);

			if (betamount > 0) {
				runPoker(betamount);
			}
		}
	});

	jQuery(".slots .buttons-row .buttons-box .go-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}

		var betamount = jQuery(".slots .buttons-row .buttons-box .bet-custom").val();

		if ((betamount != null) && (betamount != "")) {
			betamount = parseInt(betamount);

			if (betamount > 0) {
				runPoker(betamount);
			}
		}
	});

	jQuery(".slots .buttons-row .buttons-box .rand-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}

		var betamount = 0,
		kitty = -1,
		rows = "";

		try {
			kitty = localStorage.getItem("bwportfolio_slotmachinevideopoker_kitty");
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		kitty = parseInt(kitty);

		if (kitty <= 0) {
			rows = "<div class=\"insufficient-credits\">You do not have enough credits.</div>";
			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

			disableGame();
			return;
		}

		betamount = Math.floor(Math.random() * (kitty - 1)) + 1;

		jQuery(".slots .buttons-row .buttons-box .bet-custom").val(("" + betamount));

		runPoker(betamount);
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

	jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}

		runPoker_stand();
	});

	/* Enable buttons */
	neuterButtons(0);

	if (jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").hasClass("disabled")) {
		jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").removeClass("disabled");
	}
});
