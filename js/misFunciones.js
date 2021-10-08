function traerInformacion(){
    $.ajax({
        url:"http://localhost:8080/saludar/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta)
        }

    });
}

function pintarRespuesta(respuesta){

    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].developer+"</td>";
        myTable+="<td>"+respuesta[i].minage+"</td>";
        myTable+="<td>"+respuesta[i].category_id+"</td>";
        myTable+="<td>"+
        respuesta[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}




