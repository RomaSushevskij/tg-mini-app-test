import {Metadata} from "next";
import {TelegramDataPage} from "@/pages/telegram-data";

export const metadata: Metadata = {
    title: 'Telegram data',
}

export default function Home() {

    return (
        <TelegramDataPage/>
    );
}
