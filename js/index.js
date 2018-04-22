var height = window.innerHeight;
var body = document.querySelector('.overlay');

if(body != null){
	body.setAttribute("style","height:" +height+ "px");
}

console.log(height);