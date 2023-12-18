"use client"
import React from 'react';

const ErrorWrapper = ({error}: {error: Error}) => {
    return (
        <h1 className="text-red-700 font-bold text-center p-20">Oops! {error.message}</h1>
    );
};

export default ErrorWrapper;