'use client'

import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState,} from "react";
import type {TTelegramUser, TWebApp} from "./telegram-provider.types";

export interface ITelegramContext {
    webApp?: TWebApp;
    user?: TTelegramUser;
}

const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({children}: { children: ReactNode }) => {
    const [webApp, setWebApp] = useState<TWebApp | null>(null);

    useEffect(() => {
        const app = (window as any).Telegram?.WebApp;
        if (app) {
            app.ready();
            setWebApp(app);
        }
    }, []);

    const value = useMemo(() => {
        return webApp
            ? {
                webApp,
                unsafeData: webApp.initDataUnsafe,
                user: webApp.initDataUnsafe.user,
            }
            : {};
    }, [webApp]);

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    );
};

export const useTelegram = () => useContext(TelegramContext);
