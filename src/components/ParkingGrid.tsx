import React from 'react';
import { ParkingSpot } from '../types/parking';
import { Car } from 'lucide-react';
import { clsx } from 'clsx';

interface ParkingGridProps {
  spots: ParkingSpot[];
  onSpotClick: (spot: ParkingSpot) => void;
}

export function ParkingGrid({ spots, onSpotClick }: ParkingGridProps) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
      {spots.map((spot) => (
        <button
          key={spot.id}
          onClick={() => onSpotClick(spot)}
          className={clsx(
            'aspect-square rounded-lg p-4 flex flex-col items-center justify-center transition-all',
            spot.isOccupied
              ? 'bg-red-100 hover:bg-red-200'
              : 'bg-green-100 hover:bg-green-200'
          )}
        >
          <Car className={clsx('h-8 w-8', spot.isOccupied ? 'text-red-600' : 'text-green-600')} />
          <span className="mt-2 font-semibold">{spot.number}</span>
          <span className="text-sm text-gray-600">
            {spot.isOccupied ? 'Occupied' : 'Available'}
          </span>
        </button>
      ))}
    </div>
  );
}