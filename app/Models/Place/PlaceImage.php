<?php

namespace App\Models\Place;

use Illuminate\Database\Eloquent\Model;

class PlaceImage extends Model
{
    protected $table = 'place_images';
    protected $fillable = [
        'place_id',
        'image',
    ];

    public function place() {
        return $this->belongsTo(Place::class, 'place_id');
    }
}
