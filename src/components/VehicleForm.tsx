import React, { useState } from 'react';
import { Vehicle } from '../types/parking';

interface VehicleFormProps {
  onSubmit: (vehicle: Omit<Vehicle, 'id' | 'entryTime'>) => void;
}

export function VehicleForm({ onSubmit }: VehicleFormProps) {
  const [formData, setFormData] = useState({
    plate: '',
    model: '',
    color: '',
    spot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ plate: '', model: '', color: '', spot: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="plate" className="block text-sm font-medium text-gray-700">
          License Plate
        </label>
        <input
          type="text"
          id="plate"
          value={formData.plate}
          onChange={(e) => setFormData({ ...formData, plate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Vehicle Model
        </label>
        <input
          type="text"
          id="model"
          value={formData.model}
          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
          Color
        </label>
        <input
          type="text"
          id="color"
          value={formData.color}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="spot" className="block text-sm font-medium text-gray-700">
          Parking Spot
        </label>
        <input
          type="text"
          id="spot"
          value={formData.spot}
          onChange={(e) => setFormData({ ...formData, spot: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Register Vehicle
      </button>
    </form>
  );
}