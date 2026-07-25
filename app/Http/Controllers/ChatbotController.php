<?php

namespace App\Http\Controllers;

use App\Services\GeminiService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatbotController extends Controller
{
    public function index() {
        return Inertia::render('chatbot');
    }

    public function store(Request $request, GeminiService $gemini) {
        $request->validate([
            'message' => ['required', 'string']
        ]);

        $messages = [
            [
                'role' => 'user',
                'parts' => [
                    [
                        'text' => $this->systemPrompt()
                                . "\n\nUser Message:\n"
                                . $request->message
                    ]
                ]
            ],
            [
                'role' => 'user',
                'parts' => [
                    [
                        'text' => 'halo'
                    ]
                ]
            ]
        ];
        $response = $gemini->generate($messages);

        return response()->json([
            'answer' => $response
        ]);
    }

    private function systemPrompt(): string {
        return <<<PROMPT
            Kamu adalah Karachat asisten dari Karaventure yang bisa membantu pengguna untuk menjawab seputar pertanyaan tentang
            website Karaventure dan juga tempat-tempat menarik yang ada di Karawang.

            Karaventure adalah sebuah aplikasi yang berupa website dan juga game untuk memperkenalkan budaya salah satu daerah dalam indonesia tepatnya karawang. Gamifikasi edukasi ini bertujuan untuk membuat Karawang lebih dikenal sejarah nya melalui platform populer yang sedang naik daun yaitu Roblox. Sebelum menjelajahi keunikan inovasi ini mari kita buka dengan mengapa inovasi ini dibuat.
            Apa sih masalahnya?
            Kalo dari sudut pandang stigma masyarakat yang selalu mengatakan karawang adalah kota industri kota pejuang rupiah dan cari duit. Daripada kt mengubah stigma nya, kita arahkan bagi para kepala keluarga untuk sesekali mengajak keluarga nya tour wisata tapi ga perlu pindah kota. Sehingga mencari duit di karawang tidak terasa mencekik dan liburan tidak harus sejauh bandung.

        PROMPT; 
    }
}
