document.getElementById("contactForm").addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
  
    if (email !== confirmEmail) {
      alert("Email addresses do not match. Please try again.");
      event.preventDefault(); 
    }
  });
  