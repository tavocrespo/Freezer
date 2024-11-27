<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Crear la tabla tipo_nevera
        Schema::create('tipo_nevera', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique(); // Nombre único del tipo de nevera
            $table->timestamps();
        });

        // Insertar valores iniciales en tipo_nevera
        DB::table('tipo_nevera')->insert([
            ['name' => 'Exhibición'],
            ['name' => 'Almacenaje'],
            ['name' => 'Dispensador'],
        ]);

        // Crear la tabla activo
        Schema::create('activo', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('unique_identifier')->unique(); // Identificador único del activo
            $table->string('model'); // Modelo del activo
            $table->string('brand'); // Marca del activo
            $table->year('manufacture_year'); // Año de fabricación
            $table->string('storage_capacity'); // Capacidad de almacenamiento

            // Relación con tipo_nevera
            $table->foreignId('tipo_nevera_id')
                ->nullable() // Permite valores nulos
                ->constrained('tipo_nevera') // Apunta a la tabla tipo_nevera
                ->onDelete('set null'); // Si se elimina el tipo de nevera, se pone en null
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Primero eliminar la tabla activo (que tiene la clave foránea)
        Schema::dropIfExists('activo');

        // Luego eliminar la tabla tipo_nevera
        Schema::dropIfExists('tipo_nevera');
    }
};
