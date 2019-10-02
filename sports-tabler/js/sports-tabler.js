/* Keep only numbers */
function digit_wash(val) {
	return (((val != null) && (val != "")) ? val.toString().replace(/[^\d]/g, "") : "");
}

/* Keep only letters, numbers, periods, commas, and spaces */
function string_wash(val) {
	return (((val != null) && (val != "")) ? val.toString().replace(/[^a-zA-Z0-9., ]/g, "") : "");
}

/* Keep only letters, numbers, periods, commas, plus signs, and spaces */
function text_wash(val) {
	return (((val != null) && (val != "")) ? val.toString().replace(/[^a-zA-Z0-9.,+ ]/g, "") : "");
}

jQuery(document).ready(function() {
	/* Populate and show details dialog */
	function showDetailsDialog(me) {
		if (me == null) {
			return;
		}

		var id = digit_wash(jQuery(me).data("id")),
		team = string_wash(jQuery(me).data("team")),
		sport = string_wash(jQuery(me).data("sport")),
		league = string_wash(jQuery(me).data("league")),
		section = string_wash(jQuery(me).data("section")),
		division = string_wash(jQuery(me).data("division")),
		hometown = string_wash(jQuery(me).data("hometown")),
		city = "",
		province = "",
		country = "",
		parts = null;

		if (hometown != "") {
			parts = hometown.split(",");

			if ((parts != null) && (parts.length > 2)) {
				city = jQuery.trim(parts[0]);
				province = jQuery.trim(parts[1]);
				country = jQuery.trim(parts[2]);
			}

			parts = null;
		}

		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .id-value .latter").text(id);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .team-value .latter").text(team);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .sport-value .latter").text(sport);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .league-value .latter").text(league);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .section-value .latter").text(section);

		if ((section == "") && (league == "CFL")) {
			if (jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .section-value").css("display") != "none") {
				jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .section-value").css("display", "none");
			}
		} else if (jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .section-value").css("display") != "table-row") {
			jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .section-value").css("display", "table-row");
		}

		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .division-value .latter").text(division);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .city-value .latter").text(city);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .province-value .latter").text(province);
		jQuery(".details-dialog .details-dialog-body .details-dialog-body-inner .details-row .details-row-inner .details-dialog-table .country-value .latter").text(country);

		var popup = new Foundation.Reveal(jQuery("#details-dialog"));
		popup.open();
	}

	/* Toggle filter options button text */
	jQuery(".sports-tabler .filterOptionsButton-box .filterOptionsButton").click(function() {
		var temp = text_wash(jQuery(this).text());

		if (temp == "+ FILTER OPTIONS") {
			jQuery(this).text("- FILTER OPTIONS");
		} else {
			jQuery(this).text("+ FILTER OPTIONS");
		}
	});

	/* jtable definition */
	jQuery(".sports-tabler .thetable-row .thetable-row-inner #thetable").jtable({
		paging: true,
		pageSize: 10,
		sorting: true,
		defaultSorting: "id ASC",
		actions: {
			listAction: "ajax/getTeams.ajax.php",
			deleteAction: null,
			updateAction: null,
			createAction: null
		},
		fields: {
			id: {
				key: true,
				create: false,
				edit: false,
				sorting: true,
				title: "ID",
				width: "15%",
				listClass: "centerit"
			},
			team: {
				create: false,
				edit: false,
				sorting: true,
				title: "Team",
				width: "50%"
			},
			league: {
				create: false,
				edit: false,
				sorting: true,
				title: "League",
				width: "15%",
				listClass: "centerit"
			},
			infoButton: {
				create: false,
				edit: false,
				sorting: false,
				title: "Action",
				width: "20%",
				listClass: "vcenterit",
				display: function (r) {
					if ((r != null) && (r.record != null) && (r.record != "")) {
						return ("<button type=\"button\" class=\"button warning infoButton\" data-id=\"" + ((r.record.id != null) ? digit_wash(r.record.id) : "") + "\" data-team=\"" + ((r.record.team != null) ? string_wash(r.record.team) : "") + "\" data-sport=\"" + ((r.record.sport != null) ? string_wash(r.record.sport) : "") + "\" data-league=\"" + ((r.record.league != null) ? string_wash(r.record.league) : "") + "\" data-section=\"" + ((r.record.section != null) ? string_wash(r.record.section) : "") + "\" data-division=\"" + ((r.record.division != null) ? string_wash(r.record.division) : "") + "\" data-hometown=\"" + ((r.record.hometown != null) ? string_wash(r.record.hometown) : "") + "\">More Info</button>");
					} else {
						return ("<span class=\"no-button\">N/A</span>");
					}
				}
			}
		},
		recordsLoaded(e, r) {
			jQuery(".sports-tabler .thetable-row .thetable-row-inner .thetable .infoButton").off("click");

			jQuery(".sports-tabler .thetable-row .thetable-row-inner .thetable .infoButton").on("click", function() {
				showDetailsDialog(this);
			});
		}
	});

	/* Reload jtable with inputted filters, close pane, toggle filter options button text  */
	jQuery(".sports-tabler .controls-row .controls-row-inner .filter-button-box .filterButton").click(function() {
		jQuery(".sports-tabler .thetable-row .thetable-row-inner #thetable").jtable("load", {
			team: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .team-box .team-box-inner .team").val()),
			sport: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .sport-box .sport-box-inner .sport").val()),
			league: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .league-box .league-box-inner .league").val()),
			section: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .section-box .section-box-inner .section").val()),
			division: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .division-box .division-box-inner .division").val()),
			city: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .city-box .city-box-inner .city").val()),
			province: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .province-box .province-box-inner .province").val()),
			country: string_wash(jQuery(".sports-tabler .filter-options-pane .controls-row .controls-row-inner .country-box .country-box-inner .country").val())
		});

		jQuery(".sports-tabler #filter-options-pane").foundation("close");

		jQuery(".sports-tabler .filterOptionsButton-box .filterOptionsButton").text("+ FILTER OPTIONS");
	});

	/* Initial jtable load */
	jQuery(".sports-tabler .thetable-row .thetable-row-inner #thetable").jtable("load");

	/* Activate foundation components */
	jQuery(document).foundation();
});
