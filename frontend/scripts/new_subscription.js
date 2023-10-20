function validateForm() {
    const subscriptionType = document.getElementById('subscriptionType').value;
    const errorElement = document.getElementById('error');

    if (subscriptionType === "") {
       
        errorElement.textContent = 'Please Select the type of subscription';
        return false;
    } else {
    
        errorElement.textContent = ''; 
        window.location.href = 'OTT\OTT\pages\details.html';

        return true;
    }
   
}
