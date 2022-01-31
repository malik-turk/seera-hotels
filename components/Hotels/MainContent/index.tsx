import HotelCard from '../HotelCard';

import { Main, SortBar, HotelCards } from '../../../styled-components/Hotels';
import { Button } from '../../../styled-components/Shared';

import { HotelMainContentProps } from '../../../type/Hotels';

export default function HotelsMainContent(props: HotelMainContentProps) {
  return (
    <Main>
      <SortBar>
        <span>Total Nights: 5</span>
        <div>
          <Button onClick={() => props.handleAlphaSorting()}>Sort By Name</Button>
          <Button onClick={() => props.handlePriceSorting()}>Sort By Price</Button>
        </div>
      </SortBar>
      <HotelCards>
        {props.hotels.map((hotel, i) => (
          <HotelCard hotel={hotel} key={i} />
        ))}
      </HotelCards>
    </Main>
  );
}
