import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingFallback = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-gold" size={48} />
                <p className="text-gray-500 font-bold tracking-widest uppercase text-xs animate-pulse">Loading Adonai Estate...</p>
            </div>
        </div>
    );
};

export default LoadingFallback;
