function showUser() {
    var userString = localStorage.getItem("user");
    var userInfoContainer = document.getElementById("userInfoContainer");

    if (userString) {
        var user = JSON.parse(userString);
        var userInfoHTML = `
            <h2>User Information:</h2>
            <p><strong>Name:</strong> ${user[0]}</p>
            <p><strong>Address:</strong> ${user[1]}</p>
            <p><strong>Sex:</strong> ${user[2]}</p>
            <p><strong>Email:</strong> ${user[3]}</p>
        `;
        userInfoContainer.innerHTML = userInfoHTML;
    } else {
        userInfoContainer.innerHTML = "<p>User information not found!</p>";
    }
}

