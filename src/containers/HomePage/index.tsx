import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../app/components/bookCard';
import { Marginer } from '../../app/components/Margin';
import NavBar from '../../app/components/NavBar';
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
    <Marginer direction="vertical" margin="1em" />
    <BookCard />
  </PageContainer>
}
