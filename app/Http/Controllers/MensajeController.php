<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use Session;
use Redirect;
use App\mensaje;

class MensajeController extends Controller
{
    public function crear(Request $request){
      // Guardar datos en base de datos
      $Mensaje = mensaje::create([
          'nombre' => $request->input('nombre'),
          'correo' => $request->input('correo'),
          'telefono' => $request->input('telefono'),
          'mensaje' => $request->input('mensaje'),
          'landing' => 'Principal'
      ]);
      // Enviarnos los datos por correo electronico
      Mail::send('correos/contacto', ['req'=>$Mensaje,'landing'=>'Principal'], function($msj)
      {
        $msj->subject('Nuevo registro MTINGWEB');
        $msj->to(['whary11@gmail.com','ragarenteria@gmail.com','mtingweb@gmail.com']);
        // $msj->bcc(['']);
      });
      return 'Mensaje enviado correctamente, pronto nos comunicaremos contigo.';
    }
}
