import { HotelCard } from '../../../styled-components/Hotels';

import { HotelCardProps } from '../../../type/Hotels';

export default function HotelCardComponent(props: HotelCardProps) {
  return (
      <HotelCard>
        <div>
            <span className="card-item-key">Name: </span>
            <span>{props.hotel.name}</span>
        </div>

        <div>
            <span className="card-item-key">Price: </span>
            <span>{(parseInt(props.hotel.price, 10) * Math.abs(props.daysDifference)).toLocaleString()} AED</span>
        </div>

        <div>
            <span className="card-item-key">City: </span>
            <span>{props.hotel.city}</span>
        </div>
      </HotelCard>
  );
}
