import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps {
  theme: "filled" | "outlined"
  text: string;
}

const BaseButton = styled.button`
  ${tw`
    p-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`;

const OutlinedButton = styled(BaseButton)`

  ${tw`
    bg-red-500
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
  `}
`;

function Button(props: IButtonProps) {

  const { theme, text } = props;

  if(theme === "outlined")
    return (
      <FilledButton>
        {text}
      </FilledButton>
    );
  else {
    return <OutlinedButton>
      {text}
    </OutlinedButton>
}}

export default Button
