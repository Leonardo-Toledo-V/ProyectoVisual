const Usuarios =[{correo:"",usuario:"",password:""}];
localStorage.setItem("ListaUsuarios", JSON.stringify(Usuarios));


const FormularioContactUs=()=>{
    let correo;
    correo= document.getElementById("email").value;
    if(correo==""){
        alert("Ingrese los datos pedidos")
    }else{
        alert("¡Gracias por tus comentarios!")
        window.location.assign("/html/main.html");
        //location.reload();
    }
}






//cuando crea o altera la lista
// listaUsuarios=JSON.parse(localStorage.getItem("lista")) cuado lo voy a obtener 
// listaUsuarios=JSON.parse(localStorage.getItem("lista"))

//.trim() para quitar espaciados

