import { GPS } from './types';
import { Spot} from './Spot';

export class Parking {
    id: number;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parkIds: number[];

    constructor(id: number, name: string, city_id: number, location: GPS, numberOfSpots: number, hourlyRate: number, opened: boolean = true) {
        this.id = id;
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened = opened;
        this.hourlyRate = hourlyRate;
        this.parkIds = [];
        
        // Génération des places de parking (Spot)
        for (let i = 0; i < numberOfSpots; i++) {
            const spot = new Spot(i + 1, id);
            this.parkIds.push(spot.id);
        }
    }
}