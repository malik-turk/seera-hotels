import { useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
import Image from "next/image";

import { DatePickerContainer, DatePickerWrapper, SearchButton } from '../../../styled-components/Home';

import SearchIcon from '../../../assets/images/search.png';

import "react-datepicker/dist/react-datepicker.css";

export default function DateRange() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    return (
        <DatePickerWrapper>
            <DatePickerContainer>
                <span className="date-picker-label">
                    From
                </span>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                />
            </DatePickerContainer>
            <DatePickerContainer>
                <span className="date-picker-label">
                    To
                </span>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    minDate={startDate}
                    dateFormat="yyyy-MM-dd"
                />
            </DatePickerContainer>
            <Link href={
                {
                    pathname: '/hotels',
                    query: {
                        startDate: startDate.toString()
                    }
                }}
                passHref
            >
                <SearchButton>
                    <Image
                        src={SearchIcon}
                        alt="search icon"
                    />
                </SearchButton>
            </Link>
        </DatePickerWrapper>
    );
}
