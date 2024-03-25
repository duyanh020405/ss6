function luuUser() {
  var user = [];
  var name1 = document.getElementById("name1").value.trim();
  var name2 = document.getElementById("name2").value.trim();
  var address = document.getElementById("address").value.trim();
  var sex = document.getElementById("sex").value.trim();
  var gmail = document.getElementById("gmail").value.trim();

  // Check if required fields are filled
  if (name1 === "" || name2 === "" || address === "" || sex === "" || gmail === "") {
      alert("Please fill in all fields.");
      return;
  }

  // Validate email address
  if (!isValidEmail(gmail)) {
      alert("Please enter a valid email address.");
      return;
  }

  var nameUser = name1 + " " + name2;
  user.push(nameUser, address, sex, gmail);

  // Store user data in localStorage
  try {
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      alert("Success!");
      window.location.href = "/ss06.project/utils/index.html";
  } catch (error) {
      console.error("Error storing user data:", error);
      alert("Failed to store user data.");
  }
}

// Function to validate email address
function isValidEmail(email) {
  // Simple regex for email validation
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}


