<?php require_once('ColorPalette.php'); ?>
<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Colors</title>
		<meta name="description" content="Decorative &amp; interactive isometric &amp; 3D grids." />
		<meta name="keywords" content="isometric, grid, images, masonry, perspective" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="favicon.png">
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />
		<script src="js/modernizr.custom.js"></script>
	</head>
	<body class="demo-1">
		<main>
			<header class="codrops-header">
				<img src="img/allthings.developers-logo-white.svg" class="logo" alt="Logo Allthings" height="30px" />
				<h1>Colors</h1>
				<p>ColorName gets copied to clipboard as soon as you click!<p>
				<?php /* <!-- <nav class="codrops-demos">
					<a class="current-demo" href="index.html">Scrollable grid</a>
					<a href="index2.html">Static grid</a>
				</nav> -->
				<!-- <button class="button-menu">
					<svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63"><rect width="67.75" height="8.38"/><rect x="4.15" y="17.63" width="59.45" height="8.38" /><rect y="35.25" width="67.75" height="8.38"/></svg>
				</button> -->
				*/?>
			</header>
			<div class="isolayer isolayer--scroll1 isolayer--shadow">
				<ul class="grid grid--effect-flip">
				<?php foreach($palette as $k=>$v){ ?>
					<li class="grid__item">
						<a class="grid__link" data-color="<?php echo $v;?>" data-name="<?php echo $k;?>" data-clipboard-text="<?php echo $k;?>">
							<img class="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img class="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<div class="grid__img layer grid__color" style="background-color:<?php echo $v;?>"><?php echo $k; ?><br /><small><?php echo $v; ?><</small></div>
							<span class="grid__title"><?php echo $k; ?></span>
						</a>
					</li>
				<?php } ?>
				</ul>
			</div>
		</main>
		<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/masonry.pkgd.min.js"></script>
		<script src="js/dynamics.min.js"></script>
		<script src="js/classie.js"></script>
		<script src="js/animOnScroll.js"></script>
		<script src="js/main.js"></script>
		<script src="js/clipboard.js"></script>
		<script>
		(function() {
			var clipboard = new Clipboard('.grid__link');
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			[].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
				new IsoGrid(el, {
					type : 'scrollable',
					transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
					stackItemsAnimation : {
						properties : function(pos) {
							return {
								translateZ: (pos+1) * 50,
								rotateZ: getRandomInt(-3, 3)
							};
						},
						options : function(pos, itemstotal) {
							return {
								type: dynamics.bezier,
								duration: 500,
								points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
								//delay: (itemstotal-pos-1)*40
							};
						}
					},
					onGridLoaded : function() {
						classie.add(document.body, 'grid-loaded');
						document.querySelectorAll('.grid__link').forEach(function(el){
							el.onclick = function(){
								document.querySelector("body").style.background = el.dataset.color;
								document.querySelector("h1").innerHTML = el.dataset.color;
								document.querySelector(".codrops-header p").innerHTML = el.dataset.name;
							}
						});
					}
				});
			});
		})();
		</script>
	</body>
</html>
