<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            FeeCategorySeeder::class,
        ]);

        // Create test users with roles
        $manager = User::factory()->create([
            'name' => 'Manager Test',
            'email' => 'manager@example.com',
        ]);

        $admin = User::factory()->create([
            'name' => 'Admin Test',
            'email' => 'admin@example.com',
        ]);

        $officer = User::factory()->create([
            'name' => 'Officer Test',
            'email' => 'officer@example.com',
        ]);

        $user = User::factory()->create([
            'name' => 'User Test',
            'email' => 'user@example.com',
        ]);

        // Assign roles
        $managerRole = Role::where('slug', 'manager')->first();
        $adminRole = Role::where('slug', 'admin')->first();
        $officerRole = Role::where('slug', 'officer')->first();
        $userRole = Role::where('slug', 'user')->first();

        $manager->roles()->attach($managerRole);
        $admin->roles()->attach($adminRole);
        $officer->roles()->attach($officerRole);
        $user->roles()->attach($userRole);

        $this->call([
            VirtualAccountSeeder::class,
        ]);
    }
}
