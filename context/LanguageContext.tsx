// Lib
import React, { useState, createContext, FC } from "react";

// interface
type LanguageContextState = {
    language: string;
    setLanguage: (name: string) => void;
};

const languageContextDefault: LanguageContextState = {
    language: "en",
    setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextState>(
    languageContextDefault
);

const LanguageContextProvider: FC = ({ children }) => {
    const [language, setLanguage] = useState<string>(
        languageContextDefault.language
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;
