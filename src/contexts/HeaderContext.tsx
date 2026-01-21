import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface HeaderContextType {
    isTransparent: boolean;
    setIsTransparent: (transparent: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
    const [isTransparent, setIsTransparent] = useState(false);

    return (
        <HeaderContext.Provider value={{ isTransparent, setIsTransparent }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderStyle = () => {
    const context = useContext(HeaderContext);
    if (context === undefined) {
        throw new Error('useHeaderStyle must be used within a HeaderProvider');
    }
    return context;
};
