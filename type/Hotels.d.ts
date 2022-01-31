export interface Hotel {
    available_on: string;
    city: string;
    name: string;
    price: string;
}

export interface HotelMainContentProps {
    hotels: Hotel[];
    handleAlphaSorting?: Dispatch<SetStateAction<string>>;
    handlePriceSorting?: Dispatch<SetStateAction<string>>;
}

export interface HotelSideNavProps {
    setSearchValue?: Dispatch<SetStateAction<string>>;
    setRangeValues?: Dispatch<SetStateAction<string>>;
}
