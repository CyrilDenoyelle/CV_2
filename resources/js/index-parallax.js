// VIDEO JS
var vid = $('.droneVideo'),
scrollRatio = 0,
vidXPositionScreenRatio;
$(window).scroll(function(){
	vidXPositionScreenRatio = vid.position().top*0.8;// (ratio entre la position de la video sur la page et la largeur de l'ecran, pour permettre le responsive)
	scrollRatio = ($(window).scrollTop()-vidXPositionScreenRatio)/75;// rapport position de la video sur l'ecran / currentTime de la video
});
setInterval(function(){
	//division par 20 de la difference entre le currentTime de la video et le scrollRatio
	vid[0].currentTime-=(vid[0].currentTime-scrollRatio)/10;//valeur negative pour permettre la lecture a l'enver de la video quand on scroll vers le haut
}, 100);

// VIDEO JS END
var s = skrollr.init();