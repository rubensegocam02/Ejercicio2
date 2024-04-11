
//Funcion alerta correo enviado
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("¡Correo enviado exitosamente!");
    });
});
//Funcion pintar de rojo encabezados receta
$(document).ready(function(){
    $("h5.text-center-start.my-5.fw-bold").dblclick(function(){
      $(this).css("color", "red");
    });
  });
  
//Funcion toggle para tarjetas
$(document).ready(function(){
    $(".card-title").click(function(){
        $(this).siblings(".card-text").toggle();
    });
});
