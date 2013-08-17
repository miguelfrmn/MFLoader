
var MFLoader = function(where, opts){
	var $loader = $('<div class="mf-loader" />');
	var $where = $(where);

	if(opts && opts.zIndex){
		$loader.css('z-index', opts.zIndex);
	}

	this.stop = function(){
		$where.css('visibility', 'visible');
		$loader.hide().remove();
	};

	$loader.css({
		top: $where.offset().top, 
		left: $where.offset().left,
		width:$where.width(),
		height: $where.height()
	});
	
	$('body').append($loader);
	
	$loader.show();
	$where.css('visibility', 'hidden');
}