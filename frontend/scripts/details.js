document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveButton");
    const contactNumberInput = document.getElementById("contactNumber");
    const serverNameInput = document.getElementById("serverName");
    const portInput = document.getElementById("port");
    const serverTypeSelect = document.getElementById("serverType");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const contactNumberError = document.getElementById("contactNumberError");
    const serverNameError = document.getElementById("serverNameError");
    const portError = document.getElementById("portError");
    const serverTypeError = document.getElementById("serverTypeError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    window.addEventListener("DOMContentLoaded", (event) => {
        const urlParams = new URLSearchParams(window.location.search);
        const contactNumber = urlParams.get("contactNumber");
        const serverType = urlParams.get("serverType");
        const serverName = urlParams.get("serverName");
        const port = urlParams.get("port");
        const username = urlParams.get("username");
        const password = urlParams.get("password");

        // Now you can use these variables in your JavaScript logic
        console.log("Contact Number: " + contactNumber);
        console.log("Server Type: " + serverType);
        // ... and so on
    });

    saveButton.addEventListener("click", function (e) {
        e.preventDefault();

        const contactNumber = contactNumberInput.value;
        const serverName = serverNameInput.value;
        const port = portInput.value;
        const serverType = serverTypeSelect.value;
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Reset error messages and styles
        contactNumberInput.classList.remove("error");
        serverNameInput.classList.remove("error");
        portInput.classList.remove("error");
        serverTypeSelect.classList.remove("error");
        usernameInput.classList.remove("error");
        passwordInput.classList.remove("error");

        contactNumberError.textContent = "";
        serverNameError.textContent = "";
        portError.textContent = "";
        serverTypeError.textContent = "";
        usernameError.textContent = "";
        passwordError.textContent = "";

        let hasError = false;

        if (contactNumber.trim() === "") {
            contactNumberError.textContent = "Field required";
            contactNumberInput.classList.add("error");
            contactNumberError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            contactNumberError.style.display = "none"; // Hide the error text if no error
        }

        if (serverType === "Server Type") {
            serverTypeError.textContent = "Field required";
            serverTypeSelect.classList.add("error");
            serverTypeError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            serverTypeError.style.display = "none"; // Hide the error text if no error
        }

        if (serverName.trim() === "") {
            serverNameError.textContent = "Field required";
            serverNameInput.classList.add("error");
            serverNameError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            serverNameError.style.display = "none"; // Hide the error text if no error
        }

        if (port.trim() === "") {
            portError.textContent = "Field required";
            portInput.classList.add("error");
            portError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            portError.style.display = "none"; // Hide the error text if no error
        }

        if (username.trim() === "") {
            usernameError.textContent = "Field required";
            usernameInput.classList.add("error");
            usernameError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            usernameError.style.display = "none"; // Hide the error text if no error
        }

        if (password.trim() === "") {
            passwordError.textContent = "Field required";
            passwordInput.classList.add("error");
            passwordError.style.display = "block"; // Display the error text
            hasError = true;
        } else {
            passwordError.style.display = "none"; // Hide the error text if no error
        }

        if (!hasError) {
         
            window.location.href = 'add_subscription.html';
        }
    });
});
