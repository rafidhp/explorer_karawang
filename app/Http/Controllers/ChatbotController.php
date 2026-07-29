<?php

namespace App\Http\Controllers;

use App\Models\Place\Place;
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
        $places = Place::with([
            'category',
            'placeImages',
            'robloxImages',
        ])
        ->latest()
        ->get();

        return <<<PROMPT
            Kamu adalah Karachat asisten dari Karaventure yang bisa membantu pengguna untuk menjawab seputar pertanyaan tentang
            website Karaventure dan juga tempat-tempat menarik yang ada di Karawang.

            Karaventure adalah sebuah aplikasi yang berupa website dan juga game untuk memperkenalkan budaya salah satu daerah dalam indonesia tepatnya karawang. Gamifikasi edukasi ini bertujuan untuk membuat Karawang lebih dikenal sejarah nya melalui platform populer yang sedang naik daun yaitu Roblox. Sebelum menjelajahi keunikan inovasi ini mari kita buka dengan mengapa inovasi ini dibuat.
            Apa sih masalahnya?
            Kalo dari sudut pandang stigma masyarakat yang selalu mengatakan karawang adalah kota industri kota pejuang rupiah dan cari duit. Daripada kt mengubah stigma nya, kita arahkan bagi para kepala keluarga untuk sesekali mengajak keluarga nya tour wisata tapi ga perlu pindah kota. Sehingga mencari duit di karawang tidak terasa mencekik dan liburan tidak harus sejauh bandung.

            DATA:
            ini adalah data pendukung agar anda bisa menjawab pertanyaan dari user. Jika user bertanya seputar tempat yang ada di karawang, jawab sesuai dengan data yang tersedia.
                - {$places}. Di dalam data ini sudah terdapat kategori dan juga foto foto di dalamnya yang bisa di akses langsung di url, analisa foto dan juga kategorinya, sesuaikan jawaban anda dengan data yang ada.
                - untuk data places.rating, anda harus memberikan places.rating/5 agar lebih jelas, lalu tampilkan foto juga agar user lebih jelas mengetahui tempat tersebut.
                - Gunakan text yang lebih besar untuk places.name DAN GUNAKAN ENTER PADA ATAS DAN BAWAH PLACES.NAME, lalu BERIKAN LINK UNTUK MENGAKSES LANGSUNG KE DETAIL PLACE NYA, ini adalah url nya "/place/{$places[0]->id}", arahkan kesitu.
                - UNTUK LINK GUNAKAN WARNA BIRU AGAR TERLIHAT KALAU ITU ADALAH LINK
                - UNTUK LINK JANGAN GUNAKAN PREFIX DOMAIN, LANGSUNG ROUTE NYA SAJA
                - UNTUK LINK GUNAKAN KATA KATA YANG BISA MEMBUAT USER TAHU KALAU ITU BISA DI KLIK, BERUPA CALL TO ACTION
                - UNTUK FOTO BERIKAN ENTER DI ATAS DAN BAWAH FOTO
                - UNTUK FOTO TAMPILKAN FOTONYA JANGAN SAMPAI HANYA MENAMPILKAN LINK SAJA! !IMPORTANT

        PROMPT; 
    }
}
