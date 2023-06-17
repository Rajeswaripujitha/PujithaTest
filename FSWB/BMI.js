var weight,height,measure,bmi,error;
function calculate(){
    weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
    height *= height;
    error="Please enter some values"
	bmi = weight/height;
    measure=bmi;
    if (weight === 0 ) {
		document.getElementById("result").innerHTML = error;
	} else if (height === 0){
		document.getElementById("result").innerHTML = error;
	}
	 else {

		document.getElementById("result").innerHTML = "Your Result is :" +measure;
	}
	if (weight < 0) {
		document.getElementById("result").innerHTML = "Your result is: Negative Values not Allowed";
	}
}