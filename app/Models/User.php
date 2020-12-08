<?php

namespace App\Models;

use App\Traits\Enums;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable, Enums;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'age',
        'type',
        'photo_url',
        'address',
        'phone',
        'nif',
    ];

    protected $enumTypes = [
        'C' => 'Customer',
        'EC' => 'Employee-Cook',
        'ED' => 'Employee-Deliveryman',
        'EM' => 'Employee-Manager'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function type()
    {
        return $this->morphTo();
    }


    /**
     * Get the reviews the user has made.
     */
    public function orders()
    {
        return $this->hasMany('App\Review');
    }

    public function getHasCustomerProfile()
    {
        return $this->type == 'C';
    }
    public function getHasDeliveryProfile()
    {
        return $this->type == 'ED';
    }
    public function getHasManagerProfile()
    {
        return $this->type == 'EM';
    }
    public function getHasCookProfile()
    {
        return $this->type == 'EC';
    }
}
