import { Hotel } from "../type/Hotels";

/**
 * Returns the lowest priced hotel
 *
 * @export
 * @param {Hotel[]} hotel hotel array
 * @returns {number} minimum price
 */
export function getHotelMinPrice(hotel: Hotel[]): number {
    return parseInt(hotel.reduce((min, p) => p.price < min ? p.price : min, hotel[0]?.price), 10);
}

/**
 * Returns the Heights priced hotel
 *
 * @export
 * @param {Hotel[]} hotel hotel array
 * @returns {number} maximum price
 */
export function getHotelMaxPrice(hotel: Hotel[]): number {
    return parseInt(hotel.reduce((min, p) => p.price > min ? p.price : min, hotel[0]?.price), 10);
}
