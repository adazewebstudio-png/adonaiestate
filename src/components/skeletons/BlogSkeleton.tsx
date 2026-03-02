import React from 'react';

const BlogSkeleton = () => (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col h-full animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="p-8 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-7 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
    </div>
);

export default BlogSkeleton;
