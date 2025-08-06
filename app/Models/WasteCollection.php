<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\WasteCollection
 *
 * @property int $id
 * @property int $officer_id
 * @property string $vendor_name
 * @property string $vendor_contact
 * @property string $location
 * @property string $weight_kg
 * @property string $waste_type
 * @property \Illuminate\Support\Carbon $collection_date
 * @property string $collection_time
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $officer
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|WasteCollection newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WasteCollection newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WasteCollection query()
 * @mixin \Eloquent
 */
class WasteCollection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'officer_id',
        'vendor_name',
        'vendor_contact',
        'location',
        'weight_kg',
        'waste_type',
        'collection_date',
        'collection_time',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'weight_kg' => 'decimal:2',
        'collection_date' => 'date',
    ];

    /**
     * Get the officer who recorded this waste collection.
     */
    public function officer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'officer_id');
    }
}