<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Manager extends Model
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

    /**
     * Get the products the user has added.
     */
    public function products()
    {
        return $this->hasMany('App\Product');
    }
}
