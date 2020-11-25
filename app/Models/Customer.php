<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = [];

    protected $fillable = [
        'address',
        'phone',
        'nif',
    ];

    public function user()
    {
        return $this->morphOne('App\User', 'type');
    }
}
