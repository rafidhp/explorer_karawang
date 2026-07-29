<?php

namespace App\Http\Controllers;

use App\Models\Place\Place;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaceController extends Controller
{
    public function detail(Place $place) {
        $place->load([
            'category',
            'placeImages',
            'robloxImages',
        ]);
        
        return Inertia::render('place/place-index', [
            'place' => $place,
        ]);
    }
}
