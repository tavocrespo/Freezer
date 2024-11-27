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
        Schema::create('geographic_table_location', function (Blueprint $table) {
            $table->id();
            // $table->timestamps();
            $table->string('name');
            $table->string('country');
            $table->string('state');
        });

        DB::table('geographic_table_location')->insert([
            [
                'name' => 'Valledupar',
                'country' => 'Colombia',
                'state' => 'Cesar'
            ],
            [
                'name' => 'Barranquilla',
                'country' => 'Colombia',
                'state' => 'Atlantico'
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('geographic_table_location');
    }
};
