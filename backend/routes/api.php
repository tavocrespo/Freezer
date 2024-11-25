<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::get('/user/{id}', 'getUser');
    Route::post('/user', 'createUser');
    Route::get('/users', 'getAllUsers');
});