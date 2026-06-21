<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Laravel\Fortify\Features;
use Illuminate\Http\Request;
use Inertia\Inertia;


class HomeController extends Controller
{
    public function index() {
        $categories = Category::all();
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'categories' => $categories,
        ]);
    }
}
