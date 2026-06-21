<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Kuliner',
            ],
            [
                'name' => 'Cafe',
            ],
            [
                'name' => 'Alam',
            ],
            [
                'name' => 'Sejarah',
            ],
            [
                'name' => 'Hiburan',
            ],
            [
                'name' => 'Belanja',
            ],
            [
                'name' => 'Hidden-Gems',
            ],
        ];

        foreach($categories as $value => $key) {
            Category::create($key);
        }
    }
}
