// 1. Dynamic Content Update
const msgEl = document.getElementById('dynamic-message');
const timestamp = new Date();
msgEl.textContent = msgEl.textContent + ' | ' + timestamp.toLocaleTimeString();

// 2. Form Validation, Event Handling & localStorage
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const marqueeEL = document.getElementsByClassName('MarqueeContent-text');
const formEl = document.getElementById('subscribe');
const inputEl = document.getElementById('email');
const errorEL = document.getElementById('email-error');
const buttonEL = document.getElementById('submit');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    errorEL.classList.remove('is-success');
    errorEL.textContent = '';
    if (!regex.test(inputEl.value)) {
        errorEL.classList.add('is-invalid');
        errorEL.textContent = 'Please provide a valid email address.';
        return;
    }
    localStorage.setItem('subscriptionEmail', inputEl.value);
    errorEL.classList.remove('is-invalid');
    errorEL.classList.add('is-success');
    errorEL.textContent = 'You have successfully subscribe!';

    const subscriptionEmail =
        localStorage.getItem('subscriptionEmail') + ' has subscribe!!!';
    for (const element of marqueeEL) {
        element.textContent = `${subscriptionEmail} \xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}\xa0 \xa0 \xa0 \xa0 \xa0 \xa0
                            \xa0 \xa0 \xa0 \xa0 ${subscriptionEmail}`;
    }
});

// 3. Image Manipulation
const avatarEl = document.getElementById('avatar');

avatarEl.addEventListener('mouseover', () => {
    avatarEl.src =
        'https://cdn.bsky.app/img/avatar/plain/did:plc:e5oyemiejqhjso62nelwtwqb/bafkreihhib4v5n2z6l4oklevxgfryqif3xgcr3bjswvmy7btk4pwzsszpm@jpeg';
});
avatarEl.addEventListener('mouseout', () => {
    avatarEl.src = 'https://avatars.githubusercontent.com/u/2271231?v=4';
});
