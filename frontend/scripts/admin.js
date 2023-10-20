
document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch("https://techm-project.vercel.app/subscriptions/admin")
        .then(response => response.json())
        .then(data => {
          
            var intersightContainer = document.getElementById("intersight");
            var traditionalContainer = document.getElementById("traditional");

           
            data.data.forEach(function (item) {
                if (item.type === "Intersight") {
                    // Create a new element to display Intersight data
    var intersightItem = document.createElement("div");
    
    // Set styles for the intersightItem
  
    intersightItem.style.fontSize = "20px";
    intersightItem.style.display = "flex"; /* Use flex layout for alignment */
    intersightItem.style.justifyContent = "space-between"; /* Align items with space in between */
    
    // Set the inner HTML with the content, making all headings bold
    intersightItem.innerHTML =
        "<span><strong style='font-size: 24px;'>Subscription ID:</strong> " +  "<br>" + item.subscriptionId + "</span>" +
        "<span><strong style='font-size: 24px;'>Type:</strong> "+  "<br>"  + item.subscriptionType + "</span>" +
        "<span><strong style='font-size: 24px;'>Devices:</strong> "+  "<br>" + item.devices.join('   ,    ') + "</span>";
    
    intersightContainer.appendChild(intersightItem);
                
                
                } else if (item.type === "Traditional") {
                    // Create a new element to display Traditional data
                    var traditionalItem = document.createElement("div");
                
                    // Set styles for the traditionalItem
                   
                    traditionalItem.style.fontSize = "20px";
                    traditionalItem.style.display = "flex"; /* Use flex layout for alignment */
                    traditionalItem.style.justifyContent = "space-between"; /* Align items with space in between */
                
                    // Set the inner HTML with the content, making only certain headings bold
                    traditionalItem.innerHTML =
                        "<span><strong style='font-size: 24px;'>Server Type:</strong> " + "<br>" + item.serverType + "</span>" +
                        "<span><strong style='font-size: 24px;'>Server Name:</strong> " + "<br>" + item.serverName + "</span>" +
                        "<span><strong style='font-size: 24px;'>Contact Number:</strong> " + "<br>" + item.contactNumber + "</span>" +
                        "<span><strong style='font-size: 24px;'>User Name:</strong> " + "<br>" + item.username + "</span>";
                
                    traditionalContainer.appendChild(traditionalItem);
                }
                
            });
        })
        .catch(error => console.error("Error fetching data: " + error));
});
