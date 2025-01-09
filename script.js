const messageElement = document.getElementById('dynamic-message');
const currentTime = new Date();
messageElement.textContent = `Welcome! The current time is: ${currentTime.toLocaleTimeString()}`;
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const locationInput = document.getElementById('location-input');
const hobbyInput = document.getElementById('hobby-input');
const subscriptionList = document.getElementById('subscription-list');
document.addEventListener('DOMContentLoaded', () => {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.forEach(sub => {
        displaySubscription(sub);
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    const email = emailInput.value;
    const location = locationInput.value;
    const hobby = hobbyInput.value;

    const subscriptionData = {
        email: email,
        location: location,
        hobby: hobby
    };

    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(subscriptionData);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

    displaySubscription(subscriptionData);
    form.reset();
});

function displaySubscription(subscription) {
    const subscriptionItem = document.createElement('div');
    subscriptionItem.classList.add('subscription-item');
    subscriptionItem.innerHTML = `
        <p>Email: ${subscription.email}</p>
        <p>Location: ${subscription.location}</p>
        <p>Favorite Hobby: ${subscription.hobby}</p>
        <button class="delete-btn">Delete</button>
    `;

    const deleteButton = subscriptionItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteSubscription(subscription);
        subscriptionItem.remove(); 
    });

    subscriptionList.appendChild(subscriptionItem);
}

function deleteSubscription(subscriptionToDelete) {
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions = subscriptions.filter(sub => sub.email !== subscriptionToDelete.email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

const marqueeContent = document.querySelector('.marquee-content');
marqueeContent.addEventListener('mouseover', () => {
    marqueeContent.style.fontSize = '1.5em';
});
marqueeContent.addEventListener('mouseout', () => {
    marqueeContent.style.fontSize = '1.2em';
});
