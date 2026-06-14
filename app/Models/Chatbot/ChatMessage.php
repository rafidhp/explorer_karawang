<?php

namespace App\Models\Chatbot;

use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    protected $table = 'chat_messages';
    protected $fillable = [
        'chatbot_id',
        'sender',
        'message',
        'metadata',
    ];

    public function chatbot() {
        return $this->belongsTo(Chatbot::class, 'chatbot_id');
    }
}
