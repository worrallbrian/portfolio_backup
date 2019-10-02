jQuery(document).ready(function() {
	/* Using HTML5 local storage to hold program variables */
	try {
		var highscorelocal = 0;

		/* Set or Reset kitty and click counter storage variables */
		localStorage.setItem("example_slotmachineblackjack_kitty", "500");
		localStorage.setItem("example_slotmachineblackjack_numclicks", "0");
		localStorage.setItem("example_slotmachineblackjack_inprogress", "0");
		localStorage.setItem("example_slotmachineblackjack_bet", "0");
		localStorage.setItem("example_slotmachineblackjack_DC0", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC0", "-1");
		localStorage.setItem("example_slotmachineblackjack_DC1", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC1", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC2", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC3", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC4", "-1");
		localStorage.setItem("example_slotmachineblackjack_PC5", "-1");

		/* High Score */
		var highscorelocal = localStorage.getItem("example_slotmachineblackjack_highscore");
		if ((highscorelocal == null) || (highscorelocal == "")) {
			localStorage.setItem("example_slotmachineblackjack_highscore", "500");

			highscorelocal = 500;
		} else {
			highscorelocal = parseInt(highscorelocal);
		}

		/* Click Counter */
		var numclickslocal = localStorage.getItem("example_slotmachineblackjack_highscore_numclicks");
		if ((numclickslocal == null) || (numclickslocal == "")) {
			localStorage.setItem("example_slotmachineblackjack_highscore_numclicks", "0");

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
		if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
			jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
		}
		if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
			jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
		}
	}

	function showSlotsOutputRowResult(val) {
		var v = parseInt(val);
		if (v == 0) {
			/* WIN */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "visible");
			}
		} else if (v == 1) {
			/* DRAW */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "visible");
			}
		} else {
			/* LOSE */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-winner").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility") != "hidden") {
				jQuery(".slots .stage-row .stage-box .stage .slots-draw").css("visibility", "hidden");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility") != "visible") {
				jQuery(".slots .stage-row .stage-box .stage .slots-loser").css("visibility", "visible");
			}
		}
	}

	function disableGame() {
		if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").hasClass("disabled")) {
			jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").addClass("disabled");
		}
		if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
			jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").addClass("disabled");
		}
		if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").hasClass("disabled")) {
			jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").addClass("disabled");
		}
		hideSlotsOutputRows();

		jQuery(".slots .stage-row .stage-box .stage .slots-players-con .slots-score .score").each(function() {
			jQuery(this).text("--");
		});
	}

	function setCurrentHouseScore(val) {
		jQuery(".slots .stage-row .stage-box .stage .slots-house-con .slots-score .score").text("" + parseInt(val));
	}

	function setCurrentPlayerScore(val) {
		jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-score .score").text("" + parseInt(val));
	}

	function setLoading() {
		var v = "<div class=\"program-loading-box\"><span class=\"program-loading p-l0\"></span><span class=\"program-loading p-l1\"></span><span class=\"program-loading p-l2\"></span></div>";
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(v);
	}

	function neuterHitButtons(val) {
		var doIt = parseInt(val);
		if (doIt == 2) {
			/* Enable Hit and Stand, disable Doubledown */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").removeClass("disabled");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").removeClass("disabled");
			}
			if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").addClass("disabled");
			}
		} else if (doIt == 1) {
			/* Disable Hit, Stand and Doubledown */
			if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").addClass("disabled");
			}
			if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").addClass("disabled");
			}
			if (!jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").addClass("disabled");
			}
		} else {
			/* Enable Hit, Stand and Doubledown */
			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .hit-button").removeClass("disabled");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .stand-button").removeClass("disabled");
			}
			if (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").hasClass("disabled")) {
				jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-con .slots-player-buttons-box .doubledown-button").removeClass("disabled");
			}
		}
	}

	function naughty() {
		var rows = "<div class=\"insufficient-credits\">BUMP</div>";
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);

		disableGame();
	}

	function runSlots(bet) {
		if ((bet == null) || (bet == "")) {
			return;
		}

		var rows = "",
		rows_house = "",
		rows_player = "",
		housecard = [-1, -1],
		playercard = [-1, -1],
		kitty = -1,
		numclicks = -1,
		i = 0,
		house = -1,
		player = -1,
		housescore = 0,
		playerscore = 0,
		inprogress = 0,
		betamount = parseInt(bet);

		if (betamount <= 0) {
			return;
		}

		try {
			kitty = localStorage.getItem("example_slotmachineblackjack_kitty");
			numclicks = localStorage.getItem("example_slotmachineblackjack_numclicks");
			inprogress = localStorage.getItem("example_slotmachineblackjack_inprogress");

			localStorage.setItem("example_slotmachineblackjack_bet", "0");
			localStorage.setItem("example_slotmachineblackjack_DC0", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC0", "-1");
			localStorage.setItem("example_slotmachineblackjack_DC1", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC1", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC2", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC3", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC4", "-1");
			localStorage.setItem("example_slotmachineblackjack_PC5", "-1");
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

		/* Run Blackjack */
		kitty -= betamount;
		numclicks++;

		for (i = 0; i < 2; i++) {
			house = Math.floor(Math.random() * 52);
			player = Math.floor(Math.random() * 52);
			housecard[i] = new Card(house);
			playercard[i] = new Card(player);
		}

		/* Set Local Storage */
		try {
			localStorage.setItem("example_slotmachineblackjack_inprogress", "1");
			localStorage.setItem("example_slotmachineblackjack_bet", "" + betamount);
			localStorage.setItem("example_slotmachineblackjack_numclicks", ("" + numclicks));
			localStorage.setItem("example_slotmachineblackjack_kitty", "" + kitty);
			for (i = 0; i < 2; i++) {
				localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
				localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		rows = "<div class=\"slots-con\">";
		rows_house = "<div class=\"slot-con slot-con-house\">";
		rows_player = "<div class=\"slot-con slot-con-player\">";

		for (i = 0; i < 2; i++) {
			rows_house += drawCard((housecard[i]).getOrig(), ((i == 0) ? 1 : 0), 1);
			rows_player += drawCard((playercard[i]).getOrig(), 0, 0);
			player = (playercard[i]).getValue();
			if (((playercard[i]).checkIsAce()) && (playerscore < 11)) {
				player = 11;
			}
			playerscore += player;
			housescore += ((i == 0) ? 0 : (housecard[i]).getValue());
			if ((i > 0) && ((housecard[i]).checkIsAce())) {
				housescore += 10;
			}
		}

		rows += rows_house + "</div>";
		rows += drawVR();
		rows += rows_player + "</div></div>";

		neuterHitButtons(((betamount >= kitty) ? 2 : 0));
		hideSlotsOutputRows();
		setCurrentHouseScore(housescore);
		setCurrentPlayerScore(playerscore);

		jQuery(".slots .stage-row .stage-box .stage .num-plays-box .num-plays").empty().append(("" + numclicks));
		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));
	}

	function runSlots_stand() {
		if ((jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").length == 0) || (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").hasClass("disabled"))) {
			return;
		}

		var rows = "",
		rows_house = "",
		rows_player = "",
		hcard = [-1, -1],
		housecard = [-1, -1],
		pcard = [-1, -1, -1, -1, -1, -1],
		playercard = [-1, -1, -1, -1, -1, -1],
		kitty = -1,
		numclicks = -1,
		i = 0,
		has_winner = 0,
		has_draw = 0,
		winnings = 0,
		highscorelocal = -1,
		house = -1,
		player = -1,
		playerscore = 0,
		housescore = 0,
		playeracecount = 0,
		houseacecount = 0,
		housecardcount = 0,
		diff = 0,
		betamount = 0,
		inprogress = 0;

		try {
			kitty = localStorage.getItem("example_slotmachineblackjack_kitty");
			betamount = localStorage.getItem("example_slotmachineblackjack_bet");
			inprogress = localStorage.getItem("example_slotmachineblackjack_inprogress");
			numclicks = localStorage.getItem("example_slotmachineblackjack_numclicks");
			for (i = 0; i < 2; i++) {
				hcard[i] = localStorage.getItem("example_slotmachineblackjack_DC"+i);
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
			}
			for (i = 2; i < 6; i++) {
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
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

		setLoading();

		for (i = 0; i < 2; i++) {
			housecard[i] = new Card(hcard[i]);
			playercard[i] = new Card(pcard[i]);
		}
		for (i = 2; i < 6; i++) {
			playercard[i] = new Card(pcard[i]);
		}

		hcard = null;
		pcard = null;

		rows = "<div class=\"slots-con\">";
		rows_house = "<div class=\"slot-con slot-con-house\">";
		rows_player = "<div class=\"slot-con slot-con-player\">";

		for (i = 0; i < 6; i++) {
			if ((i < 3) && (housecard[i] != null) && (parseInt((housecard[i]).getOrig()) > -1)) {
				housecardcount++;
				rows_house += drawCard((housecard[i]).getOrig(), ((i == 0) ? 2 : 0), 1);
				house = (housecard[i]).getValue();
				if ((housecard[i]).checkIsAce()) {
					houseacecount++;
				}
				housescore += house;
			}
			if ((playercard[i] != null) && (parseInt((playercard[i]).getOrig()) > -1)) {
				rows_player += drawCard((playercard[i]).getOrig(), 0, 0);
				player = (playercard[i]).getValue();
				if ((playercard[i]).checkIsAce()) {
					playeracecount++;
				}
				playerscore += player;
			}
		}

		/* Increment for aces if appropriate */
		if ((housescore < 12) && (houseacecount > 0)) {
			housescore += 10;
		}

		if ((playerscore < 12) && (playeracecount > 0)) {
			playerscore += 10;
		}

		/* Dealer gets cards until conditions are met */
		if (housescore < 17) {
			while ((housescore < 17) && (housecardcount < 6)) {
				house = Math.floor(Math.random() * 52);
				i = housecardcount - 1;
				housecard[i] = new Card(house);
				rows_house += drawCard((housecard[i]).getOrig(), 3, 1);
				house = (housecard[i]).getValue();
				if (((housecard[i]).checkIsAce()) && (housescore < 11)) {
					house = 11;
					houseacecount++;
				}
				housescore += house;
				if ((housescore > 21) && (houseacecount > 0)) {
					housescore -= 10;
					houseacecount--;
				}
				housecardcount++;
			}
		}

		/* Player Wins */
		if (housescore > 21) {
			has_winner = 1;
			winnings = betamount * 2;
			kitty += winnings;
		} else if (housecardcount < 6) {
			diff = housescore - playerscore;

			/* Player Wins */
			if (diff < 0) {
				has_winner = 1;
				winnings = betamount * 2;
				kitty += winnings;
			}
			/* Draw */
			else if (diff == 0) {
				has_draw = 1;
				winnings = betamount * 1;
				kitty += winnings;
			}
		}
		/* House Wins */

		rows += rows_house + "</div>";
		rows += drawVR();
		rows += rows_player + "</div></div>";

		/* Set Local Storage */
		try {
			localStorage.setItem("example_slotmachineblackjack_inprogress", "0");
			for (i = 0; i < 6; i++) {
				if (housecard[i] != null) {
					localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
				} else {
					localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
				}
				localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
			}

			localStorage.setItem("example_slotmachineblackjack_kitty", ("" + kitty));

			if ((has_winner == 1) || (has_draw == 1)) {
				highscorelocal = localStorage.getItem("example_slotmachineblackjack_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("example_slotmachineblackjack_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("example_slotmachineblackjack_highscore", ("" + highscorelocal));
						localStorage.setItem("example_slotmachineblackjack_highscore_numclicks", ("" + numclicks));
						jQuery(".score-dialog .score-dialog-body .high-score-local-box .high-score-local .score").text(("" + highscorelocal));
						jQuery(".score-dialog .score-dialog-body .numspins-local-box .spins-local .spins").text(("" + numclicks));
					}
				}
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		housecard = null;
		playercard = null;

		setCurrentHouseScore(housescore);

		/* Set stage elements */
		if (has_winner == 1) {
			showSlotsOutputRowResult(0);
			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));
		} else if (has_draw == 1) {
			showSlotsOutputRowResult(1);
			jQuery(".slots .stage-row .stage-box .stage .slots-draw .winnings").empty().append(("" + winnings));
		} else {
			showSlotsOutputRowResult(2);
			jQuery(".slots .stage-row .stage-box .stage .slots-loser .winnings").empty().append(("" + betamount));
		}

		neuterHitButtons(1);

		jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

		neuterButtons(0);
	}

	function runSlots_hit() {
		if ((jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .hit-button").length == 0) || (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .hit-button").hasClass("disabled"))) {
			return;
		}

		var rows = "",
		rows_house = "",
		rows_player = "",
		hcard = [-1, -1],
		housecard = [-1, -1],
		pcard = [-1, -1],
		playercard = [-1, -1, -1, -1, -1, -1],
		kitty = -1,
		numclicks = -1,
		i = 0,
		winnings = 0,
		highscorelocal = -1,
		house = -1,
		player = -1,
		playerscore = 0,
		housescore = 0,
		housescore_show = 0,
		playeracecount = 0,
		playeraceused = 0,
		houseacecount = 0,
		playercardcount = 0,
		gamedecision = -1,
		betamount = 0,
		inprogress = 0;

		try {
			kitty = localStorage.getItem("example_slotmachineblackjack_kitty");
			betamount = localStorage.getItem("example_slotmachineblackjack_bet");
			inprogress = localStorage.getItem("example_slotmachineblackjack_inprogress");
			numclicks = localStorage.getItem("example_slotmachineblackjack_numclicks");
			for (i = 0; i < 2; i++) {
				hcard[i] = localStorage.getItem("example_slotmachineblackjack_DC"+i);
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
			}
			for (i = 2; i < 6; i++) {
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
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

		setLoading();

		for (i = 0; i < 2; i++) {
			housecard[i] = new Card(hcard[i]);
			playercard[i] = new Card(pcard[i]);
		}
		for (i = 2; i < 6; i++) {
			playercard[i] = new Card(pcard[i]);
		}

		hcard = null;
		pcard = null;

		rows = "<div class=\"slots-con\">";
		rows_player = "<div class=\"slot-con slot-con-player\">";

		for (i = 0; i < 6; i++) {
			if ((playercard[i] != null) && (parseInt((playercard[i]).getOrig()) > -1)) {
				playercardcount++;
				rows_player += drawCard((playercard[i]).getOrig(), 0, 0);
				player = (playercard[i]).getValue();
				if ((playercard[i]).checkIsAce()) {
					playeracecount++;
				}
				playerscore += player;
			}
		}

		/* Increment for aces if appropriate */
		if ((playerscore < 12) && (playeracecount > 0)) {
			playerscore += 10;
			playeraceused = 1;
		}

		if (playerscore > 21) {
			naughty();
			return;
		}

		/* Get new player card */
		playeracecount = 0;
		playercardcount++;
		player = Math.floor(Math.random() * 52);
		playercard[playercardcount] = new Card(player);

		rows_player += drawCard((playercard[playercardcount]).getOrig(), 0, 0);
		if ((playerscore < 11) && ((playercard[playercardcount]).checkIsAce())) {
			playeracecount++;
			playerscore += 11;
		} else {
			playerscore += (playercard[playercardcount]).getValue();
		}

		if ((playerscore > 21) && (playeraceused == 1)) {
			playerscore -= 10;
			playeraceused = 0;
		}

		if (playerscore > 21) {
			/* BUST */
			gamedecision = 0;
		} else if (playercardcount > 5) {
			/* AUTO WIN */
			gamedecision = 1;
		} else {
			/* CONTINUE */
			gamedecision = 2;
		}

		rows_house = "<div class=\"slot-con slot-con-house\">";
		for (i = 0; i < 6; i++) {
			if ((i < 3) && (housecard[i] != null) && (parseInt((housecard[i]).getOrig()) > -1)) {
				rows_house += drawCard((housecard[i]).getOrig(), ((i == 0) ? ((gamedecision == 2) ? 1 : 2) : 0), 1);
				house = (housecard[i]).getValue();
				if ((housecard[i]).checkIsAce()) {
					houseacecount++;
				}
				housescore += house;
				housescore_show = ((i == 0) ? 0 : house);
			}
		}

		/* Increment for aces if appropriate */
		if ((housescore < 11) && (houseacecount > 0)) {
			housescore += 10;
		}

		rows += rows_house + "</div>";
		rows += drawVR();
		rows += rows_player + "</div></div>";

		/* BUST */
		if (gamedecision == 0) {
			/* Set Local Storage */
			try {
				localStorage.setItem("example_slotmachineblackjack_inprogress", "0");
				for (i = 0; i < 6; i++) {
					if (housecard[i] != null) {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
					} else {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
					}
					localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
				}

				localStorage.setItem("example_slotmachineblackjack_kitty", ("" + kitty));
			} catch (e) {
				alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
				return;
			}

			housecard = null;
			playercard = null;

			/* Set stage elements */
			showSlotsOutputRowResult(2);

			jQuery(".slots .stage-row .stage-box .stage .slots-loser .winnings").empty().append(("" + betamount));

			neuterHitButtons(1);
			setCurrentHouseScore(housescore);
			setCurrentPlayerScore(playerscore);

			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
			jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

			neuterButtons(0);
		} else if (gamedecision == 1) {
			/* AUTO WIN */
			winnings = betamount * 2;
			kitty += winnings;

			/* Set Local Storage */
			try {
				localStorage.setItem("example_slotmachineblackjack_inprogress", "0");
				for (i = 0; i < 6; i++) {
					if (housecard[i] != null) {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
					} else {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
					}
					localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
				}

				localStorage.setItem("example_slotmachineblackjack_kitty", ("" + kitty));

				highscorelocal = localStorage.getItem("example_slotmachineblackjack_highscore");
				if ((highscorelocal == null) || (highscorelocal == "")) {
					localStorage.setItem("example_slotmachineblackjack_highscore", ("" + kitty));
				} else {
					highscorelocal = parseInt(highscorelocal);

					if (kitty > highscorelocal) {
						highscorelocal = parseInt(kitty);
						localStorage.setItem("example_slotmachineblackjack_highscore", ("" + highscorelocal));
						localStorage.setItem("example_slotmachineblackjack_highscore_numclicks", ("" + numclicks));
						jQuery(".score-dialog .score-dialog-body .high-score-local-box .high-score-local .score").text(("" + highscorelocal));
						jQuery(".score-dialog .score-dialog-body .numspins-local-box .spins-local .spins").text(("" + numclicks));
					}
				}
			} catch (e) {
				alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
				return;
			}

			housecard = null;
			playercard = null;

			/* Set stage elements */
			showSlotsOutputRowResult(0);

			jQuery(".slots .stage-row .stage-box .stage .slots-winner .winnings").empty().append(("" + winnings));

			neuterHitButtons(1);
			setCurrentHouseScore(housescore);
			setCurrentPlayerScore(playerscore);

			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
			jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

			neuterButtons(0);
		} else {
			/* CONTINUE */

			/* Set Local Storage */
			try {
				localStorage.setItem("example_slotmachineblackjack_inprogress", "1");
				for (i = 0; i < 6; i++) {
					if (housecard[i] != null) {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
					} else {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
					}
					localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
				}
			} catch (e) {
				alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
				return;
			}

			housecard = null;
			playercard = null;

			neuterHitButtons(2);
			hideSlotsOutputRows();
			setCurrentHouseScore(housescore_show);
			setCurrentPlayerScore(playerscore);

			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
		}
	}

	function runSlots_doubledown() {
		if ((jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .doubledown-button").length == 0) || (jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .doubledown-button").hasClass("disabled"))) {
			return;
		}

		var rows = "",
		rows_house = "",
		rows_player = "",
		hcard = [-1, -1],
		housecard = [-1, -1],
		pcard = [-1, -1],
		playercard = [-1, -1, -1, -1, -1, -1],
		kitty = -1,
		numclicks = -1,
		i = 0,
		highscorelocal = -1,
		house = -1,
		player = -1,
		playerscore = 0,
		housescore = 0,
		housescore_show = 0,
		playeracecount = 0,
		playeraceused = 0,
		houseacecount = 0,
		playercardcount = 0,
		betamount = 0,
		inprogress = 0;

		try {
			kitty = localStorage.getItem("example_slotmachineblackjack_kitty");
			betamount = localStorage.getItem("example_slotmachineblackjack_bet");
			inprogress = localStorage.getItem("example_slotmachineblackjack_inprogress");
			for (i = 0; i < 2; i++) {
				hcard[i] = localStorage.getItem("example_slotmachineblackjack_DC"+i);
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
			}
			for (i = 2; i < 6; i++) {
				pcard[i] = localStorage.getItem("example_slotmachineblackjack_PC"+i);
			}
		} catch (e) {
			alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
			return;
		}

		if ((inprogress == null) || (parseInt(inprogress) != 1) || (betamount == null) || (parseInt(betamount) <= 0) || (kitty == null) || (parseInt(kitty) < 0) || (parseInt(betamount) > parseInt(kitty))) {
			naughty();
			return;
		}

		betamount = parseInt(betamount);

		kitty = parseInt(kitty) - betamount;

		betamount *= 2;

		setLoading();

		for (i = 0; i < 2; i++) {
			housecard[i] = new Card(hcard[i]);
			playercard[i] = new Card(pcard[i]);
		}
		for (i = 2; i < 6; i++) {
			playercard[i] = new Card(pcard[i]);
		}

		hcard = null;
		pcard = null;

		rows = "<div class=\"slots-con\">";
		rows_player = "<div class=\"slot-con slot-con-player\">";
		rows_house = "<div class=\"slot-con slot-con-house\">";

		for (i = 0; i < 6; i++) {
			if ((i < 3) && (housecard[i] != null) && (parseInt((housecard[i]).getOrig()) > -1)) {
				rows_house += drawCard((housecard[i]).getOrig(), ((i == 0) ? 2 : 0), 1);
				house = (housecard[i]).getValue();
				if ((housecard[i]).checkIsAce()) {
					houseacecount++;
				}
				housescore += house;
				housescore_show = ((i == 0) ? 0 : house);
			}
			if ((playercard[i] != null) && (parseInt((playercard[i]).getOrig()) > -1)) {
				playercardcount++;
				rows_player += drawCard((playercard[i]).getOrig(), 0, 0);
				player = (playercard[i]).getValue();
				if ((playercard[i]).checkIsAce()) {
					playeracecount++;
				}
				playerscore += player;
			}
		}

		/* Increment for aces if appropriate */
		if ((housescore < 12) && (houseacecount > 0)) {
			housescore += 10;
		}

		if ((playerscore < 12) && (playeracecount > 0)) {
			playerscore += 10;
			playeraceused = 1;
		}

		if (playerscore > 21) {
			naughty();
			return;
		}

		/* Get new player card */
		playeracecount = 0;
		playercardcount++;
		player = Math.floor(Math.random() * 52);
		playercard[playercardcount] = new Card(player);

		rows_player += drawCard((playercard[playercardcount]).getOrig(), 0, 0);
		if ((playerscore < 11) && ((playercard[playercardcount]).checkIsAce())) {
			playeracecount++;
			playerscore += 11;
		} else {
			playerscore += (playercard[playercardcount]).getValue();
		}

		if ((playerscore > 21) && (playeraceused == 1)) {
			playerscore -= 10;
			playeraceused = 0;
		}

		rows += rows_house + "</div>";
		rows += drawVR();
		rows += rows_player + "</div></div>";

		/* BUST */
		if (playerscore > 21) {
			/* Set Local Storage */
			try {
				localStorage.setItem("example_slotmachineblackjack_inprogress", "0");
				localStorage.setItem("example_slotmachineblackjack_bet", "" + betamount);
				for (i = 0; i < 6; i++) {
					if (housecard[i] != null) {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
					} else {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
					}
					localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
				}

				localStorage.setItem("example_slotmachineblackjack_kitty", ("" + kitty));
			} catch (e) {
				alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
				return;
			}

			housecard = null;
			playercard = null;

			/* Set stage elements */
			showSlotsOutputRowResult(2);

			jQuery(".slots .stage-row .stage-box .stage .slots-loser .winnings").empty().append(("" + betamount));

			neuterHitButtons(1);
			setCurrentHouseScore(housescore);
			setCurrentPlayerScore(playerscore);

			jQuery(".slots .stage-row .stage-box .stage .slots-result").empty().append(rows);
			jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));
			jQuery(".slots .stage-row .stage-box .stage .num-plays-box .num-plays").empty().append(("" + numclicks));

			neuterButtons(0);
		} else {
			/* FORCE GAME DECISION */

			/* Set Local Storage */
			try {
				localStorage.setItem("example_slotmachineblackjack_inprogress", "1");
				localStorage.setItem("example_slotmachineblackjack_bet", "" + betamount);
				for (i = 0; i < 6; i++) {
					if (housecard[i] != null) {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "" + (housecard[i]).getOrig());
					} else {
						localStorage.setItem("example_slotmachineblackjack_DC"+i, "-1");
					}
					localStorage.setItem("example_slotmachineblackjack_PC"+i, "" + (playercard[i]).getOrig());
				}

				localStorage.setItem("example_slotmachineblackjack_kitty", ("" + kitty));
			} catch (e) {
				alert("Local Storage cannot be resolved. Please enable HTML5 Local Storage to operate Slot Machine.");
				return;
			}

			housecard = null;
			playercard = null;

			setCurrentHouseScore(housescore_show);
			setCurrentPlayerScore(playerscore);

			jQuery(".slots .stage-row .stage-box .stage .avail-credits-box .credits").empty().append(("" + kitty));

			runSlots_stand();
		}
	}

	jQuery(".slots .buttons-row .buttons-box .bet-button").on("click", function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}

		var betamount = jQuery(this).attr("data-bet");

		if ((betamount != null) && (betamount != "")) {
			betamount = parseInt(betamount);

			if (betamount > 0) {
				runSlots(betamount);
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
				runSlots(betamount);
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
			kitty = localStorage.getItem("example_slotmachineblackjack_kitty");
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

	jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .hit-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}
		runSlots_hit();
	});

	jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .stand-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}
		runSlots_stand();
	});
	jQuery(".slots .stage-row .stage-box .stage .slots-user-con .slots-player-buttons-box .doubledown-button").click(function() {
		if (jQuery(this).hasClass("disabled")) {
			return;
		}
		runSlots_doubledown();
	});

	/* Enable buttons */
	neuterButtons(0);

	if (jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").hasClass("disabled")) {
		jQuery(".slots .buttons-row .buttons-box .op-buttons-box .score-button").removeClass("disabled");
	}
});
