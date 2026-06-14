export interface Chatbot {
    id: number,
    user_id: number,
    title: string,
    is_active: boolean,

    chat_messages: ChatMessage[];
}

export interface ChatMessage {
    id: number;
    chatbot_id: number;
    sender: 'USER' | 'AI';
    message: string;
    metadata: JSON | null;

    chatbot: Chatbot;
}