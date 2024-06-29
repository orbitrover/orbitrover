
// Modal Window
$('.divopen').click(function(){
	$('.modal.' + $(this).data('divopen')).fadeIn(800);
	$('body').addClass('no-scroll');
});
$('.close').click(function(){
	$('.modal').fadeOut();
	$('body').removeClass('no-scroll')
	$("#video-player").attr("src", "");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
	$('.modal').fadeOut();
	$('body').removeClass('no-scroll')
	$("#video-player").attr("src", "");
  }
});

$(".play-video").click(function(){
	$("#video-player").attr("src", "http://www.youtube.com/embed/JjkiXUq3LQw?rel=0&autoplay=1&enablejsapi=1");
});

// Youtube Play on Click
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-player', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerReady(event){
	$('.play-video').on('click', function() {
		player.playVideo();
	});
	$('.close, .modal').on('click', function() {
		$('.modal').fadeOut(400);
		player.stopVideo();
	});
	$('.play-video').click(function(event){
		event.stopPropagation();
	});
}     
function onPlayerStateChange(event) {
	if ( event.data == 0 ) {    
		$('.modal').hide;
	}
}

// diagram animation
animationStarted = false;
$('#animate-2').waypoint(function(direction){
	if(animationStarted == false){
		$('ul.diagram').animate({opacity:1}, 300, 'swing', function(){
			animateNext();
		});
		animationStarted = true;
	}
});


currentPersonCount = 0;

function animateNext(){
	currentPersonCount ++;
	$('li.person' + currentPersonCount).addClass('active');
	if(currentPersonCount < 7){
		setTimeout( function(){ animateNext(); }, 300)
	}
}

