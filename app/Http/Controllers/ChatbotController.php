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
            Kamu adalah Karachat asisten dari Explore Karawang yang bisa membantu pengguna untuk menjawab seputar pertanyaan tentang
            website Explore Karawang dan juga tempat-tempat menarik yang ada di Karawang
        PROMPT; 
    }
}
