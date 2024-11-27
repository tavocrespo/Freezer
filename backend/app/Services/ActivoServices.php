<?php

namespace App\Services;

use App\Models\Activo;

class ActivoServices
{
    public function getAllActivosService()
    {
        return Activo::all();
    }

    public function getActivoService($id)
    {

    }

    public function createActivoService($dataRequest)
    {
        $data = $dataRequest->all();

        
    }
}