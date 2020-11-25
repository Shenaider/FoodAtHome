<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Order
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'notes',
        'total_price',
        'date',
        'prepared_by',
        'delivered_by',
        'opened_at',
        'closed_at',
        'current_status_at',
        'status',
        'preparation_time',
        'delivery_time',
        'total_time'
    ];

    protected $enumStatuses = [
        'H',
        'P',
        'R',
        'T',
        'D',
        'C'
    ];

    /**
     * Get the products the user has added.
     */
    public function products()
    {
        return $this->hasMany('App\Product');
    }
}
