<?php

namespace App\Http\Controllers;

use App\Services\UserServices;
use Illuminate\Http\Request;

class UserController
{
    protected $userServices;
    public function __construct(UserServices $userServices)
    {
        $this->userServices = $userServices;
    }

    public function getUser($id)
    {
        return $this->userServices->getUserService($id);
    }

    public function createUser(Request $request)
    {
        return $this->userServices->createUserService($request);
    }

    public function getAllUsers(){
        return $this->userServices->getAllUsersService();
    }
}
