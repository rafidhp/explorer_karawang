<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Category;
use App\Models\Place\Place;
use App\Models\Place\PlaceImage;
use App\Models\Place\RobloxImage;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $image = 'https://cdn.jsdelivr.net/gh/rafidhp/explorer_karawang-assets@main/test.jpg';

        $places = [
            [
                'category' => 'Alam',
                'name' => 'Curug Cigentis',
                'tagline' => 'Air terjun tersembunyi di kaki Gunung Sanggabuana',
                'description' => 'Curug Cigentis adalah surga tersembunyi di Karawang Selatan. Air terjun setinggi sekitar 50 meter ini dikelilingi hutan rimbun dan udara sejuk khas pegunungan.',
                'tags' => ['air terjun', 'hiking', 'instagramable', 'sejuk'],
                'avg_rating' => 4.7,
                'address' => 'Desa Mekarbuana, Tegalwaru, Karawang',
                'district' => 'Tegalwaru',
                'hours' => '07.00 - 17.00',
                'lat' => -6.60000000,
                'lng' => 107.20000000,
                'is_featured' => true,
                'is_trending' => true,
                'is_hidden' => false,
            ],
            [
                'category' => 'Sejarah',
                'name' => 'Candi Jiwa Batujaya',
                'tagline' => 'Jejak peradaban Buddha tertua di Pulau Jawa',
                'description' => 'Kompleks Candi Batujaya menyimpan cerita peradaban abad ke-2 dan menjadi salah satu situs bersejarah penting di Karawang.',
                'tags' => ['candi', 'edukasi', 'fotografi', 'warisan'],
                'avg_rating' => 4.5,
                'address' => 'Segaran, Batujaya, Karawang',
                'district' => 'Batujaya',
                'hours' => '08.00 - 16.00',
                'lat' => -6.10000000,
                'lng' => 107.15000000,
                'is_featured' => true,
                'is_trending' => false,
                'is_hidden' => false,
            ],
            [
                'category' => 'Alam',
                'name' => 'Pantai Tanjung Baru',
                'tagline' => 'Sunset paling juara di pesisir utara Karawang',
                'description' => 'Pantai favorit untuk menikmati sunset dengan suasana santai bersama keluarga maupun teman.',
                'tags' => ['pantai', 'sunset', 'santai', 'keluarga'],
                'avg_rating' => 4.3,
                'address' => 'Cilamaya Wetan, Karawang',
                'district' => 'Cilamaya',
                'hours' => '24 jam',
                'lat' => -6.05000000,
                'lng' => 107.55000000,
                'is_featured' => false,
                'is_trending' => true,
                'is_hidden' => false,
            ],
            [
                'category' => 'Kuliner',
                'name' => 'Sate Maranggi Pak Asep',
                'tagline' => 'Sate maranggi legendaris, bumbu nendang sejak 1985',
                'description' => 'Kuliner legendaris Karawang dengan daging empuk dan sambal oncom khas yang menggugah selera.',
                'tags' => ['sate', 'legendaris', 'halal', 'murah'],
                'avg_rating' => 4.8,
                'address' => 'Jl. Tuparev, Karawang Barat',
                'district' => 'Karawang Barat',
                'hours' => '10.00 – 22.00',
                'lat' => -6.31000000,
                'lng' => 107.30000000,
                'is_featured' => true,
                'is_trending' => true,
                'is_hidden' => false,
            ],
            [
                'category' => 'Cafe',
                'name' => 'Kopi Kulon',
                'tagline' => 'Specialty coffee dengan vibe industrial-tropical',
                'description' => 'Cafe favorit untuk work from cafe dengan pilihan specialty coffee dari berbagai daerah Indonesia.',
                'tags' => ['specialty coffee', 'wfc', 'aesthetic', 'wifi'],
                'avg_rating' => 4.6,
                'address' => 'Jl. Galuh Mas Raya, Karawang',
                'district' => 'Karawang Barat',
                'hours' => '08.00 – 23.00',
                'lat' => -6.32000000,
                'lng' => 107.31000000,
                'is_featured' => true,
                'is_trending' => false,
                'is_hidden' => false,
            ],
            [
                'category' => 'Hiburan',
                'name' => 'Festive Walk Galuh Mas',
                'tagline' => 'Pusat nongkrong & belanja paling hidup di Karawang',
                'description' => 'Area hiburan terbuka dengan berbagai restoran, cafe, dan event komunitas setiap akhir pekan.',
                'tags' => ['nongkrong', 'weekend', 'live music', 'kuliner'],
                'avg_rating' => 4.4,
                'address' => 'Galuh Mas, Karawang Barat',
                'district' => 'Karawang Barat',
                'hours' => '10.00 – 23.00',
                'lat' => -6.33000000,
                'lng' => 107.31000000,
                'is_featured' => false,
                'is_trending' => true,
                'is_hidden' => false,
            ],
            [
                'category' => 'Belanja',
                'name' => 'Resinda Park Mall',
                'tagline' => 'Mall terbesar Karawang buat belanja & hangout',
                'description' => 'Pusat perbelanjaan modern dengan tenant lengkap, bioskop, dan area kuliner.',
                'tags' => ['mall', 'bioskop', 'keluarga', 'ac'],
                'avg_rating' => 4.5,
                'address' => 'Resinda, Teluk Jambe Timur',
                'district' => 'Teluk Jambe',
                'hours' => '10.00 – 22.00',
                'lat' => -6.35000000,
                'lng' => 107.30000000,
                'is_featured' => false,
                'is_trending' => false,
                'is_hidden' => false,
            ],
            [
                'category' => 'Hidden-Gems',
                'name' => 'Kampung Budaya Baru',
                'tagline' => 'Hidden gem buat ngerasain Karawang versi tradisional',
                'description' => 'Destinasi budaya dengan workshop batik, kuliner tradisional, dan pertunjukan seni daerah.',
                'tags' => ['budaya', 'workshop', 'tradisional', 'edukasi'],
                'avg_rating' => 4.7,
                'address' => 'Rengasdengklok, Karawang',
                'district' => 'Rengasdengklok',
                'hours' => '09.00 – 17.00',
                'lat' => -6.16000000,
                'lng' => 107.29000000,
                'is_featured' => true,
                'is_trending' => false,
                'is_hidden' => true,
            ],
        ];

        foreach ($places as $data) {
            $category = Category::where('name', $data['category'])->first();

            $place = Place::create([
                'category_id' => $category->id,
                'name' => $data['name'],
                'tagline' => $data['tagline'],
                'description' => $data['description'],
                'tags' => $data['tags'],
                'avg_rating' => $data['avg_rating'],
                'address' => $data['address'],
                'district' => $data['district'],
                'hours' => $data['hours'],
                'lat' => $data['lat'],
                'lng' => $data['lng'],
                'is_featured' => $data['is_featured'],
                'is_trending' => $data['is_trending'],
                'is_hidden' => $data['is_hidden'],
            ]);

            PlaceImage::create([
                'place_id' => $place->id,
                'image' => $image,
            ]);

            // dummy gallery tambahan
            PlaceImage::create([
                'place_id' => $place->id,
                'image' => $image,
            ]);

            RobloxImage::create([
                'place_id' => $place->id,
                'image' => $image,
            ]);
        }
    }
}
