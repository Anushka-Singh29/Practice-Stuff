// src/components/ErrorPage.jsx
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    // This hook gives you the error object that was thrown
    const error = useRouteError();
    let errorData = { message: 'Something went wrong!' };

    // We can try to parse the response data we threw
    try {
      errorData = JSON.parse(error.data);
    } catch (e) {
      // If parsing fails, use a default message
      console.error("Could not parse error data:", e);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <h1 className="text-4xl font-bold text-red-600 mb-2">Oops! Error {error.status || ''}</h1>
            <p className="text-xl text-gray-800 mb-4">{error.statusText || 'An unexpected error occurred.'}</p>
            <p className="text-md text-gray-600 mb-8">{errorData.message}</p>
            <Link to="/" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;