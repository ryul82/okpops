<script src="http://code.jquery.com/jquery.min.js"></script>
<script>
	$(function(){
		includeLayout();
	});

	function includeLayout(){
		var includeArea = $('[data-include]');
		var self, url;
		$.each(includeArea, function() {
			self = $(this);
			url = self.data("include");
			self.load(url, function() {
				self.removeAttr("data-include");
			});
		});
	}
</script>