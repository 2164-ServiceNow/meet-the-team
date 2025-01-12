const form=document.getElementById("form");
const emailInput=document.getElementById("emailInput");
const emailError=document.getElementById("emailerror");
const messageElement=document.getElementById("dynamic-message");
const catchMe=document.getElementById('catchme');
const image1=document.getElementById("image1");
const image2=document.getElementById("image2");
const favFilm=document.getElementById("one");
const character=document.getElementById("two");
const tbodyValue=document.getElementById("tbodyid");


function changeText()
{
    alert("oopsie!long way to go.");
    document.getElementById("catchme").textContent=`caughtme!`;
}
catchMe.addEventListener('focus',()=>{
    catchMe.style.borderColor='darkgreen';
})
catchMe.addEventListener('blur',()=>{
    catchMe.style.borderColor='voilet';
})
const currentTime=new Date();
messageElement.textContent=`Welcome! The current time is: ${currentTime.toLocaleTimeString()}`;


// form.addEventListener('submit',(event)=>{
//     if(!emailInput.checkValidity())
//     {
//         event.preventDefault();
//         emailError.style.display='block';
//     }
//     else{
//         emailError.style.display='none';
//     }
// })

image1.addEventListener('mouseover',()=>{
    image1.src="./Images/sw3.jpg";
});
image1.addEventListener('mouseout',()=>{
    image1.src="./Images/sw2.jpg";
})
image2.addEventListener('mouseover',()=>{
    image2.src="./Images/sw1.webp";
});
image2.addEventListener('mouseout',()=>{
    image2.src="./Images/sw3.webp";
});


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const favFilmValue=favFilm.value;
    const characterValue=character.value;
    console.log(favFilmValue,characterValue)
    console.log(tbodyValue)
    if(1){
        let newfilm=` <tr>
                       <td>${favFilmValue}</td>
                       <td>${characterValue}</td>
                    </tr>`;
                    tbodyValue.innerHTML+=newfilm;
        }
        else{
            alert("sorry! my bad");
        }
})


