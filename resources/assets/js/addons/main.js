$(document).ready(function() {

	$('body').removeClass('preload');

	$('.flex').resizable({
		resize: function(event, ui) {
			var width = ui.size.width;

			$('.main-content').css("left", width + 80);
			$('.myb-options-modal').css("left", width + 81);
		}
	});

	$('.content-wrapper > ins').click(function() {

		$(this).children().toggleClass('fa-caret-right fa-caret-down');

		$(this).parent().next().slideToggle('fast', function() {

		});
	});

	$('ul.nav-tabs').each(function() {

		var $active 	= $(this).find('a');
		var	$content 	= $(this).find('a');
		var	$links 		= $(this).find('a');

		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);

		$links.not($active).each(function () {
			$(this.hash).hide();
		});

		$(this).on('click', 'a', function(e) {
			
			$active.removeClass('active');
			$content.hide();
			
			$active = $(this);
			$content = $(this.hash);

			$active.addClass('active');
			$content.show();

			e.preventDefault();
		});
	});
});