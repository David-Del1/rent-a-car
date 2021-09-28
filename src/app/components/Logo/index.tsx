import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

interface ILogoProps {
  color?: "white" | "dark"
} 

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
    ${({ color }: any) => (color === "white" ?tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`

  width: auto;
  ${tw`
    h-6 
    md:h-9
  `}
  svg {
    font-size: 2rem;
    color: #ec3838;
  }
`

function Logo(props: ILogoProps) {
  const { color } = props;

  return (
    <LogoContainer>
      <Image>
        <FontAwesomeIcon 
          icon={faCar}
        />
      </Image>
      <LogoText color={color || "dark"}>
        Coche
      </LogoText>
    </LogoContainer>
  )
}

export default Logo;
