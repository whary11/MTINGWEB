/////////////////////////////////////////////////
$(document).ready(()=> {

// Animar la acción de los links
  let contacto = $('#contac-wrapper');
  let scrolForm = $('.formContacto').offset().top
  let servicios = $('.servicios').offset().top
  $('.linkContacto').click((e) => {
    e.preventDefault()
    $('body,html').animate({'scrollTop':scrolForm}, 2000)
  })
  $('.linkServicios').click((e) => {
    $('body,html').animate({'scrollTop':servicios}, 2000)
  })
///////////////Poner texto personalizado para incentivar la acción..

let accion = $('#accion');
let dias = ['Domingos', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábados']
let dia = dias[new Date().getDay()];
accion.text('Los '+dia.toLowerCase()+' son el mejor día para empezar, animate y lo conseguiremos junto a ti.')

// Los martes son el mejor día para empezar, animate y lo conseguiremos junto a ti.

// Animaciones con wow y animate

  new WOW().init();
});


///////////////////////Contacto///////////////////////////
var app = new Vue({
  el: '#mtingweb',
  data: {
    info: '',
    datos:{
      nombre:'',
      correo:'',
      telefono:'',
      mensaje:''
    }
  },
  methods:{
    enviarData:function(){
      if (this.datos.nombre =='') {
        this.info = 'Escribe un nombre para tener una atención personalizada.'
      }else if (this.datos.correo=='') {
        this.info = 'Escribe un correo para contactarnos contigo.'
      }else if (this.datos.telefono=='') {
        this.info = 'Escribe un telefono para contactarnos contigo.'
      }else if (this.datos.mensaje=='') {
        this.info = 'Escribe un mensaje para tener una idea de lo que necesitas.'
      }else if (!this.isValidEmail(this.datos.correo)) {
        this.info = 'El correo electrónico no es correcto.'
      }else{
        let url = 'mensaje';
        axios.post(url, this.datos).then(resp => {
          this.info = resp.data;
          this.datos = {
            nombre:'',
            correo:'',
            telefono:'',
            mensaje:''
          }

        }).catch(error => {
          this.info = 'Ha ocurrido un error, revisa tu conexión a internet e intentalo nuevamente.'
          console.log(error.response);
        })
      }
    },
    isValidEmail: function(mail) {
      return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }
  }
})
