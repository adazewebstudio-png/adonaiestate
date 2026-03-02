import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <Helmet>
                <title>Page Not Found | Adonai Estate Limited</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
            </Helmet>

            <div className="text-center max-w-lg mx-auto">
                <div className="mb-8">
                    <span className="text-[150px] md:text-[200px] font-bold text-gray-100 leading-none block font-serif select-none">
                        404
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif -mt-16">
                    Page Not Found
                </h1>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Let us help you find what you need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="btn btn-primary inline-flex items-center gap-2"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <Link
                        to="/listings"
                        className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white inline-flex items-center gap-2"
                    >
                        <Search size={18} />
                        Browse Properties
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-400">
                        Need help? <Link to="/contact" className="text-primary font-bold hover:text-gold transition-colors">Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
