import HotelCard from '../HotelCard';

import { Main, SortBar, HotelCards } from '../../../styled-components/Hotels';
import { Button } from '../../../styled-components/Shared';

export default function HotelsMainContent() {
  return (
    <Main>
      <SortBar>
        <span>Total Nights: 5</span>
        <div>
          <Button>Sort By Name</Button>
          <Button>Sort By Price</Button>
        </div>
      </SortBar>
      <HotelCards>
        {[1, 2, 3, 4].map((i) => (
          <HotelCard key={i} />
        ))}
      </HotelCards>
    </Main>
  );
}
