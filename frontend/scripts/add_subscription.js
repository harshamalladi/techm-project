const form = document.getElementById('subscriptionForm');


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

    }
  });

  
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  postDataToAPI();
});

function postDataToAPI() {
  const type = sessionStorage.getItem('subscriptionType');
 
  const subscriptionId = document.getElementById("subscriptionId").value;
  const subscriptionType = document.getElementById("type").value;
  
  const deviceListItems = document.querySelectorAll("#deviceList li");
  const devices = Array.from(deviceListItems).map((item) => item.textContent.substring(0, item.textContent.length - 1));
  const data = {
      type,
      subscriptionId,
      subscriptionType,
      devices:devices
  }
  console.log(data);

  const apiUrl = "https://techm-project.vercel.app/subscriptions/add-subscription";

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
      alert('Added successfully')
      console.log(responseData);
    })
    .catch((error) => {
      alert(`${error}`)
      console.error("There was a problem with the fetch operation:", error);
    });
}



