<?php

namespace App\Models\Chatbot;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Chatbot extends Model
{
    protected $table = 'chatbots';
    protected $fillable = [
        'user_id',
        'title',
        'is_active'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function chatMessages() {
        return $this->hasMany(ChatMessage::class, 'chatbot_id');
    }
}
