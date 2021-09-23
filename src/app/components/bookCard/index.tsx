import React, { useState } from 'react';
import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Button from '../Button';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Marginer } from '../Margin';
import { SCREENS } from '../responsive';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  margin-bottom: 20em;
  ${tw `
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `}
`;

const ItemsContainer = styled.div`
  ${tw`
    flex
    relative
  `}
`

const Icon = styled.span`
  ${tw `
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const SmallIcon = styled.span`
  ${tw `
    text-gray-600
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `}
`;

const LineSeparator = styled.span`
width: 2px;
height: 45%;
  ${tw `
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;

const CalendarContainer = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3em;
  left: 0em;

  ${({ offset }: any) => offset && css`
    left: -6em
  `}

  @media only screen and (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [returnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const handleOpenStartCalendar = () => {
    setStartCalendarOpen(!startCalendarOpen)
    setReturnCalendarOpen(false);
  }

  const handleOpenReturnCalendar = () => {
    setReturnCalendarOpen(!returnCalendarOpen);
    setStartCalendarOpen(false);
  }
  
  return (
    <CardContainer>
      <ItemsContainer>
        <Icon>
         <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={handleOpenStartCalendar}
        >
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={startCalendarOpen ? faCaretUp : faCaretDown } />
        </SmallIcon>
        {startCalendarOpen && (
        <CalendarContainer value={startDate} onChange={setStartDate as any} />
        )}
      </ItemsContainer>
      <LineSeparator />
      <ItemsContainer className="mr-6">
        <Icon>
         <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={handleOpenReturnCalendar}
        >
          Return Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={returnCalendarOpen ? faCaretUp : faCaretDown } />
        </SmallIcon>
        {returnCalendarOpen && (
        <CalendarContainer 
          offset
          value={returnDate} 
          onChange={setReturnDate as any} />
        )}
      </ItemsContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button theme="filled" text="Book Your Ride" />
    </CardContainer>
  );
}

export default BookCard;

