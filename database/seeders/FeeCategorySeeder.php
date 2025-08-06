<?php

namespace Database\Seeders;

use App\Models\FeeCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeeCategorySeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Iuran Kebersihan',
                'description' => 'Iuran bulanan untuk pemeliharaan kebersihan lingkungan',
                'amount' => 75000,
                'billing_cycle' => 'monthly',
                'status' => 'active',
            ],
            [
                'name' => 'Iuran Keamanan',
                'description' => 'Iuran bulanan untuk biaya keamanan lingkungan',
                'amount' => 100000,
                'billing_cycle' => 'monthly',
                'status' => 'active',
            ],
            [
                'name' => 'Iuran Pemeliharaan Taman',
                'description' => 'Iuran triwulanan untuk pemeliharaan taman dan fasilitas umum',
                'amount' => 150000,
                'billing_cycle' => 'quarterly',
                'status' => 'active',
            ],
            [
                'name' => 'Iuran Pengelolaan Sampah',
                'description' => 'Iuran bulanan untuk pengelolaan dan pengangkutan sampah',
                'amount' => 50000,
                'billing_cycle' => 'monthly',
                'status' => 'active',
            ],
        ];

        foreach ($categories as $category) {
            FeeCategory::firstOrCreate(
                ['name' => $category['name']],
                $category
            );
        }
    }
}