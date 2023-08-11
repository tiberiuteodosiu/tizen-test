	document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('launchApp1').addEventListener('click', function() {
	    const body = document.body;
	    const appContent = document.getElementById('appContent').cloneNode(true);
	    while (body.firstChild) {
	        body.removeChild(body.firstChild);
	    }
	    body.appendChild(appContent);
		document.getElementById('appContent').innerHTML = '<iframe id="livresq" src="https://author.livresq.com" width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" style="border: none; position: absolute; top: 0; left: 0;"></iframe>';
	});
	
	document.getElementById('launchApp2').addEventListener('click', function() {
	    document.getElementById('appContent').innerHTML = '<iframe src="application2/index.html" width="100%" height="100%"></iframe>';
	});
});
	
