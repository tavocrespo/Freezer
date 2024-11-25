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
        Schema::create('activo', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('unique_identifier')->unique();
            $table->string('model');
            $table->string('brand');
            $table->year('manufacture_year');
            $table->string('storage_capacity');
            $table->string('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activo');
    }
};
