document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const subscriptionDevices = document.getElementById("subscriptionDevices");
  const deviceList = document.getElementById("deviceList");

  addButton.addEventListener("click", function () {
    const deviceValue = subscriptionDevices.value;
    if (deviceValue) {
      const listItem = document.createElement("li");
      listItem.textContent = deviceValue;
      const closeIcon = document.createElement("span");
      closeIcon.innerHTML = "X";
      closeIcon.style.color = "red";
      closeIcon.style.cursor = "pointer";
      closeIcon.style.marginLeft = "10px";
      closeIcon.addEventListener("click", function () {
        listItem.remove();
      });
      listItem.appendChild(closeIcon);
      deviceList.appendChild(listItem);
      subscriptionDevices.value = "";
    }
  });

  const form = document.getElementById("subscriptionForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    postDataToAPI();
  });
});

function postDataToAPI() {
    const subscriptionId = document.getElementById("subscriptionId").value;
    const subscriptionType = document.getElementById("subscriptionType").value;
    const deviceListItems = document.querySelectorAll("#deviceList li");
    const devices = Array.from(deviceListItems).map((item) => item.textContent);
    window.addEventListener("DOMContentLoaded", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const contactNumber = urlParams.get("contactNumber");
        const serverType = urlParams.get("serverType");
        const serverName = urlParams.get("serverName");
        const port = urlParams.get("port");
        const username = urlParams.get("username");
        const password = urlParams.get("password");

        // Set retrieved values to form fields
        document.getElementById("contactNumber").value = contactNumber;
        document.getElementById("serverType").value = serverType;
        document.getElementById("serverName").value = serverName;
        document.getElementById("port").value = port;
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
    });

    const data = {
        type: subscriptionType,
        contactNumber,
        serverType,
        serverName,
        port,
        username,
        password,
        subscriptionId,
        devices,
    };

    const apiUrl = "http://localhost:5000/subscriptions";
  
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  


