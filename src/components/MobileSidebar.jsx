import React from 'react';
import { X } from 'lucide-react';

const MobileSidebar = ({ setIsOpen, menus }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm">
      <div className="w-64 h-full bg-gradient-to-br from-blue-300 to-blue-100 p-5 shadow-md transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-blue-600">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {menus.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
