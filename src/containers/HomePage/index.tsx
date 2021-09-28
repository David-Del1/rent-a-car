import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../app/components/bookCard';
import Footer from '../../app/components/Footer';
import { Marginer } from '../../app/components/Margin';
import NavBar from '../../app/components/NavBar';
import AboutUs from './AboutUs';
import BookingSteps from './BookingSteps';
import TopCars from './TopCars';
import TopSection from './TopSection';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return <PageContainer>
    <NavBar />
    <TopSection />
    <Marginer direction="vertical" margin="4em" />
    <BookCard />
    <Marginer direction="vertical" margin="2em" />
    <BookingSteps />
    <Marginer direction="vertical" margin="5em" />
    <AboutUs />
    <Marginer direction="vertical" margin="5em" />
    <TopCars />
    <Footer />
  </PageContainer>
}
