<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FeeCategory>
 */
class FeeCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Iuran Kebersihan', 'Iuran Keamanan', 'Iuran Pemeliharaan']),
            'description' => fake()->sentence(),
            'amount' => fake()->numberBetween(50000, 200000),
            'billing_cycle' => fake()->randomElement(['monthly', 'quarterly', 'yearly']),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}