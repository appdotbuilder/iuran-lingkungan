<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\FeeCategory
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property string $amount
 * @property string $billing_cycle
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Fee> $fees
 * @property-read int|null $fees_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereBillingCycle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeeCategory whereUpdatedAt($value)
 * @method static \Database\Factories\FeeCategoryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class FeeCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'amount',
        'billing_cycle',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'amount' => 'decimal:2',
    ];

    /**
     * Get the fees for this category.
     */
    public function fees(): HasMany
    {
        return $this->hasMany(Fee::class);
    }
}