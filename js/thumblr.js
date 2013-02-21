var thumblr = function(request,callback){
	var rq = {src: null, width: 220, height: 180, type: 'image/png', quality: 1},
		d = document,
		canvas = d.createElement('canvas');
	canvas.style.display = 'none';
	d.body.appendChild(canvas);
	var req = request;
	if(!req.image){callback(null);return false}else{rq.src = req.image.src;}
	if(req.width)rq.width = req.width;
	if(req.height)rq.height = req.height;
	if(req.type)rq.type = req.type;
	if(req.quality)rq.quality = req.quality;
	var context = canvas.getContext('2d'),
		image = new Image();
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
};