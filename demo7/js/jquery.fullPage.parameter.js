
$(function(){
	$("#full").fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
		menu:'#menu',
		afterLoad:function(anchorLink,index){
			var loadedSection = $(this);
			if(index==1){
				$('#nav-1').addClass('nav-active');
				$('#nav-2').removeClass('nav-active');
				$('#nav-3').removeClass('nav-active');
				$('#nav-4').removeClass('nav-active');
				$('#nav-5').removeClass('nav-active');
				$('#nav-6').removeClass('nav-active');
			}
			else if (index==2) {
				$('#nav-2').addClass('nav-active')
				$('#nav-1').removeClass('nav-active');
				$('#nav-3').removeClass('nav-active');
				$('#nav-4').removeClass('nav-active');
				$('#nav-5').removeClass('nav-active');
				$('#nav-6').removeClass('nav-active');
			}
			else if (index==3) {
				$('#nav-3').addClass('nav-active')
				$('#nav-2').removeClass('nav-active');
				$('#nav-1').removeClass('nav-active');
				$('#nav-4').removeClass('nav-active');
				$('#nav-5').removeClass('nav-active');
				$('#nav-6').removeClass('nav-active');
			}
			else if (index==4) {
				$('#nav-4').addClass('nav-active')
				$('#nav-2').removeClass('nav-active');
				$('#nav-3').removeClass('nav-active');
				$('#nav-1').removeClass('nav-active');
				$('#nav-5').removeClass('nav-active');
				$('#nav-6').removeClass('nav-active');
			}
			else if (index==5) {
				$('#nav-5').addClass('nav-active')
				$('#nav-2').removeClass('nav-active');
				$('#nav-3').removeClass('nav-active');
				$('#nav-4').removeClass('nav-active');
				$('#nav-1').removeClass('nav-active');
				$('#nav-6').removeClass('nav-active');
			}
			else{
				$('#nav-6').addClass('nav-active')
				$('#nav-2').removeClass('nav-active');
				$('#nav-3').removeClass('nav-active');
				$('#nav-4').removeClass('nav-active');
				$('#nav-5').removeClass('nav-active');
				$('#nav-1').removeClass('nav-active');
			}
		}
	});
});
