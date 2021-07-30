$(document).ready(function(){
	$('.col-4').hover(
		function(){
			$(this).animate({
				marginTop:"-=1%",

			},200)
		},
		function(){
			$(this).animate({
				marginTop:"+=1%",

			},200)
		}
	);

});
function validate(val) {
	v1 = document.getElementById("firstName");
	v2 = document.getElementById("lastName");
	v3 = document.getElementById("email");
	v4 = document.getElementById("birthDate");
	v5 = document.getElementById("phoneNumber");
	v6 = document.getElementById("MembershipType");
	v7 = document.getElementById("height");
	v8 = document.getElementById("weight");

	
	flag1 = true;
	flag2 = true;
	flag3 = true;
	flag4 = true;
	flag5 = true;
	flag6 = true;
	flag7 = true;
	flag8 = true;
	
	if(val>=1 || val==0) {
	if(v1.value == "") {
	v1.style.borderColor = "red";
	flag1 = false;
	}
	else {
	v1.style.borderColor = "green";
	flag1 = true;
	}
	}
	
	if(val>=2 || val==0) {
	if(v2.value == "") {
	v2.style.borderColor = "red";
	flag2 = false;
	}
	else {
	v2.style.borderColor = "green";
	flag2 = true;
	}
	}
	if(val>=3 || val==0) {
	if(v3.value == "") {
	v3.style.borderColor = "red";
	flag3 = false;
	}
	else {
	v3.style.borderColor = "green";
	flag3 = true;
	}
	}
	if(val>=4 || val==0) {
	if(v4.value == "") {
	v4.style.borderColor = "red";
	flag4 = false;
	}
	else {
	v4.style.borderColor = "green";
	flag4 = true;
	}
	}
	if(val>=5 || val==0) {
	if(v5.value == "") {
	v5.style.borderColor = "red";
	flag5 = false;
	}
	else {
	v5.style.borderColor = "green";
	flag5 = true;
	}
	}
	if(val>=6 || val==0) {
	if(v6.value == "") {
	v6.style.borderColor = "red";
	flag6 = false;
	}
	else {
	v6.style.borderColor = "green";
	flag6 = true;
	}
	}
	if(val>=7 || val==0) {
	if(v7.value == "") {
	v7.style.borderColor = "red";
	flag7 = false;
	}
	else {
	v7.style.borderColor = "green";
	flag7 = true;
	}
	}
	if(val>=8 || val==0) {
		if(v8.value == "") {
		v8.style.borderColor = "red";
		flag8 = false;
		}
		else {
		v8.style.borderColor = "green";
		flag8 = true;
		}
		}
	
	flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6&& flag7;
	
	return flag;
}

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhFikQZueIh05wbJpev7VYPCWzyGo6IZU",
    authDomain: "rafitness-be047.firebaseapp.com",
    projectId: "rafitness-be047",
    storageBucket: "rafitness-be047.appspot.com",
    messagingSenderId: "1080491362425",
    appId: "1:1080491362425:web:51aafd2f50bd4a261a6ca8",
    measurementId: "G-TDYR9125GG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  function writeData(){
    var database=firebase.database();
    var ref=database.ref('registrations');
    var data={
       // firebase.database().ref("registrations").set({
        name:document.getElementById("firstName").value,
	    lastName: document.getElementById("lastName").value,
	    email: document.getElementById("email").value,
        birthDate: document.getElementById("birthDate").value,
	    phoneNumber: document.getElementById("phoneNumber").value,
	    MembershipType: document.getElementById("MembershipType").value,
        height: document.getElementById("height").value,
	    weight: document.getElementById("weight").value,
       }
   // })

        ref.push(data);
        setTimeout((e)=>{
			window.location.href="Home.html";

		},2000)

  }