<?php

use App\Http\Controllers\ActivoController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::get('/user/{id}', 'getUser');
    Route::post('/user', 'createUser');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(ActivoController::class)->group(function () {
        Route::get('/activo', 'getActivo');
    });
    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'getAllUsers');
    });
});

