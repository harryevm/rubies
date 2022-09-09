function loadScreenControlsScene() {
	initGIF("screen-controls", "playbutton", ["play-button-white.png"], 92, 10, 6);
}
function showScreenControlsScene() {
	showScene("screen-controls")
	$("#playbutton").hover(
		function () {
			const fileSrc = "https://cdn.shopify.com/s/files/1/0255/9636/2837/files/play-button-pink.png"
			$(this).attr("src", fileSrc);
		}, function () {
			const fileSrc = "https://cdn.shopify.com/s/files/1/0255/9636/2837/files/play-button-white.png"
			$(this).attr("src", fileSrc);
		}
	);

	$("#playbutton").click(function (event) {
		event.stopPropagation();
		$("#playbutton").stop();
		setTimeout(function () {
		    showNextDancer();
			startFlowerDropScene();
		}, 10)

		setTimeout(function () {
			pulseUp();
		}, 100)

	});


	pulseUp();

	function pulseUp() {
		$("#playbutton").animate({
			height: "7%",
			left: "91.7%", 
            top: "9.7%"
		}, 1000, function () {
			puleseDown()
		});

	}
	function puleseDown() {
		$("#playbutton").animate({
			height: "6%",
			left: "92%",
			top: "10%"
		}, 1000, function () {
			pulseUp()
		});
    }

};


/* specific to dancers scene */

let dancer1;
function loadDancersScene() {
	let left = 80;
	let top = 5;
	let scale = 50;
	if (isMobile()) {
		left = 55;
	}

    dancer1 = initGIF("dancers", "dancer1", ["ruby1.gif", "samandruby1.gif", "ruby2.gif",
		"sam1.gif", "ruby3.gif", "sam3.gif",
		"samandruby2.gif", "sam2.gif", "ruby4.gif", "sam4.gif", "ruby5.gif"], left, top, scale);

}

function showNextDancer() {
	if (dancer1) {
		dancer1.curImageIndex++;
		if (dancer1.curImageIndex >= dancer1.gifFiles.length) {
			dancer1.curImageIndex = 0;
		}
		setGIFImageSrc("dancer1");
	}
}
function startDancersScene() {
	showScene("dancers")
};



/* specific to flower draw scene */
function loadFlowerDrawScene() {

	let isTouchDown = false;
	let shouldDraw = true;
	let curFlower;
	let flowerHeightInPixels = 150;
	let maxFlowerHeightInPixels = 300;
	let minFlowerHeightInPixels = 10;
	let growthDirection = +1;
	let touchDownInterval;
	let touchDownTimer;
	let lastTouchX = 0;
	let lastTouchY = 0;
	let curImageIndex = 0;
	let wasMoved = false;

	function touchDown(e) {
		isTouchDown = true;
		wasMoved = false;
		touchDownTimer = setTimeout(function () {
			touchDownInterval = setInterval(function () {
				flowerHeightInPixels = flowerHeightInPixels + growthDirection;
				if (flowerHeightInPixels > maxFlowerHeightInPixels) {
					growthDirection = -1;
				}
				if (flowerHeightInPixels < minFlowerHeightInPixels) {
					growthDirection = 1;
				}
				if (curFlower && lastTouchX == e.pageX && lastTouchY == e.pageY)
					curFlower.remove();
				mouseMovedForFlowerDrag(e.pageX, e.pageY);
			}, 5);
		}, 100)
	}

	function touchUp(e) {
		clearInterval(touchDownInterval);
		clearTimeout(touchDownTimer);
		isTouchDown = false;
		if (curFlower)
		{
			if (lastTouchX != e.pageX || lastTouchY != e.pageY)
			{
				mouseMovedForFlowerDrag(e.pageX, e.pageY);
			}
			else if (!wasMoved)
			{
				curImageIndex++;
				if (curImageIndex >= curFlower.gifFiles.length)
				{
					curImageIndex = 0;
				}
				curFlower.curImageIndex = curImageIndex;
				setGIFImageSrc(curFlower.attr("id"));
			}

		}
		lastTouchX = e.pageX;
		lastTouchY = e.pageY;
	}

	function touchMove(e) {
		if (isTouchDown) {
			clearInterval(touchDownInterval);
			clearTimeout(touchDownTimer);
			if (shouldDraw) {
				wasMoved = true;
				mouseMovedForFlowerDrag(e.pageX, e.pageY);
				printOnScreen(e.pageX + "," + e.pageY);

				// put delay so that drawing isn't every pixel.

				shouldDraw = false;
				setTimeout(function () {
					shouldDraw = true;
				}, 40)
			}

		}
	}


	$(".slide__item-image-contain")
		.on('touchstart mousedown', function (e) {
			e.preventDefault();
			touchDown(e);
		})
		.on('touchmove mousemove', function (e) {
			e.preventDefault();
			touchMove(e);
		})
		.on('touchend mouseup', function (e) {
			e.preventDefault();
			touchUp(e);
		})


	var lastZindex = 0;

	function mouseMovedForFlowerDrag(touchX, touchY) {
		lastTouchX = touchX;
		lastTouchY = touchY;
		const x = touchX - $('.slide__item-image-contain').offset().left;
		const y = touchY - $('.slide__item-image-contain').offset().top;
		const windowWidth = $(".slide__item-image-contain").outerWidth();
		const windowHeight = $(".slide__item-image-contain").outerHeight();
		var id = "flowerdraw-" + Math.floor(Math.random() * 100000000);
		let lastImageIndex = 0;
		if (curFlower) {
			lastImageIndex = curFlower.curImageIndex;
        }
		curFlower = initGIF("flowerdraw", id, ["peony.png", "dalia.png", "gerbera.png", "rose.png", "sunflower.png"], x / windowWidth * 100 - flowerHeightInPixels / 2 / windowWidth * 100, y / windowHeight * 100 - flowerHeightInPixels / 2 / windowHeight * 100, 25);
		curFlower.curImageIndex = lastImageIndex; 
		setGIFImageSrc(id);
		curFlower.height(flowerHeightInPixels);
		curFlower.width(flowerHeightInPixels);
		curFlower.css("z-index", lastZindex);
		curFlower.show();
		lastZindex++;
	}


}

function startFlowerDrawScene() {
	showScene("flowerdraw")
}








/* specific to flower drop scene */



function loadFlowerDropScene() {
	const numFlowerPerRow = 18;
	const numRows = 10
	for (j = 0; j < numRows; j++) {
		for (i = 0; i < numFlowerPerRow; i++) {
			const top = (-j / numRows) * 300 - 200;
			initGIF("flowerdrop", "flower" + i + j, [], i / numFlowerPerRow * 120 - 10 * (j % 2), top, 15 + Math.floor((Math.random() * 10)));
			//initGIF("flowerdrop", "flower" + i + j, ["peony.png", "dalia.png", "gerbera.png", "rose.png", "sunflower.png"], i / numFlowerPerRow * 120 - 10, (j * 20) - 10, 20);
		}
	}
	setFlowerImages()

}


function startFlowerDropScene() {
	showScene("flowerdrop")
	moveFlowers();
}


function moveFlowers() {
	for (curGIFID in allGIFs["flowerdrop"]) {
		moveGIF(curGIFID, -10 + Math.floor(Math.random() * 20), 600, 1500 + Math.floor(Math.random() * 1500)) 
	}
}



/* element init and animation */

const allGIFs = {};
var curActiveScene = "";

function initGIF(scene, id, gifFiles, left, top, scale) {
	if (allGIFs[scene] === undefined) {
	    allGIFs[scene] = {};
	}
	let containerClass = ".slide__item-image-contain.desktop";

	if (isMobile())
	{
		containerClass = ".slide__item-image-contain.mobile";
	}

	var html = "<img id='" + id + "' style='display:none;height:50%;left:65%;top:5%;cursor:pointer;width:auto;position:absolute;z-index:5'/>";
	$(containerClass).prepend(html);
	var newGIF = $("#" + id);
	allGIFs[scene][id] = newGIF;
	allGIFs[id] = newGIF;
	newGIF.gifFiles = gifFiles;
	newGIF.curImageIndex = 0;
	newGIF.isRotating = false;
	newGIF.rotationAngle = 0;
	newGIF.rotationSpeed = 0;
	newGIF.originalTop = top;
	newGIF.originalLeft = left;
	newGIF.originalScale = scale;
	newGIF.attr('draggable', false);
	setGIFPositionAndScale(id, left, top, scale);
	setGIFImageSrc(id)
	return newGIF;
}

function setFlowerImages(scene, random) {
	const flowerFiles = ["peony.png", "dalia.png", "gerbera.png", "rose.png", "sunflower.png"];
	for (curGIFID in allGIFs["flowerdrop"]) {
		curGIF = allGIFs["flowerdrop"][curGIFID];
		const randomFile = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
		curGIF.gifFiles = [randomFile];
		const fileSrc = "https://cdn.shopify.com/s/files/1/0255/9636/2837/files/" + randomFile + "?v=158222426924"
		curGIF.attr("src", fileSrc);
	}
}

function showScene(scene) {
	curActiveScene = scene;
	for (curGIFID in allGIFs[scene]) {
		curGIF = allGIFs[scene][curGIFID];
		curGIF.show();
	}
	resetGIFsInScene(scene)
}


function resetGIFPositionAndScale(id) {
	var curGIF = allGIFs[id];
	setGIFPositionAndScale(id, curGIF.originalLeft, curGIF.originalTop, curGIF.originalScale);
}

function resetGIFsInScene(scene) {
	for (curGIFID in allGIFs[scene]) {
		allGIFs[scene][curGIFID].stop();
		resetGIFPositionAndScale(curGIFID);
	}
}

function setGIFPositionAndScale(id, left, top, scale) {
	var curGIF = allGIFs[id];
	if (left === undefined) {
		left = 50;
	}
	if (top === undefined) {
		top = 50;
	}
	curGIF.css({ 'left': left + "%" });
	curGIF.css({ 'top': top + "%" });
	//curGIF.css({ '-webkit-transform': "translate(-" + left + "%, -" + top + "%)" });
	if (scale) {
		curGIF.css({ 'height': scale + "%" });
	}
}



function setGIFImageSrc(id) {
	const curGIF = allGIFs[id];
	let fileName;
	if (curGIF.gifFiles === undefined || curGIF.gifFiles.length == 0) {
		fileName = "bear.gif";
	}
	else {
		fileName = curGIF.gifFiles[curGIF.curImageIndex];
	}
	const fileSrc = "https://cdn.shopify.com/s/files/1/0255/9636/2837/files/" + fileName + "?v=158222426924"
	curGIF.attr("src", fileSrc);
}



function moveGIF(id, leftDistance, downDistance, speed) {
	const curGIF = allGIFs[id];
	curGIF.animate({
		top: "+=" + downDistance + "%",
		left: "+=" + leftDistance + "%"
	}, speed, function () {
		// Animation complete.
	});

}

function rotateGIF(id, speed) {
	const curGIF = allGIFs[id];

	if (speed == 0) {setIMag
		curGIF.isRotating = false;
		curGIF.rotationSoeed = speed;
		if (curGIF.rotationTimer) {
			clearInterval(curGIF.rotationTimer)
		}
	}
	else {
		curGIF.isRotating = true;
	}

	var angle = 0;
	curGIF.rotationTimer = setInterval(function () {


		curGIF.css('-webkit-transform', 'rotate(' + curGIF.rotationAngle + 'deg)')
			.css('-moz-transform', 'rotate(' + curGIF.rotationAngle + 'deg)')
			.css('-ms-transform', 'rotate(' + curGIF.rotationAngle + 'deg)');
		if (speed > 0) {
			curGIF.rotationAngle -= 5;
		}
		else {
			curGIF.rotationAngle += 5;
		}
	}, speed / 12);
}



/* interactive menu */


/* home page text */

function setHomePageText() {
	// const homepageText1 = "<div  id=homepage-text1>Form-fitting clothing for trans girls.</div>"
	// const homepageText2 = "<div id=homepage-text2>We want every active trans girl to be as confident and comfortable in her clothes as her friends.</div>"
	// $(".jdgm-carousel-title").text("What our customers are saying");
	// $(".slide__item-image-contain").prepend(homepageText1);
	// $(".slide__item-image-contain").prepend(homepageText2);
}


/* home page load */




function loadHandlers() {
	$(window).resize(function () {
		if (isMobile()) {
			$("#banner").attr("src", "banner-mobile.png")
		}
		else {
			$("#banner").attr("src", "banner-desktop.png")
		}
	});

}



function loadHomePageFun() {
	setHomePageText();
	loadScreenControlsScene()
	showScreenControlsScene()
	loadFlowerDropScene();
	loadDancersScene();
	//loadFlowerDrawScene()
	//startFlowerDrawScene();
	startDancersScene();

	//setTimeout(function () {
	//	startFlowerDropScene();
	//}, 1500);
}



 



/* general utility functions */


function printOnScreen(content)
{
	$("#homepage-text1").text(content);
}

function isMobile() {
	var windowWidth = $(window).width();
	var mode;
	if (windowWidth > 700) {
		mode = "desktop";
	}
	else {
		mode = "mobile";
	}
	return (mode == "mobile");
}



