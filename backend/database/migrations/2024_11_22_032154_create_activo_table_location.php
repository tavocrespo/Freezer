<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('locations_activo', function (Blueprint $table) {
            $table->id();
            $table->foreignId('activo_id')->constrained('activo')->onDelete('cascade');
            $table->string('address');
            $table->date('installation_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locations_activo');
    }
};
