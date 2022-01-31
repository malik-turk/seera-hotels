import axios from 'axios';
import { useState, useEffect } from 'react';

import { HotelsWrapper, HotelsContainer } from '../styled-components/Hotels';
import { Container } from '../styled-components/Shared';

import SideNavComponent from '../components/Hotels/SideNav';
import MainContent from '../components/Hotels/MainContent';

import { baseURL, hotelsEndpoint } from '../config/config';

import { Hotel } from '../type/Hotels';

export async function getServerSideProps() {
  const { data } = await axios.get(`${baseURL}${hotelsEndpoint}`);

  return {
    props: {
      hotelsData: JSON.parse(data.slice(0, -7) + ']')
    }
  }
}

export default function Hotels({ hotelsData }: { hotelsData: Hotel[] }) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [rangeValue, setRangeValue] = useState<number[]>([200, 350]);
  const [hotels, setHotelsData] = useState<Hotel[]>(hotelsData);

  useEffect(() => {
    const filtered = hotelsData.filter((hotel: Hotel) => {
      return hotel.name.toLowerCase().includes(searchValue.toLowerCase()) &&
             parseInt(hotel.price, 10) >= rangeValue[0] && parseInt(hotel.price, 10) <= rangeValue[1]
    });

    setHotelsData(filtered);
    // Disabling eslint here, no need to watch hotels
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, rangeValue]);

  /**
   * Sorts hotels alphabetically
   */
  const handleAlphaSorting = () => {
    const tempHotels: Hotel[] = [...hotels];

    tempHotels.sort((prev: Hotel, curr: Hotel) => prev.name > curr.name ? 1 : -1);

    setHotelsData(tempHotels);
  };

  /**
   * Sorts hotels according to the price ascending
   */
  const handlePriceSorting = () => {
    const tempHotels: Hotel[] = [...hotels];

    tempHotels.sort((prev: Hotel, curr: Hotel) => {
      return prev.price > curr.price ? 1 : -1;
    });

    setHotelsData(tempHotels);
  };

  return (
    <HotelsWrapper>
      <Container>
        <HotelsContainer>
          <SideNavComponent
            setRangeValues={setRangeValue}
            setSearchValue={setSearchValue}
          />
          <MainContent
            hotels={hotels}
            handleAlphaSorting={handleAlphaSorting}
            handlePriceSorting={handlePriceSorting}
          />
        </HotelsContainer>
      </Container>
    </HotelsWrapper>
  );
}
