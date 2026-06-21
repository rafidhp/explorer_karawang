<?php

use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::controller(ChatbotController::class)->group(function () {
    Route::get('/chatbot', 'index')->name('chatbot');
    Route::post('/chatbot/store', 'store')->name('chatbot.store');
});

require __DIR__.'/settings.php';
