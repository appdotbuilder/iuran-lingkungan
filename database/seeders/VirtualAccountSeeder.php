<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\VirtualAccount;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VirtualAccountSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Create virtual accounts for users with 'user' role
        $userRole = Role::where('slug', 'user')->first();
        if ($userRole) {
            $users = $userRole->users;
            
            foreach ($users as $user) {
                VirtualAccount::firstOrCreate(
                    ['user_id' => $user->id],
                    [
                        'account_number' => '8810' . str_pad((string)$user->id, 6, '0', STR_PAD_LEFT),
                        'bank_name' => 'BCA',
                        'status' => 'active',
                    ]
                );
            }
        }

        // Create virtual account for test user if exists
        $testUser = User::where('email', 'user@example.com')->first();
        if ($testUser && !$testUser->virtualAccount) {
            VirtualAccount::create([
                'user_id' => $testUser->id,
                'account_number' => '8810000001',
                'bank_name' => 'BCA',
                'status' => 'active',
            ]);
        }
    }
}