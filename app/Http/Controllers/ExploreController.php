<?php

namespace App\Http\Controllers;

use App\Models\Place\Place;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExploreController extends Controller
{
    public function index() {
        $places = Place::with([
            'category',
            'placeImages',
            'robloxImages',
        ])
        ->latest()
        ->get();

        return Inertia::render('explore', [
            'places' => $places,
        ]);
    }
}
