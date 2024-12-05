import React from 'react';
import { ParkingGrid } from '../components/ParkingGrid';
import { VehicleForm } from '../components/VehicleForm';
import { Vehicle, ParkingSpot } from '../types/parking';

export function HomePage() {
  const [spots] = React.useState<ParkingSpot[]>([
    { id: '1', number: 'A1', isOccupied: false },
    { id: '2', number: 'A2', isOccupied: true },
    { id: '3', number: 'A3', isOccupied: false },
    { id: '4', number: 'B1', isOccupied: false },
    { id: '5', number: 'B2', isOccupied: true },
    { id: '6', number: 'B3', isOccupied: false },
    { id: '7', number: 'C1', isOccupied: false },
    { id: '8', number: 'C2', isOccupied: false },
  ]);

  const handleSpotClick = (spot: ParkingSpot) => {
    console.log('Clicked spot:', spot);
  };

  const handleVehicleSubmit = (vehicleData: Omit<Vehicle, 'id' | 'entryTime'>) => {
    console.log('New vehicle:', vehicleData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Parking Layout</h2>
          <ParkingGrid spots={spots} onSpotClick={handleSpotClick} />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Register New Vehicle</h2>
          <VehicleForm onSubmit={handleVehicleSubmit} />
        </div>
      </div>
    </div>
  );
}