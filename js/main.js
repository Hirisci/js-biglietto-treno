const inputName= document.getElementById("full-name");
const inputKM= document.getElementById("km");
const inputType= document.getElementById("type");

const ticketName= document.getElementById("ticket-name");
const ticketType= document.getElementById("ticket-type");
const ticketTrain= document.getElementById("ticket-train");
const ticketWagon= document.getElementById("ticket-wagon");
const ticketPrice= document.getElementById("ticket-price");

const ticketHide=document.getElementById("wrapper")



const btnGenerate= document.getElementById("btn-generate")
btnGenerate.addEventListener('click',
    function(){
        ticketName.innerHTML= inputName.value;
        let price= Number(inputKM.value)*0.21;

        if(inputType.value==="under"){
            price*=0.8;
            ticketType.innerHTML = "Ridotto Young -20%";
        } else if(inputType.value==="over"){
            price*=0.6;
            ticketType.innerHTML = "Ridotto Over 65 -40%";
        }

        ticketPrice.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
        ticketHide.style = "display: block";
    }
);


const btnReset = document.getElementById("btn-reset")
btnReset.addEventListener('click', 
    function(){
        ticketHide.style = "display: none";
        inputName.value = "";
        inputKM.value= "";
        inputType.value= "";
    }
);







// price=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
// expected output: "123.456,79 €"

