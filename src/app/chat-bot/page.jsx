'use client'
import { Chatbot } from "@/Components/Chatbot"

const ChatBotPage = () =>{

  return (
    <div className="w-full min-h-screen">
      <Chatbot isFullPage={true} />
    </div>
  )
}

export default ChatBotPage;