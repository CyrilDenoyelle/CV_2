var s = skrollr.init()



var vid = $('.droneVideo');
var scrollRatio = 0;
// console.log(vid)
$(window).scroll(function(){
	console.log($(window).scrollTop())
	scrollRatio = ($(window).scrollTop()-250)/100;
});
setInterval(function(){
	// if(vid[0].currentTime < scrollRatio-0.25){

	vid[0].currentTime-=(vid[0].currentTime-scrollRatio-0.05)/20;
	// }else if(vid[0].currentTime > scrollRatio){
	// }else if(vid[0].currentTime > scrollRatio){
	// 	vid[0].currentTime-=0.05;
	// }else{
	// 	vid[0].pause();
	// }
}, 100);