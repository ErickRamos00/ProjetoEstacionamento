export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  color: string;
  entryTime: Date;
  exitTime?: Date;
  spot: string;
}

export interface ParkingSpot {
  id: string;
  number: string;
  isOccupied: boolean;
  vehicleId?: string;
}