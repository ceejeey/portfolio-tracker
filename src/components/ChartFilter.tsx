import React from 'react';

const ChartFilter = ({ text, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-8 m-1 h-6 border-none rounded flex items-center justify-center cursor-pointer ${
                active ? 'bg-gray-700  text-gray-100' : ' text-gray-900'
            } transition duration-200 hover:bg-black hover:text-gray-100`}
        >
            <p className="text-xs">{text}</p>
        </button>
    );
};

export default ChartFilter;
