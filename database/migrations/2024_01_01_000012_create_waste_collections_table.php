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
        Schema::create('waste_collections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('officer_id')->constrained('users')->onDelete('cascade');
            $table->string('vendor_name');
            $table->string('vendor_contact');
            $table->string('location');
            $table->decimal('weight_kg', 8, 2);
            $table->enum('waste_type', ['organic', 'inorganic', 'recyclable', 'hazardous']);
            $table->date('collection_date');
            $table->time('collection_time');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['officer_id', 'collection_date']);
            $table->index(['vendor_name', 'collection_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waste_collections');
    }
};