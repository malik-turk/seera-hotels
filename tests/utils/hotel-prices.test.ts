import { getHotelMinPrice, getHotelMaxPrice } from '../../utils/hotel-prices';

import { Hotel } from '../../type/Hotels';

const mockHotel: Hotel[] = [
    {
        'name': 'Kempinski Hotel Mall of the Emirates',
        'price': '200',
        'city': 'dubai',
        'available_on': '2022-10-21'
    },
    {
        'name': 'Address Dubai Mall',
        'price': '350',
        'city': 'dubai',
        'available_on': '2022-10-21'
    },
];

describe('getHotelMinPrice', () => {
    it('should return the minimum price in hotels array', () => {
        expect(getHotelMinPrice(mockHotel)).toEqual(200);
    });

    it('should not fail if  no data provided', () => {
        expect(getHotelMinPrice([])).toEqual(NaN);
    });
});

describe('getHotelMaxPrice', () => {
    it('should return the maximum price in hotels array', () => {
        expect(getHotelMaxPrice(mockHotel)).toEqual(350);
    });

    it('should not fail if  no data provided', () => {
        expect(getHotelMinPrice([])).toEqual(NaN);
    });
});
