'use client'

import {useTelegram} from "@/shared/telegram-provider";

export const TelegramDataPage = () => {
    const {webApp, user} = useTelegram();

    console.log('webApp', webApp)
    console.log('user', user)

    const userData = JSON.stringify(user, null, 10)

    return (
        <div style={{display:'flex', padding: '2rem', justifyContent:'center'}}>
            <div style={{maxWidth:'18.75rem'}}>
            {userData}
            </div>
        </div>
    );
};
