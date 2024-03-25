// JavaScript to display user information from local storage

        // Retrieve user data from local storage
        var users = JSON.parse(localStorage.getItem("users")) || [];

        // Reference to the element where user information will be displayed
        var userInfoContainer = document.getElementById("user-info");

        // Function to display user information
        function displayUserInfo() {
            // Clear previous content
            userInfoContainer.innerHTML = "";

            // Loop through each user and display their information if all fields are present
            users.forEach(function(user, index) {
                if (user.nameUser && user.address && user.sex && user.email) {
                    var userDiv = document.createElement("div");
                    userDiv.classList.add("user");

                    var userInfoHTML = `
                        <p><strong>Name:</strong> ${user.nameUser}</p>
                        <p><strong>Address:</strong> ${user.address}</p>
                        <p><strong>Sex:</strong> ${user.sex}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                    `;

                    userDiv.innerHTML = userInfoHTML;
                    userInfoContainer.appendChild(userDiv);
                }
            });
        }

        // Call the function to display user information when the page loads
        displayUserInfo();