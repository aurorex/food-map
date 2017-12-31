$(document).ready(function() {
/* declaramos una variable restaurants vacia para almacenar un string */
  var restaurants = '';
  /* asignamos por defecto el key 'cercado de lima' del objeto 'distritos de lima' que es key del objeto foodMap a  la variable restaurants al cargar el documento */
  restaurants = foodMap['distritos de lima'][0]['cercado de lima'];
  /* agregando key(nombre del distrito:cercado de lima,por defecto) en la etiqueta 'h2' */
  $('.name-distrito').append('Los restaurantes de cercado de lima');
  /* recorremos la variable 'restaurants' */
  for (var i = 0;i < restaurants.length; i++) {
    /* recorremos el objeto'cercado de lima'(key del objeto 'distritos de lima' ) para obtener el key y el value de dicho objeto */
    $.each(restaurants[i], function(key, value) { 
      /* agregando valores(value) del objeto 'cercado de lima' a los atributos que se crean en la etiqueta <img> */
      $('#img' + i).attr('data-restaurante', key);
      $('#div-img' + i).append(key);
      $('#img' + i).attr('data-map', value.mapa);
      $('#img' + i).attr('data-descripcion', value.descripcion);
      $('#img' + i).attr('data-direccion', value.direccion);
      $('#img' + i).attr('data-contacto', value.contacto);
      $('#img' + i).attr('data-comida', value['tipo de comida']);
      $('#img' + i).attr('data-precio', value.precio);
      /* agregando url de la propiedad'image' al atributo 'src' */
      $('#img' + i).attr('src', value.image);
      /* agregar etiqueta 'p' con el key(cercado de lima) del objeto 'distritos de lima' a la etiqueta <img> */
      $('#img' + i).append('<p>' + key + '</p>');
      /* evento click para la etiqueta <div> agrega data de los restaurantes del objeto 'cecado de lima' en el modal */
      $('#div-img' + i).on('click', function(event) {
        /* el metodo empty vacia los elementos y valores de un objeto*/
        $('h4,.li-1,.li-2,.li-3,.li-4,.li-5').empty();
        /* agregamos elementos y valores */
        $('h4').append(key);
        $('#image-modal').attr('src', value.mapa);
        $('.li-1').append('<strong>Descripción :</strong> ' + value.descripcion);
        $('.li-2').append('<strong>Dirección :</strong> ' + value.direccion);
        $('.li-3').append('<strong>Contacto :</strong> ' + value.contacto);
        $('.li-4').append('<strong>Platos :</strong> ' + value['tipo de comida']);
        $('.li-5').append('<strong>Precios desde :</strong> ' + value.precio);             
      }); 
    });
  }
  /* asignamos en una variable la etiqueta 'input' */
  var $input = $('.input');
  /* evento keydown en el input */ 
  $input.on('keydown', function(event) {
    /* condicional para ejecutar el evento */   
    if (event.keyCode === 13) {
      /* declaro la variable index que tendra el valor del input transformado automaticamente a minúscula */
      var index = $input.val().toLowerCase();
      /* agregamos el valor de la variable index('nombre del distrito') en la etiqueta 'h2'*/
      $('.name-distrito').empty();
      $('.name-distrito').append('Los restaurantes de ' + index);
      /* funcion para filtrar por nombres de distritos deacuerdo al key(propiedad distrito) que se encuentre en el objeto 'distritos de lima' */
      function filterDistrito(index, distrito) {
        /* asignamos otro valor para la variable 'restaurants */
        restaurants = foodMap['distritos de lima'][index][distrito];
        /* recorremos la variable restaurants */
        for (var i = 0;i < restaurants.length; i++) {
          /* recorremos el objeto  para obtener el key y el value de dicho objeto */
          $.each(restaurants[i], function(key, value) {
            /* agregando valores(value) de los objetos del key(propiedad distrito) del objeto 'distritos de lima' a los atributos que se crean en la etiqueta <img> */
            $('#img' + i).attr('data-restaurante', key);
            $('#div-img' + i).empty();
            $('#div-img' + i).append(key);
            $('#img' + i).attr('data-map', value.mapa);
            $('#img' + i).attr('data-descripcion', value.descripcion);
            $('#img' + i).attr('data-direccion', value.direccion);
            $('#img' + i).attr('data-contacto', value.contacto);
            $('#img' + i).attr('data-comida', value['tipo de comida']);
            $('#img' + i).attr('data-precio', value.precio);
            /* agregando url de la propiedad'image' al atributo 'src' */
            $('#img' + i).attr('src', value.image);
            /* agregar a la etiqueta <img> el key(propiedad distrito) para agregar el nombre de cada distrito del objeto 'distritos de lima'  */
            $('#img' + i).append('<p>' + key + '</p>'); 
            /* evento click para la etiqueta <img> agrega data al modal */
            $('#div-img' + i).on('click', function(event) {
              /* agregamos valores(value) de los objetos que estan dentro del key(propiedad distrito) al modal*/
              $('h4,.li-1,.li-2,.li-3,.li-4,.li-5').empty();
              $('h4').append(key);
              $('#image-modal').attr('src', value.mapa);
              $('.li-1').append('<strong>Descripción :</strong> ' + value.descripcion);
              $('.li-2').append('<strong>Dirección :</strong> ' + value.direccion);
              $('.li-3').append('<strong>Contacto :</strong> ' + value.contacto);
              $('.li-4').append('<strong>Platos :</strong> ' + value['tipo de comida']);
              $('.li-5').append('<strong>Precios desde :</strong> ' + value.precio);             
            });      
          });
          /* evento mouseover y mouseout para la etiqueta <img> */
          $('#div-img' + i).on('mouseover', function() {
            $(this).css('opacity', 0.2);            
          }); 
          $('#div-img' + i).on('mouseout', function() {
            $(this).css('opacity', 1);
          });
        }
      }
      /* usamos la condicional switch para pasar parametros a la funcion filterDistrito */
      switch (index) {
      case 'cercado de lima': filterDistrito(0, 'cercado de lima'); break;
      case 'breña': filterDistrito(1, 'breña'); break;
      case 'jesus maria': filterDistrito(2, 'jesus maria'); break;
      case 'la victoria': filterDistrito(3, 'la victoria'); break;      
      case 'pueblo libre': filterDistrito(4, 'pueblo libre'); break;   
      default: alert('aún no tenemos esa opción de búsqueda, por favor, elige una de estas opciones: cercado de lima- breña- jesus maria-la victoria - pueblo libre');         
      }
    }
  });   
});
