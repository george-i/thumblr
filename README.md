<h1>thumblr</h1>
=======

<strong>'thumblr'</strong> creates thumbnails from images using HTML5 canvas.

There are two versions of the code: JavaScript and jQuery plugin.

For both versions you pass options and a callback.
The callback returns null on error or object: url,width,height.


<h3>JavaScript version request example.</h3>

	// image url, thumb width, thumb height, file type, quality, callback
	var request = {
		image: document.getElementById('test'), /* DOM image element, required */
		width: 220, /* integer, optional, default: 220 */
		height: 180, /* number, optional, default: 180 */
		type: 'image/png', /* string, optional, default: 'image/png' */
		quality: 1, /* number, optional, default: 1 */
	};
	thumblr(request, function(data){
		// returns null on error or object: url,width,height
        document.body.innerHTML += '<img src="'+data.url+'" width="'+data.width+'" height="'+data.height+'"/>';
	});

<h3>jQuery version request example.</h3>

  	var opts = {
  		width: 220, /* integer, optional, default: 220 */
  		height: 180, /* number, optional, default: 180 */
  		type: 'image/png', /* string, optional, default: 'image/png' */
  		quality: 1, /* number, optional, default: 1 */
  	};
  	$('#test').thumbler(opts,function(data){
  		// returns null on error or object: url,width,height
  		$('body').append('<img src="'+data.url+'" width="'+data.width+'" height="'+data.height+'"/>')
  	});
<h3>Example</h3>
Included in 'thumblr.html' and 'thumblr_jquery.html'.
	
<h1>License</h1>

Copyright 2013 George I.

Licensed under the MIT License