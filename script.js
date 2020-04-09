document.getElementById("submit-btn").addEventListener("click", function(){
 var textArea= document.getElementById("textarea1").value
 var email= document.getElementById("email").value
 window.location.href="mailto:tabby.garcia1@gmail.com?subject=Info&body="+ textArea
})

