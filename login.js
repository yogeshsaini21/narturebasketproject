
var form =document.querySelector("form");
var userdata=JSON.parse(localStorage.getItem("userdata"));

form.addEventListener("submit",function(event){
    event.preventDefault();
    var data={
    email:form.email.value,
    password:form.password.value
    };

  if(userdata === null){
      alert("Please create an account");
  }else if(userdata.email==data.email && userdata.password==data.password){
      alert("Sign in Successfull");
      localStorage.setItem("signin",JSON.stringify("userdata"));
      window.location.href="home.html"

  }else{
      alert("User Doesn't exist")
  }


})

