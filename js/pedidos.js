///BOTON PEDIDOS

var  mostrar = document.querySelector(".mostrar")
var alerta = document.querySelector(".alerta")

function alert(mensaje, tipo) {
  var crear = document.createElement('div')
  crear.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  mostrar.append(crear)
}

if (alerta) {
  alerta.addEventListener('click', function () {
    alert('Los envíos son de Lunes a Viernes de 09:00 a 18:00hrs', 'success')
  })
}