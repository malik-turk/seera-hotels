import { useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
import Image from "next/image";
import { add, format, parseISO } from 'date-fns';

import { DatePickerContainer, DatePickerWrapper, SearchButton } from '../../../styled-components/Home';

import SearchIcon from '../../../assets/images/search.png';

import "react-datepicker/dist/react-datepicker.css";

export default function DateRange() {
    const [startDate, setStartDate] = useState<Date>(parseISO('2022-08-10'));
    const [endDate, setEndDate] = useState<Date>(add(startDate, { months: 4 }));

    return (
        <DatePickerWrapper>
            <DatePickerContainer>
                <span className="date-picker-label">
                    From
                </span>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                        setStartDate(date);
                        setEndDate(add(date, { days: 1 }))
                    }}
                    minDate={parseISO('2022-08-10')}
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
                        startDate: format(startDate, 'yyyy-MM-dd'),
                        endDate: format(endDate, 'yyyy-MM-dd')
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
