jQuery(document).ready(function() {
	if ((jQuery(".statistical-lookup .values-box").length > 0) && (jQuery(".statistical-lookup .sheet-box").length > 0) && (jQuery(".statistical-lookup .barchart-box").length > 0) && (jQuery(".statistical-lookup .values-box .entry-counter"))) {
		/* Sort function */
		function sortNumber(a, b) {
			var a1 = null,
			b1 = null;

			try {
				a1 = (((a != null) && (Decimal.isDecimal(a))) ? a : new Decimal(a));
				b1 = (((b != null) && (Decimal.isDecimal(b))) ? b : new Decimal(b));
			} catch(e) {
				return 0;
			}

			return a1.minus(b1);
		}

		/* Gather numbers, compute statistics, show statistics, show bar graph */
		function computeStats() {
			var barrows = [],
			nums = [],
			modemap = [],
			population = new Decimal(0),
			sum = new Decimal(0),
			vari = new Decimal(0),
			variance = new Decimal(0),
			sd = new Decimal(0),
			mini = new Decimal(0),
			maxi = new Decimal(0),
			median = new Decimal(0),
			mean = new Decimal(0),
			seotm = new Decimal(0),
			temp = new Decimal(0),
			maxcount = new Decimal(0),
			mode = "0",
			cov = "DNE",
			i = 0,
			baroptions = null;

			jQuery(".statistical-lookup .values-box .entry-row .entry-input").each(function(i, o) {
				temp = jQuery(this).val();

				if ((temp == null) || (temp == "")) {
					temp = new Decimal(0);
				} else {
					try {
						temp = new Decimal(temp);
					} catch (e) {
						temp = new Decimal(0);
					}
				}

				nums.push(temp);

				if (i == 0) {
					mini = temp;
					maxi = temp;
				} else {
					if (temp.lt(mini)) {
						mini = temp;
					}

					if (temp.gt(maxi)) {
						maxi = temp;
					}
				}

				vari = vari.plus(temp.pow(2));
				sum = sum.plus(temp);
				population = population.plus(1);

				temp = temp.toString();

				jQuery(this).val(temp);
				barrows.push({label: "N" + (i + 1), y: parseFloat(temp)});

				if (modemap[temp] == null) {
					modemap[temp] = new Decimal(1);
				} else {
					modemap[temp] = (modemap[temp]).plus(1);
				}

				if ((modemap[temp]).gt(maxcount)) {
					maxcount = modemap[temp];
					mode = temp;
				} else if (((modemap[temp]).eq(maxcount)) && (mode != temp)) {
					mode = mode + ", " + temp;
				}
			});

			modemap = null;

			if (population.gt(0)) {
				mean = sum.div(population);
				variance = vari.div(population).minus(mean.pow(2));
				sd = variance.sqrt();

				nums = nums.sort(sortNumber);

				try {
					maxcount = new Decimal(nums.length);
				} catch(e) {
					maxcount = new Decimal(1);
				}

				temp = maxcount.minus(1).div(2).floor();

				if (maxcount.mod(2).eq(1)) {
					median = nums[(temp.toString())];
				} else {
					median = (nums[(temp.toString())]).plus(nums[(temp.plus(1).toString())]).div(2);
				}

				if (!mean.eq(0)) {
					cov = sd.div(mean).toString();
				}

				seotm = sd.div(population.sqrt());
			}

			nums = null;
			vari = null;
			temp = null;
			maxcount = null;

			jQuery(".statistical-lookup .sheet-box .population-value").text(population.toString());
			jQuery(".statistical-lookup .sheet-box .sum-value").text(sum.toString());
			jQuery(".statistical-lookup .sheet-box .mean-value").text(mean.toString());
			jQuery(".statistical-lookup .sheet-box .median-value").text(median.toString());
			jQuery(".statistical-lookup .sheet-box .minimum-value").text(mini.toString());
			jQuery(".statistical-lookup .sheet-box .maximum-value").text(maxi.toString());
			jQuery(".statistical-lookup .sheet-box .range-value").text((maxi.minus(mini).toString()));
			jQuery(".statistical-lookup .sheet-box .mode-value").text("" + mode);
			jQuery(".statistical-lookup .sheet-box .variance-value").text(variance.toString());
			jQuery(".statistical-lookup .sheet-box .sd-value").text(sd.toString());
			jQuery(".statistical-lookup .sheet-box .cov-value").text("" + cov);
			jQuery(".statistical-lookup .sheet-box .seotm-value").text(seotm.toString());

			population = null;
			sum = null;
			variance = null;
			sd = null;
			mini = null;
			maxi = null;
			median = null;
			mean = null;
			seotm = null;

			baroptions = {
				animationEnabled: true,
				theme: "light2",
				data: [{
					type: "column",
					dataPoints: barrows
				}]
			};

			if (jQuery(".statistical-lookup .barchart-box .ready-box").length > 0) {
				jQuery(".statistical-lookup .barchart-box").html("<div class=\"barchart-con\"></div>");
			}

			jQuery(".statistical-lookup .barchart-box .barchart-con").CanvasJSChart(baroptions);
		}

		/* Adds input field generically */
		function addInput() {
			var rows = "",
			counter = null;

			try {
				counter = new Decimal(jQuery(".statistical-lookup .values-box #entry-counter").val());
			} catch(e) {
				counter = new Decimal(0);
			}

			if (counter.gt(0)) {
				counter = counter.floor().plus(1);
			} else {
				counter = new Decimal(4);
			}

			jQuery(".statistical-lookup .values-box #entry-counter").val(counter.toString());

			rows = "<div class=\"col-sm-6 entry-row\">";
			rows += "<div class=\"form-group\">";
			rows += "<label class=\"entry-label\" for=\"entry" + counter + "\">Entry " + counter + ":</label>";
			rows += "<input type=\"number\" class=\"form-input entry-input\" name=\"entry" + counter + "\" value=\"\" />";
			rows += "<button type=\"button\" class=\"btn btn-error remove-button\">Remove</button>";
			rows += "</div>";
			rows += "</div>";

			jQuery(".statistical-lookup .values-box .values-row").append(rows);
		}

		jQuery(".statistical-lookup .buttons-box .addmore-button").click(function() {
			addInput();
		});

		/* Remove input field box generically */
		jQuery(".statistical-lookup .values-box").on("click", "button.remove-button", function() {
			jQuery(this).parent().parent().remove();
		});

		jQuery(".statistical-lookup .buttons-box .compute-button").click(function() {
			computeStats();
		});
	}
});
