		$("#rocket").css({
			"bottom": "0px"
		});
		$("#pin1").hide();
		$("#iss").hide();
		$("#satellite").hide();
		$(document).scroll(function() {
			var scrolled = $(document).scrollTop();
			//console.log(scrolled);
			var alt = Math.floor(120 * (scrolled / 600));
			$(".alt").text(alt + "km");
			if (alt >= 0 && alt <= 10) {
				$(".info").html("<h2>Troposphere</h2><p>Troposphere is the lowest region of the atmosphere, extending from the earth's surface to a height of about 5–10 km.</p>");
			} else if (alt >= 10 && alt <= 50) {
				$(".info").html("<h2>Stratosphere</h2><p>Stratosphere is the layer of the earth's atmosphere above the troposphere, extending to about 50 km above the earth's surface.</p>");
			} else if (alt >= 50 && alt <= 85) {
				$(".info").html("<h2>Mesosphere</h2><p>Mesosphere is the region of the earth's atmosphere above the stratosphere and below the troposphere, between about 50 and 80 km.</p>");
			} else if (alt >= 85 && alt <= 200) {
				$(".info").html("<h2>Exosphere</h2><p>Exosphere is the outermost region of a planet's atmosphere.</p>");
			} else if (alt >= 200 && alt <= 320) {
				$(".info").html("<h2 class='white-text'>Low Earth Orbit zone</h2><p class='white-text'>A low Earth orbit is an orbit around Earth with an altitude between the Earth's surface and 2,000 kilometers, <br />with an orbital period of between about 84 and 127 minutes.</p>");
				$("#iss").fadeOut(400);
			} else if (alt >= 320 && alt <= 360) {
				$(".info").html("<h2 class='white-text'>International Space Station</h2><p class='white-text'>International Space Station is a large spacecraft. It is a home where astronauts live.<br />The space station is also a science lab. Many countries worked together to build it. They also work together to use it.</p>");
				$("#iss").fadeIn(400);
				$("#satellite").fadeOut(400);
			} else if (alt >= 360 && alt <= 500) {
				$(".info").html("<h2 class='white-text'>Satellite orbit</h2><p class='white-text'>A satellite orbit is a place where most of satellites orbiting in the space.</p>");
				$("#iss").fadeOut(400);
				$("#satellite").fadeIn(400);
			} else if (alt >= 500 && alt <= 700) {
				$(".info").html("<h2 class='white-text'>High Earth Orbit</h2><p class='white-text'>A high Earth orbit is a geocentric orbit with an altitude entirely above that of a geosynchronous orbit</p>");
				$("#satellite").fadeOut(400);
			} else if (alt >= 700 && alt <= 1000) {
				$(".info").html("<h2 class='white-text'>Moon</h2><p class='white-text'>The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite.</p>");
			}
			// space
			if (scrolled >= 1000 && scrolled <= 3000) {
				$(".moon").fadeOut(400);
				$("#pin1").fadeIn(400);
				$("#rocket").fadeIn(400);
				$("#rocket").css({
					"background-image" : "url('assets/img/spaceship.png')"
				});
				//$(".info").fadeOut(400);
				$("#rocket").css({
					"bottom": (scrolled) / 10 + "px"
				});
				$(".space").css({
					"background-color": "#002171"
				});
				$(".alt").css({
					"color": "white"
				});
			}
			// earth
			else if (scrolled <= 1000) {
				$("#rocket").css({
					"background-image" : "url('assets/img/rocketnew.png')"
				});
				$(".moon").fadeOut(400);
				$("#rocket").fadeIn(400);
				$(".info").fadeIn(400);
				$("#rocket").css({
					"bottom": (scrolled) / 5 + "px"
				});
				$(".alt").css({
					"color": "black"
				});
				$("#pin1").fadeOut(400);
				if (scrolled <= 100) {
					$(".space").css({
						"background-color": "#e1f5fe"
					});
				} else if (scrolled >= 100 && scrolled <= 200) {
					$(".space").css({
						"background-color": "#b3e5fc"
					});
				} else if (scrolled >= 300 && scrolled <= 400) {
					$(".space").css({
						"background-color": "#81d4fa"
					});
				} else if (scrolled >= 500) {
					$(".space").css({
						"background-color": "#4fc3f7"
					});
				}
			}
			// moon
			else if (scrolled >= 3000 && scrolled <= 4000) {
				$(".info").css({
					"top" : "30%"
				});				
				//$(".info").html("<h2>Exosphere</h2>");
				$(".moon").fadeIn(400);
				$("#pin1").fadeOut(400);
				$("#rocket").fadeIn(400);
				$(".space").css({
					"background-color": "#002171"
				});
				$(".alt").css({
					"color": "white"
				});
				//$(".info").hide();
				$("#rocket").css({
					"bottom": (scrolled - 3000)/10 + "vh"
				});
			}
			// credit
			else if (scrolled >= 5000) {
				$(".moon").fadeOut(400);
				$(".space").css({
					"background-color": "#37474f"
				});
				$(".info").css({
					"top" : "50%"
				});
				$(".info").fadeIn(400).html("<center><h4 class='credit'>จัดทำโดย นักเรียนโรงเรียนมหิดลวิทยานุสรณ์</h4><br><img src='/assets/img/mwits.png' width='200px'></center>");
				$("#pin1").fadeOut(400);
				$("#rocket").fadeOut(400);
			}
		})