<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    public function run()
    {
        Role::create(['role_name' => 'admin']);
        Role::create(['role_name' => 'user']);
        Role::create(['role_name' => 'editor']);
    }
}
