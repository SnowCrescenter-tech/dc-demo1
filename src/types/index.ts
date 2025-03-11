export interface Course {
  id: string;
  name: string;
  teacher: string;
  location: string;
  weekday: number;
  section: number[];
  weeks: number[];
}

export interface BusRoute {
  id: string;
  name: string;
  stations: {
    name: string;
    location: {
      lat: number;
      lng: number;
    };
  }[];
  currentLocation: {
    lat: number;
    lng: number;
  };
  estimatedTime: number;
  capacity: {
    current: number;
    total: number;
  };
}

export interface Venue {
  id: string;
  name: string;
  type: 'library' | 'basketball' | 'classroom';
  capacity: number;
  currentCount: number;
  status: 'available' | 'busy' | 'full';
  openTime: string;
  closeTime: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  organizer: string;
  tags: string[];
  image?: string;
}

export interface Canteen {
  id: string;
  name: string;
  floors: {
    id: string;
    name: string;
    windows: {
      id: string;
      name: string;
      waitingCount: number;
      popularDishes: string[];
      status: 'open' | 'closed';
    }[];
  }[];
  crowdLevel: number;
  peakHours: string[];
}
