import { HeroCard } from "@/Components/HeroCard"
import { Chatbot } from "@/Components/Chatbot"

export const MainPage = ()=>{
        return(
        <div >
            <HeroCard />
            <div className="flex justify-center ">
                <Chatbot />
            </div>
        </div>
    )
}