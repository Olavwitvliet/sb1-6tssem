export interface SwimSession {
  id: string;
  date: Date;
  waterTemp: number;
  duration: number;
  distance: number;
  location: {
    name: string;
    temp: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  feelings: {
    before: string;
    during: string;
    after: string;
  };
}