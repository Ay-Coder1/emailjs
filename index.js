

function sendMail() {
	var params = {
	  password: document.getElementById("password").value,
	  email: document.getElementById("email").value,
	//   message: document.getElementById("message").value,
	};
	
	var serviceID = "service_vs2nsei";
	var templateID = "template_1yc8z8n";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("password").value = "";
		  document.getElementById("email").value = "";
		//   document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  
  }