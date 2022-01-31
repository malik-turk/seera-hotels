import Image from "next/image";
import { createSliderWithTooltip, Range } from 'rc-slider';

import { SideNav, HotelNameInput, ImageContainer, RangeContainer } from '../../../styled-components/Hotels';

import { HotelSideNavProps } from "../../../type/Hotels";

import SearchIcon from '../../../assets/images/search.png';

import 'rc-slider/assets/index.css';

const RangeComponent = createSliderWithTooltip(Range);

export default function SideNavComponent(props: HotelSideNavProps) {
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
        <input
          type="text"
          placeholder="Hotel Name..."
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </HotelNameInput>
      <RangeContainer>
        <span className="price-filter-label">Price Filter</span>
        <RangeComponent
          pushable
          min={200}
          max={350}
          defaultValue={[200, 350]}
          onChange={(e: number[]) => props.setRangeValues(e)}
        />
      </RangeContainer>
    </SideNav>
  );
}
