import { useRouter } from 'next/router';
import { differenceInDays, parseISO } from 'date-fns';

import HotelCard from '../HotelCard';

import { Main, SortBar, HotelCards } from '../../../styled-components/Hotels';
import { Button } from '../../../styled-components/Shared';

import { HotelMainContentProps } from '../../../type/Hotels';

export default function HotelsMainContent(props: HotelMainContentProps) {
  const { query }: { query: any } = useRouter();

  const daysDifference = differenceInDays(
    parseISO(query.startDate),
    parseISO(query.endDate)
  );

  return (
    <Main>
      <SortBar>
        <span>Total Nights: {Math.abs(daysDifference)}</span>
        <div>
          <Button onClick={() => props.handleAlphaSorting()}>Sort By Name</Button>
          <Button onClick={() => props.handlePriceSorting()}>Sort By Price</Button>
        </div>
      </SortBar>
      <HotelCards>
        {
          props.hotels.length === 0 ?
          <h4>No Hotels Available In This Date Range</h4> :
          props.hotels.map((hotel, i) => (
            <HotelCard hotel={hotel} key={i} />
          ))
        }
      </HotelCards>
    </Main>
  );
}
