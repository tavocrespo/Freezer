<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

// use Illuminate\Support\Facades\Validator;

class UserServices
{
    // Funcion para obtener usuario a traves de la id
    public function getUserService($id)
    {

        $user = User::find($id);

        if (!$user)
            return response()->json(['message' => 'User not found', 'success' => false], 404);

        return response()->json(['message' => 'User found', 'success' => true, 'data' => $user], );
    }

    // Funcion para crear usuario o registrarlo
    public function createUserService($request)
    {
        $data = $request->all();
        // dd($data);
        $validate = Validator::make($data, [
            'name' => 'required|max:100|string',
            'password' => 'string|min:8|required',
            'email' => 'required|email|unique:users',
            // 'role_id' => 'required|integer|exists:roles,id'
        ]);

        if ($validate->fails()) {
            $errors = $validate->errors()->all();
            return response()->json(
                [
                    'success' => false,
                    'message' => implode(' ', $errors)
                ]
            );
        }

        // return ($data);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            // 'role_id' => $data['role_id']
        ]);

        $token = $user
            ->createToken('auth_token')
            ->plainTextToken;

        return response()
            ->json(['success' => true, 'message' => 'User created successfully', 'data' => $user], 201)
            ->cookie('auth_token', $token);
    }

    // Obtener todos los usuarios
    public function getAllUsersService()
    {
        $users = User::all();
        return $users;
    }
}

