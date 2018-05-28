<div class="dark-wrapper formContacto" id="mtingweb">
  <div class="container inner">
    <div class="col-sm-12">
      <p class="h1 text-center">Escribenos un mensaje</p>
      {{-- <pre>@{{ $data }}</pre> --}}
        <p class="text-danger text-center">@{{ info }}</p>
        <form id="contacto" autocomplete="off" v-on:submit.prevent="enviarData()">
          <div class="form-group" id="formnombre">
            <div class="col-sm-6">
              <label for="nombre">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre" v-model="datos.nombre">
            </div>
          </div>
          <div class="form-group" id="formcorreo">
            <div class="col-sm-6">
              <label for="correo">Correo</label>
              <input type="text" class="form-control" id="correo" placeholder="Escribe tu correo" v-model="datos.correo">
            </div>
          </div>
          <div class="form-group" id="formcorreo">
            <div class="col-sm-12">
              <label for="telefono">Teléfono</label>
              <input type="number" class="form-control" id="telefono" placeholder="Escribe tu teléfono." v-model="datos.telefono">
            </div>
          </div>
          <div class="form-group" id="formensaje">
            <label for="mensaje">Mensaje</label>
            <textarea class="form-control" id="mensaje" rows="2" v-model="datos.mensaje"></textarea>
          </div>
          <div class="form-group row">
            <div class="offset-sm-2 col-sm-10">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
