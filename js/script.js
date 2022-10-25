function Calculate() {
  
    // Extracting value in the amount 
    // section in the variable
    const modelo = document.querySelector("#modelo").value;
  
    // Extracting value in the interest
    // rate section in the variable
    const cantidadKms = document.querySelector("#cantidadKms").value;
  
    // Calculando precio según kms recorridos por mes
    const interest = 2500-((2022-modelo)*140);
    const interestkms = -cantidadKms*0.01
      
    // Calculating total payment
    const total = (interest+interestkms).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "EMI : $" + total;
}  
