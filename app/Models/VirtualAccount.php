<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\VirtualAccount
 *
 * @property int $id
 * @property int $user_id
 * @property string $account_number
 * @property string $bank_name
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount query()
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereBankName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VirtualAccount whereUserId($value)
 * @method static \Database\Factories\VirtualAccountFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class VirtualAccount extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'account_number',
        'bank_name',
        'status',
    ];

    /**
     * Get the user that owns the virtual account.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}