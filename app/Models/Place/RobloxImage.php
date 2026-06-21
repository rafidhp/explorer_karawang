<?php

namespace App\Models\Place;

use Illuminate\Database\Eloquent\Model;

class RobloxImage extends Model
{
    protected $table = 'roblox_images';
    protected $fillable = [
        'place_id',
        'image',
    ];

    public function place() {
        return $this->belongsTo(Place::class, 'place_id');
    }
}
