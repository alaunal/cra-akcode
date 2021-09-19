import React from 'react';

import 'twin.macro';

const Errors = props => {
    return (
        <div tw="h-screen flex items-center justify-center text-center flex-col">
            <h1 tw="text-8xl font-bold text-red-600 mb-4 font-mono">404</h1>
            <p tw="text-xl text-gray-500">PAGE NOT FOUND!</p>
        </div>
    );
};

export default Errors;
