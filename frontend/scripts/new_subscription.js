const form = document.getElementById('subscriptionForm');
const  subscriptionType = document.getElementById('subscriptionType');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const selectedSubscription = subscriptionType.value;
    sessionStorage.setItem('subscriptionType',selectedSubscription
    );
    if(selectedSubscription == 'Traditional'){
        window.location.href = "details.html";
    }else{
        window.location.href = "add_subscription.html";
    }
   
})