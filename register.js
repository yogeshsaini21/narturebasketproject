var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

 var data={
  email:form.email.value,
  password:form.password.value

 };
   alert("Account created");
   window.location.href="home.html"
   localStorage.setItem("userdata",JSON.stringify(data));
  
})