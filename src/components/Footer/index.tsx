import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-center items-center fixed bottom-0 left-0 h-16 w-screen bg-gray-900 text-white">
                <p>@Copyright 2024</p>
            </div>
        </footer>
    );
};

export default Footer;