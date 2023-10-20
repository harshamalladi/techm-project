const form = document.getElementById('subscriptionForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    postDataToAPI();
});



function postDataToAPI() {
    const type = sessionStorage.getItem('subscriptionType');
    const contactNumber = document.getElementById("contactNumber").value;
    const serverName = document.getElementById("serverName").value;
    const port = document.getElementById("port").value;
    const serverType = document.getElementById("serverType").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
        type,
        contactNumber,
        serverType,
        serverName,
        port,
        username,
        password,
    }


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
            alert(`Added Successfully`)
            console.log(responseData);
        })
        .catch((error) => {
            alert(`${error}`)
            console.error("There was a problem with the fetch operation:", error);
        });
}


