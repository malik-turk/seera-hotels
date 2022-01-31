import { HotelCard } from '../../../styled-components/Hotels';

import { Hotel } from '../../../type/Hotels';

export default function HotelCardComponent({ hotel} : { hotel: Hotel }) {
  return (
      <HotelCard>
        <div>
            <span className="card-item-key">Name: </span>
            <span>{hotel.name}</span>
        </div>

        <div>
            <span className="card-item-key">Price: </span>
            <span>{hotel.price}</span>
        </div>

        <div>
            <span className="card-item-key">City: </span>
            <span>{hotel.city}</span>
        </div>
      </HotelCard>
  );
}
