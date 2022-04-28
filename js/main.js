// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const kmTrip = Number(prompt("Inserisci i km del tuo viagggio"));
const age= Number(prompt("Inserisci la tua eta"));
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let kmPrice= 0.21;
let price;
if(age<18){
    price=kmTrip*kmPrice;
    document.getElementById("price").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
    price=price-price*0.2;
    document.getElementById("tipo_biglietto").innerHTML += "Under 18";
    document.getElementById("promo").innerHTML = "Sconto 20%" ;
    document.getElementById("final_price").innerHTML= `Prezzo ridotto ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}`;
    

    
}else if(age>64){
    price=kmTrip*kmPrice;
    document.getElementById("price").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
    price=price-price*0.4;
    document.getElementById("tipo_biglietto").innerHTML += "Over 65";
    document.getElementById("promo").innerHTML = "Sconto 40%" ;
    document.getElementById("final_price").innerHTML= `Prezzo ridotto ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}`;
    
}else{
    price=kmTrip*kmPrice;
    document.getElementById("price").innerHTML=price=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
    document.getElementById("tipo_biglietto").innerHTML += "Intero";    
}


// price=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
console.log(price);
// expected output: "123.456,79 €"

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.