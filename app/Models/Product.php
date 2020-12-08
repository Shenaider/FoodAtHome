<?php

namespace App\Models;

use App\Traits\Enums;

class Product
{
    use Enums;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'description',
        'photo_url',
        'price',
    ];

    protected $enumTypes = [
        'Hot Dish',
        'Cold Dish',
        'Drink',
        'Dessert'
    ];
}
