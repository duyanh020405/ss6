  
    function saveInfor() {
      var users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users data from localStorage
      var name1 = document.getElementById("name1").value.trim();
      var name2 = document.getElementById("name2").value.trim();
      var address = document.getElementById("address").value.trim();
      var sex = document.getElementById("sex").value.trim();
      var email = document.getElementById("email").value.trim(); // Assuming you have an input field with id "email"
    
      if (name1 === "" || name2 === "" || address === "" || sex === "" || email === "") {
          alert("Please fill in all fields.");
          return;
      }
    
      if (!isValidEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }
    
      var nameUser = name1 + " " + name2;
      var user = {
        nameUser: nameUser,
        address: address,
        sex: sex,
        email: email
      };
    
      users.push(user); 
    
      try {
          localStorage.setItem("users", JSON.stringify(users));
          alert("Success!");
          window.location.href = "index2.html"; 
      } catch (error) {
          console.error("Error storing user data:", error);
          alert("Failed to store user data.");
      }
    }
    
    function isValidEmail(email) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
