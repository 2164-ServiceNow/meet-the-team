function changeText()
{
    alert("oopsie!long way to go.");
    document.getElementById("catchme").textContent=`caughtme!`;
}
const catchMe=document.getElementById('catchme');
catchMe.addEventListener('focus',()=>{
    catchMe.style.borderColor='darkgreen';
})
catchMe.addEventListener('blur',()=>{
    catchMe.style.borderColor='voilet';
})
const messageElement=document.getElementById("dynamic-message");
const currentTime=new Date();
messageElement.textContent=`Welcome! The current time is: ${currentTime.toLocaleTimeString()}`;

const form=document.getElementById("form");
const emailInput=document.getElementById("emailInput");
const emailError=document.getElementById("emailerror");

form.addEventListener('submit',(event)=>{
    if(!emailInput.checkValidity())
    {
        event.preventDefault();
        emailError.style.display='block';
    }
    else{
        emailError.style.display='none';
    }
})

const image1=document.getElementById("image1");
image1.addEventListener('mouseover',()=>{
    image1.src="./Images/sw3.jpg";
});
image1.addEventListener('mouseout',()=>{
    image1.src="./Images/sw2.jpg";
})

const image2=document.getElementById("image2");
image2.addEventListener('mouseover',()=>{
    image2.src="./Images/sw1.webp";
});
image2.addEventListener('mouseout',()=>{
    image2.src="./Images/sw3.webp";
});