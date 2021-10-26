let totalApagar = document.getElementById('buttontotalApagar');


totalApagar.addEventListener('click', (e)=> {
    e.preventDefault();
 
    totalApagar();
});



function totalApagar() {
    let cantida =  document.getElementById("cantidad").value;
    let cate = document.getElementById("categoria");
    let categorias = cate.options[cate.selectedIndex].text;
    let valor= 0; //cambiar
    let numero= parseInt(cantida); //
    
    document.getElementById("total").innerHTML= "Total a Pagar: $" + valor;
alert("esto corre");
/*    
    if ( isNaN(numero)){
        alert("EN CANTIDAD INGRESE SOLO NUMEROS ENTEROS");
    }else{
        switch (categorias) {
               case "Estudiante":
                    valor= parseInt(cantida)*200*0.2;
                    document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                    break;
              case "Trainee":
                   valor = parseInt(cantida)*200*0.5; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             case "Junior":
                   valor = parseInt(cantida)*200*0.85; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             default:
                   break;
        }
   }*/
}