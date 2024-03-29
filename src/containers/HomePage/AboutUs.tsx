import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../app/components/responsive';

import JeepImg from '../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw `
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  } 
`;

const InfoContainer = styled.div`
  ${tw `
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw `
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw `
    max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    mt-4
    font-normal
  `}
`

function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="car" />
      </CarContainer>
      <InfoContainer>
        <Title>Our Mission</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est porro, aut fugit ipsa quia libero! Perspiciatis dolores fugiat iste, debitis corrupti architecto sint tempore expedita, odit neque aliquid quod laborum fugit eos? Dignissimos atque eos laboriosam! Exercitationem esse molestias quis assumenda. Libero quod consequatur aut illo dolorem incidunt nihil distinctio dolorum error neque at eum a, porro dolores reiciendis, quia aperiam mollitia accusantium vero placeat hic nam optio nisi! Sapiente, ducimus maxime tempora delectus omnis nisi suscipit, asperiores quos ad similique nobis minima eum iste error cupiditate veniam? Aut vitae voluptate nihil earum odio! Repudiandae ut numquam blanditiis. Reprehenderit!
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}

export default AboutUs;
