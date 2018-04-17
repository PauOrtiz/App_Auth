var provider = new firebase.auth.GoogleAuthProvider();
$('#logueo').click(function(){ 
    firebase.auth()
    .signInWithPopup(provider) 
    .then(function(result){
         console.log(result.user); 
         almacenaDatos(result.user); 
         $('#logueo').hide();                         
         $('#principal').append("<img src=' " +result.user.photoURL+ "'/>" )                          
    });
});

// guardado de datos automático
function almacenaDatos(user){ 
    var datosDelUsuario={ 
        nombre: user.displayName, 
        email:user.email, 
        foto:user.photoURL, 
        uid:user.uid 
}
    firebase.database().ref("datosInicioDeSesion/"+ user.uid)
    .push(datosDelUsuario) 
}  
//leyendo de la base de datos en tiempo real
firebase.database().ref("datosInicioDeSesion")
.on("child_added",function(s){
    var usuario2=s.val();
    $('#principal').append("<img  width='150px' src='"+user.foto+"'/>");
})
