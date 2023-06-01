function getFormvalue() {
    //Write your code here
	let fName = input[0].value;
	let lName = input[1].value;
	alert(fName+" "+lName);
}
let input = document.getElementsByTagName("input");
let submit = input[2];
submit.addEventListener("click",getFormvalue);