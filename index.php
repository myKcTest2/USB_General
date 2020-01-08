<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
	
<link href="css/default.css" rel="stylesheet" type="text/css">
</head>

<body>

	<div class="container">
		<header>
			<a href="" class="logo">USB 2020</a>

			<nav>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/menu.svg" alt="menu">		
			</nav>
		</header>
	
		<h1 class="">Конференция USB 2020</h1>
		<h2 class="toph2">Юный. Сильный. Божий.</h2>
		
		<div class="line"></div>
		
		
	</div>
	<div class="container secondary">
		<h2>Strat</h2>
		<p class="subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae adipisci eaque molestiae unde, minima ex sapiente deleniti, recusandae dignissimos natus facilis labore, ut provident amet similique nihil inventore accusantium odio.</p>
		<p class="subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae adipisci eaque molestiae unde, minima ex sapiente deleniti, recusandae dignissimos natus facilis labore, ut provident amet similique nihil inventore accusantium odio.</p>
	</div>
	
	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/mountains.png"	 alt="layer1" class="layer1">
	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/forest.png" alt="layer2" class="layer2">
	
	
	<script src="node_modules/lax.js/lib/lax.min.js" ></script>
	<script>
	
	window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
	
	</script>
</body>
</html>
