<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaMensajes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('mensajes', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->string('nombre');
          $table->string('correo');
          $table->string('telefono');
          $table->string('mensaje')->length(500);
          $table->string('landing');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mensajes', function (Blueprint $table) {
            //
        });
    }
}
