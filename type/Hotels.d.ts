export interface Hotel {
    available_on: string;
    city: string;
    name: string;
    price: string;
}

export interface HotelCardProps {
    hotel: Hotel;
    daysDifference: number;
}

export interface HotelMainContentProps {
    hotels: Hotel[];
    handleAlphaSorting?: Dispatch<SetStateAction<string>>;
    handlePriceSorting?: Dispatch<SetStateAction<string>>;
}

export interface HotelSideNavProps {
    hotels: Hotel[];
    setSearchValue?: Dispatch<SetStateAction<string>>;
    setRangeValues?: Dispatch<SetStateAction<string>>;
}
