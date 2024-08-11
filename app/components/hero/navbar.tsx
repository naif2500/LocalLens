"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput); // Pass the search query to the parent component
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-1000 w-full bg-gray-700 p-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="navbar-logo mb-4 md:mb-0"> {/* Add margin on small devices */}
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={200} // Width for larger screens
            height={50} // Height for larger screens
            sizes="(max-width: 768px) 150px, 200px" // Responsive sizes
            className="w-[150px] md:w-[200px] h-auto mx-auto md:mx-0" // Center logo on small devices
            priority={true} // Load the logo as a priority resource
          />
        </div>
        <form onSubmit={handleSearch} className="flex justify-center md:justify-end">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-2 rounded-md border-none outline-none w-full md:w-72"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
