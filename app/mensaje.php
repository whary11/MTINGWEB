<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mensaje extends Model
{
  protected $fillable = [
      'nombre', 'correo', 'mensaje', 'telefono', 'landing'
  ];
}
