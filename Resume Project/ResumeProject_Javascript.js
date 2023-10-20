//PERCENTAGE PAGE VIEWED
var percentageViewed = document.getElementById('page-viewed')

var body = document.getElementById('body')
var coordinates = body.getBoundingClientRect();
// html = document.documentElement;
// var totalHeight =  Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
var totalHeight = coordinates.height - 170;
var op = '*'

window.addEventListener('scroll',function(){
	// console.log(pageYOffset,totalHeight)
	var y = window.pageYOffset / totalHeight;
	var x = Math.ceil(eval(y + " " + op + " " + 100))
	// console.log(x)
	percentageViewed.innerText = x+' %';
})




//VERTICAL SCROLL
var navAnchorTags = document.querySelectorAll('.horizontal-list a')
for(var i=0;i<navAnchorTags.length;i++)
{
	navAnchorTags[i].addEventListener('click',function(event){
	
		var coordinates = document.getElementById(this.getAttribute('data-value')).getBoundingClientRect();
		// var coordinates = document.getElementById(this.textContent.trim().toLowerCase()).getBoundingClientRect();
		event.preventDefault();
		
		var currentPosition = 0;
		var targetPosition = coordinates.top;
		
		var scrollInterval = setInterval(function(){
			if(currentPosition>=targetPosition){
				clearInterval(scrollInterval);
				return;
			}
			currentPosition += 50
			window.scrollBy(0,40);
		},30)

	})
}




//SKILL-BARS ANIMATION
var skillPosition = document.getElementById('skills').getBoundingClientRect();
var top1 = skillPosition.top;
var skillBarTags = document.querySelectorAll('.skill-progress-bar') 
var animationDone = 0;


function initializeBars(){
	for(var bar of skillBarTags){
		bar.style.width = 0+'%';
	}
}
initializeBars()

function fillBars(){

	for(let bar of skillBarTags){
		let barWidth = bar.getAttribute('bar-percentage')
		let currentWidth = 0;
		let interval = setInterval(function(){
			if(currentWidth>=barWidth){
				clearInterval(interval);
				return
			}
			currentWidth+=1;
			bar.style.width = currentWidth+'%';
		},10)
	}
}

document.addEventListener('scroll',function(){
	if(!animationDone && window.pageYOffset >= top1){
	   	// console.log(top1)
		fillBars()

		animationDone = 1;

		return
	}
	else if(window.pageYOffset < top1){
		animationDone = 0;
		// initializeBars()
	}
})