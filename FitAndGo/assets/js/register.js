const validarRegistro=()=>{
    Usuarios=JSON.parse(localStorage.getItem("ListaUsuarios"));
    let correo=document.getElementById("correo").value;
    let usuario=document.getElementById("usuario").value;
    let password=document.getElementById("contrasena").value;
    let Usuario_creado={correo,usuario,password};
    if(correo!="" && usuario!="" && password!=""){
        alert("Usted se ha registrado");
        Usuarios.push(Usuario_creado);
        console.log(Usuarios);
       window.location.assign("/html/registros/inicio-sesion.html");
    }else{
        alert("Rellena los campos");
    }
    localStorage.setItem("ListaUsuarios", JSON.stringify(Usuarios));

}