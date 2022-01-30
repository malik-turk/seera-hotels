import { HotelCard } from '../../../styled-components/Hotels';

export default function HotelCardComponent() {
  return (
      <HotelCard>
        <div>
            <span className="card-item-key">Name:</span>
            <span>Hilton Dubai Al Habtoor City</span>
        </div>

        <div>
            <span className="card-item-key">Price:</span>
            <span>275</span>
        </div>

        <div>
            <span className="card-item-key">City:</span>
            <span>Dubai</span>
        </div>
      </HotelCard>
  );
}
