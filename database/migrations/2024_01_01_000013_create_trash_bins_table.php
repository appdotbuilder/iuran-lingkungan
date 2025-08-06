<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trash_bins', function (Blueprint $table) {
            $table->id();
            $table->string('location');
            $table->enum('type', ['organic', 'inorganic', 'recyclable', 'general']);
            $table->integer('capacity_liters');
            $table->enum('condition', ['excellent', 'good', 'fair', 'poor', 'broken']);
            $table->date('purchase_date');
            $table->decimal('purchase_cost', 10, 2);
            $table->string('supplier')->nullable();
            $table->text('maintenance_notes')->nullable();
            $table->date('last_maintenance')->nullable();
            $table->timestamps();
            
            $table->index(['location', 'type']);
            $table->index(['condition', 'last_maintenance']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trash_bins');
    }
};