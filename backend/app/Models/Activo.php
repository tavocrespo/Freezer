<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activo extends Model
{
    protected $fillable = [
        'unique_identifier',
        'model',
        'brand',
        'manufacturer_year',
        'storage_capacity',
        'type'
    ];
}
