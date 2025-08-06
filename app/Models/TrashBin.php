<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\TrashBin
 *
 * @property int $id
 * @property string $location
 * @property string $type
 * @property int $capacity_liters
 * @property string $condition
 * @property \Illuminate\Support\Carbon $purchase_date
 * @property string $purchase_cost
 * @property string|null $supplier
 * @property string|null $maintenance_notes
 * @property \Illuminate\Support\Carbon|null $last_maintenance
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|TrashBin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TrashBin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TrashBin query()
 * @mixin \Eloquent
 */
class TrashBin extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'location',
        'type',
        'capacity_liters',
        'condition',
        'purchase_date',
        'purchase_cost',
        'supplier',
        'maintenance_notes',
        'last_maintenance',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'purchase_date' => 'date',
        'purchase_cost' => 'decimal:2',
        'last_maintenance' => 'date',
    ];
}