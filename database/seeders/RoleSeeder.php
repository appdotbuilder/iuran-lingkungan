<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Pengguna',
                'slug' => 'user',
                'description' => 'Pengguna biasa yang dapat melihat virtual account, upload bukti pembayaran, dan membuat laporan'
            ],
            [
                'name' => 'Petugas',
                'slug' => 'officer',
                'description' => 'Petugas lapangan yang dapat melaporkan kondisi, mencatat pengambilan sampah, dan mengelola data lingkungan'
            ],
            [
                'name' => 'Admin',
                'slug' => 'admin',
                'description' => 'Administrator yang dapat menginput data iuran, data pembelian, membuat invoice, dan mengelola data lingkungan'
            ],
            [
                'name' => 'Manajer',
                'slug' => 'manager',
                'description' => 'Manajer dengan akses penuh ke semua fitur sistem'
            ],
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(
                ['slug' => $role['slug']],
                $role
            );
        }
    }
}