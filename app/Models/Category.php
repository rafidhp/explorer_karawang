<?php

namespace App\Models;

use App\Models\Place\Place;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        'name',
    ];

    public function places() {
        return $this->hasMany(Place::class, 'category_id');
    }
}
