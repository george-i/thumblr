/* thumblr v1.0*/
/* this small plugin creates a thumbnail from an image using html5 canvas*/
(function($){
	$.fn.thumbler = function(options,callback){
		var settings = $.extend({
			width: 220,
			height: 180,
			type: 'image/png',
			quality: 1
		}, options);
		return this.each(function(){
			settings.src = this.src;
			var rq = settings;
			var d = document,
			canvas = d.createElement('canvas');
			canvas.style.display = 'none';
			d.body.appendChild(canvas);
			var context = canvas.getContext('2d'), image = new Image();
			image.src = rq.src;
			image.onload = function(){
				var imgWidth = image.width;
				var imgHeight = image.height;
				if(imgWidth>rq.width || imgHeight>rq.height){
					if(imgWidth>imgHeight){
						var ratio = rq.width/imgWidth;
						rq.height = imgHeight * ratio;
					}else
					if(imgHeight>imgWidth){
						var ratio = rq.height/imgHeight;
						rq.width = imgWidth * ratio;
					}
				}else{
					rq.width = imgWidth;
					rq.height = imgHeight;
				}
				canvas.setAttribute('width',rq.width);
				canvas.setAttribute('height',rq.height);
				context.drawImage(image,0,0,imgWidth,imgHeight,0,0,rq.width,rq.height);
				var dataurl = canvas.toDataURL(rq.type,rq.quality);
				d.body.removeChild(canvas);
				callback({url: dataurl, width: rq.width, height: rq.height})
			};
		});
	}
})(jQuery);