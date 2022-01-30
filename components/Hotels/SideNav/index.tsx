import Image from "next/image";
import Slider, { Range } from 'rc-slider';

import { SideNav, HotelNameInput, ImageContainer, RangeContainer } from '../../../styled-components/Hotels';

import SearchIcon from '../../../assets/images/search.png';

import 'rc-slider/assets/index.css';

export default function SideNavComponent() {
  return (
    <SideNav>
      <HotelNameInput>
        <ImageContainer>
          <Image
            src={SearchIcon}
            alt="search icon"
            layout="intrinsic"
            width={15}
            height={15}
          />
        </ImageContainer>
        <input type="text" id="" placeholder="Hotel Name..." />
      </HotelNameInput>
      <RangeContainer>
        <span>Price Filter</span>
        <Range
          pushable
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
      </RangeContainer>
    </SideNav>
  );
}
