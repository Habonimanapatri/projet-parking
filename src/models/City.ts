import { toSlug } from '../utils/toSlug';
import { GPS } from './types';

export class City {
    id: number;
    name: string;
    slug: string;
    parkingsIds: number[];
    country: string;
    location: GPS;

    constructor(id: number, name: string, country: string, location: GPS, parkingsIds: number[] = []) {
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.parkingsIds = parkingsIds;
        this.country = country;
        this.location = location;
    }
}