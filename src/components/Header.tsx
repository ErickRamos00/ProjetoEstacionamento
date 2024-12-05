import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ClipboardList, Home } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">ParkingPro</span>
          </Link>
          
          <nav className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/vehicles" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <Car className="h-5 w-5" />
              <span>Vehicles</span>
            </Link>
            <Link to="/history" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <ClipboardList className="h-5 w-5" />
              <span>History</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}