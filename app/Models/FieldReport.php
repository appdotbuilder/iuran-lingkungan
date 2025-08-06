<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\FieldReport
 *
 * @property int $id
 * @property int $officer_id
 * @property string $location
 * @property string $conditions
 * @property array|null $photos
 * @property string $weather
 * @property string|null $recommendations
 * @property \Illuminate\Support\Carbon $report_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $officer
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|FieldReport newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FieldReport newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FieldReport query()
 * @mixin \Eloquent
 */
class FieldReport extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'officer_id',
        'location',
        'conditions',
        'photos',
        'weather',
        'recommendations',
        'report_date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'photos' => 'array',
        'report_date' => 'date',
    ];

    /**
     * Get the officer who created this field report.
     */
    public function officer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'officer_id');
    }
}