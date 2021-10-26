let totalApagar = document.getElementById('buttontotalApagar');


totalApagar.addEventListener('click', (e)=> {
    e.preventDefault();
    let cantida =  parseInt(document.getElementById("cantidad").value);
    let categorias = document.getElementById('categoria');
    let categori = categorias.options[categorias.selectedIndex].value;
    let valor= 0; //cambiar
    
    //document.getElementById("total").innerHTML= "Total a Pagar: $" + cantida;
    //alert(categori)
    if (isNaN(cantida)) {
        document.getElementById("total").innerHTML= "Ingrese un numero en cantidad"; 
        
    } else if (categori === "Estudiante") {
        document.getElementById("total").innerHTML= "Total a Pagar: $" + cantida * 80;
    } else if (categori === "Trainee") {
        document.getElementById("total").innerHTML= "Total a Pagar: $" + cantida * 100;
    } else if (categori === "Junior") {
        document.getElementById("total").innerHTML= "Total a Pagar: $" + cantida * 170;
    }
});