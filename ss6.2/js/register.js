function register(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email already exists in the users array
  var existingUser = users.find(user => user.email === email);
  if(existingUser !== undefined) {
      alert("Tài khoản đã tồn tại, vui lòng nhập tài khoản khác!");
      return;
  } else {
      if(password2 !== password){
          alert("Mật khẩu đăng nhập lại không đúng, vui lòng kiểm tra lại");
          return;
      }
      
      // Create a new user object
      var newUser = {
          username: username,
          email: email,
          password: password
      };

      // Add the new user to the users array
      users.push(newUser);

      // Store the updated users array in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Đã đăng kí thành công");
      window.location.href = "login.html";
  }
}

document.getElementById("regForm").addEventListener("submit", register);




