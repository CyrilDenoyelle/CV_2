var s = skrollr.init()



var vid = $('.droneVideo');
var scrollRatio = 0;
var vidXPositionScreenRatio = vid.position().top-1000;
// console.log(vid)
$(window).scroll(function(){
	// console.log($(window).scrollTop())
	var vidXPositionScreenRatio = vid.position().top*0.8;
	scrollRatio = ($(window).scrollTop()-(vidXPositionScreenRatio+$(window).width()/10))/75;
});
// console.log(3270-335+75)
setInterval(function(){
	// if(vid[0].currentTime < scrollRatio-0.25){
	console.log()
	vid[0].currentTime-=(vid[0].currentTime-scrollRatio)/20;

	// }else if(vid[0].currentTime > scrollRatio){
	// }else if(vid[0].currentTime > scrollRatio){
	// 	vid[0].currentTime-=0.05;
	// }else{
	// 	vid[0].pause();
	// }
}, 100);