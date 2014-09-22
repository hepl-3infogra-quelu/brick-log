/* HEPL RIA 2014 - Cours
 *
 * JS Document - /js/script.js
 *
 * coded by Luc Matagne
 * started at 22/09/2014
 */

/* jshint boss: true, curly: true, eqeqeq: rue, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

// start your work here.

(function ($) {
	"use strict";

	// Exec au chargement de la page
	$(function () {
		// Exo 1
		$('a[rel="external"').click(function () {
			window.open($(this).attr('href'));
			return false;
		});
		// OR
		// $('a[rel="external"').attr("target" , "_new"); --> Valable en html 5

		// Exo 2
		var figure = 0;
		var trombinoFigure;

		var _animateTrombino = function () {
			var current = trombinoFigure.filter(":visible");
			var next;

			if (current.next().size()) {
				next = current.next();
			} else {
				next = trombinoFigure.first();
			}

			current.fadeOut("fast", function () {
				next.fadeIn("fast");
			});
		};

		(trombinoFigure = $('#trombino figure')).hide().first().show();

		window.setInterval(_animateTrombino, 3000);

		// Exo 3
		var _fetchComments = function () {
			$.ajax({
				url: "comments.json",
				type: "get",
				responseType: "json",
				error: function (oXHR, sStatus, oError) {
					console.error("Shit happens", oError);
				},
				success: function (aResponse) {
					// Méthode + performante que le for(var i = 0; ... [micro perf]
					for (var i = 0; i < aRes.length; i++) {
						aRes[i]
					};
					var _i = -1,
						oComment, comment;
					for (; oComment = aResponse[++_i];) {
						comment = commentTemplate.clone();
						comment
							.find("h4 strong")
							.text(oComment.author.name)
							.end()
							.find("p")
							.text(oComment.content)
							.end()
							.appendTo(commentsContainer);
					}
				}
			});
		};

		var commentTemplate, commentsContainer = $("#comments ol");

		commentTemplate = commentsContainer.find("li").first().clone();
		_fetchComments();
		window.setInterval(_fetchComments, 5000);

		// Exo 4
		var _closeButtonclicked = function (e) {
			e.preventDefault();
			$(this)
				.parent()
				.empty()
				.text("Ce commentaire a été modéré.")
				.removeClass("alert-block")
				.removeClass("alert-info")
				.addClass("alert-error");
		};

		commentsContainer.on("click", ".close", _closeButtonclicked);
	});
})(jQuery);
