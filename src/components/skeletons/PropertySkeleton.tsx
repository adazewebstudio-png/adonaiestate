import React from 'react';

const PropertySkeleton = () => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded mt-4"></div>
        </div>
    </div>
);

export default PropertySkeleton;
