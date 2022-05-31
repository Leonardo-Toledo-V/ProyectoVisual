const validarUsuario=()=>{
    Usuarios=JSON.parse(localStorage.getItem("ListaUsuarios"));
    let contraseña_dada= document.getElementById("password").value;	
    let correo_dado=document.getElementById("email").value
    var bandera = 0;
    if(correo_dado!="" && contraseña_dada!=""){
        for (let i = 0; i < Usuarios.length; i++) {
            if(contraseña_dada == Usuarios[i].password && correo_dado==Usuarios[i].correo){
                bandera=0;
                alert("Bienvenido "+Usuarios[i].usuario);
                i=Usuarios.length;
                window.location.assign("/html/food.html");
                }
            else{
                bandera=1;         
                }
        }
    }else{
        alert("Ingrese los datos pedidos");
    }

            if (bandera==1) {
                alert("Usuario o contraseña incorrectos")
        }

}