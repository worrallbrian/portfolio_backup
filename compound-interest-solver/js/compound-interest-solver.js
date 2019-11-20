function getDecimaledValue(v1) {
	var temp2 = null;

	if ((v1 == null) || (v1 == "")) {
		temp2 = new Decimal(0);
	} else {
		try {
			temp2 = new Decimal(v1);
		} catch (e) {
			temp2 = new Decimal(0);
		}
	}

	return temp2;
}

function int_wash(v2) {
	return (((v2 != null) && (v2 != "")) ? parseInt(v2) : 0);
}

jQuery(document).ready(function() {
	if (jQuery(".cis .chart-row .chart-box").length > 0) {
		function doCalc() {
			var principal = getDecimaledValue(jQuery(".cis .form-row .principal-box .principal").val()),
			interest = getDecimaledValue(jQuery(".cis .form-row .interest-box .interest").val()),
			years = int_wash(jQuery(".cis .form-row .years-box .years").val()),
			calc_type = int_wash(jQuery(".cis .form-row #calc-type:checked").val()),
			barrows = [],
			baroptions = null,
			temp = null,
			temp2 = null,
			total = null,
			i = 0,
			j = 0;

			if ((principal == null) || (principal.lt(0))) {
				principal = new Decimal(0);
			}

			if ((interest == null) || (interest.lt(0))) {
				interest = new Decimal(0);
			}

			if (years < 1) {
				years = 1;
			} else if (years > 25) {
				years = 25;
			}

			if (calc_type == 1) {
				principal = principal.times(100).round().div(100);
			}

			jQuery(".cis .form-row .principal-box .principal").val(principal.toString());
			jQuery(".cis .form-row .interest-box .interest").val(interest.toString());
			jQuery(".cis .form-row .years-box .years").val("" + years);

			barrows.push({label: "0", y: parseFloat(((calc_type == 0) ? principal.toString() : principal.toFixed(2).toString()))});

			interest = interest.div(100).plus(1);

			if (calc_type == 0) {
				total = principal.mul(interest.pow(years));

				for (i = 0; i < years; i++) {
					j = i + 1;
					temp = principal.mul(interest.pow(j));
					barrows.push({label: "" + j, y: parseFloat(temp.toString())});
				}
			} else {
				temp = new Decimal(0);

				for (i = 0; i < years; i++) {
					j = i + 1;
					temp2 = temp;
					temp = temp.plus(principal.mul(interest.pow(j)).times(100).round().div(100).minus(temp2));
					barrows.push({label: "" + j, y: parseFloat(temp.toFixed(2).toString())});
				}

				total = temp;
				temp2 = null;
			}

			temp = null;

			jQuery(".cis .results-box-row-total .total-value .results-box-row-value").text("$" + ((calc_type == 0) ? total.toString() : total.toFixed(2).toString()));
			jQuery(".cis .results-box-row-accumulated .accumulated-value .results-box-row-value").text("$" + ((calc_type == 0) ? total.minus(principal).toString() : total.minus(principal).toFixed(2).toString()));

			principal = null;
			total = null;

			if (calc_type == 0) {
				baroptions = {
					animationEnabled: true,
					axisX: {
						title: "Years"
					},
					axisY: {
						prefix: "$"
					},
					theme: "light2",
					toolTip: {
						content: "Year {x}: ~ {y}"
					},
					data: [{
						type: "column",
						yValueFormatString: "$###,###.###########",
						dataPoints: barrows
					}]
				};
			} else {
				baroptions = {
					animationEnabled: true,
					axisX: {
						title: "Years"
					},
					axisY: {
						valueFormatString: "$###,###.00"
					},
					theme: "light2",
					toolTip: {
						content: "Year {x}: ~ {y}"
					},
					data: [{
						type: "column",
						yValueFormatString: "$###,###.00",
						dataPoints: barrows
					}]
				};
			}

			if (jQuery(".cis .chart-row .chart-box .ready-box").length > 0) {
				jQuery(".cis .chart-row .chart-box").html("<div class=\"barchart-con\"></div>");
			}

			jQuery(".cis .chart-row .chart-box .barchart-con").CanvasJSChart(baroptions);
		}

		jQuery(".cis .form-row .submit-box .submit-button").click(function() {
			doCalc();
		});
	}
});
