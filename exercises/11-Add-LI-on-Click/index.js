let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
    //document.getElementById(#superDuperButton);
	//let div = document.createElement("li");
	let body = document.querySelector("#myList");
	body.innerHTML = "<li>Fourth element</li>";
	//document.body.appendChild(li);
	document.body.insertBefore(li, null);
});
