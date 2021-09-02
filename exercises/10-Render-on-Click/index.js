let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let div = document.createElement("div");
	let body = document.querySelector("body");
	div.style.background = "yellow";
	div.innerHTML = "Hello World";
	document.body.appendChild(div);

});
