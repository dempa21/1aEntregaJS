function Calcular() {
  
    // Extraigo valor del modelo 

    const modelo = document.querySelector("#modelo").value;
  
    // Extraigo el valor de cant. de kms. recorridos
    // 
    const cantidadKms = document.querySelector("#cantidadKms").value;
  
    // Calculando precio según kms recorridos por mes
    const interest = 2500-((2022-modelo)*140);
    const interestkms = -cantidadKms*0.01
      
    // Calculando pago total
    const total = (interest+interestkms).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "Cuota : $" + total;
}  
